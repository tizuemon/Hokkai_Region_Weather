import requests
import json
import os

# 提供されたcityMasterから座標データのみを抽出
CITIES = {
    "札幌": {"lat": 43.06, "lon": 141.35},
    "倶知安": {"lat": 42.90, "lon": 140.75},
    "岩見沢": {"lat": 43.20, "lon": 141.77},
    "滝川": {"lat": 43.55, "lon": 141.91},
    "函館": {"lat": 41.77, "lon": 140.73},
    "室蘭": {"lat": 42.32, "lon": 140.97},
    "江差": {"lat": 41.86, "lon": 140.12},
    "浦河": {"lat": 42.16, "lon": 142.77},
    "旭川": {"lat": 43.77, "lon": 142.36},
    "稚内": {"lat": 45.41, "lon": 141.67},
    "留萌": {"lat": 43.94, "lon": 141.64},
    "釧路": {"lat": 42.98, "lon": 144.38},
    "根室": {"lat": 43.33, "lon": 145.58},
    "帯広": {"lat": 42.92, "lon": 143.20},
    "北見": {"lat": 43.80, "lon": 143.89},
    "網走": {"lat": 44.02, "lon": 144.27},
    "豊原": {"lat": 46.96, "lon": 142.73},
    "真岡": {"lat": 47.05, "lon": 142.05},
    "本斗": {"lat": 46.67, "lon": 141.85},
    "泊居": {"lat": 47.76, "lon": 142.18},
    "落合": {"lat": 47.35, "lon": 142.75},
    "知取": {"lat": 48.62, "lon": 142.78},
    "敷香": {"lat": 49.23, "lon": 143.11},
    "気屯": {"lat": 49.75, "lon": 142.83},
    "恵須取": {"lat": 49.07, "lon": 142.10},
    "珍内": {"lat": 48.42, "lon": 142.12},
    "泊": {"lat": 43.75, "lon": 145.51},
    "留別": {"lat": 44.93, "lon": 147.63},
    "紗那": {"lat": 44.03, "lon": 145.86},
    "得撫": {"lat": 45.85, "lon": 149.88},
    "新知": {"lat": 46.85, "lon": 151.75},
    "松輪": {"lat": 48.05, "lon": 153.20},
    "阿頼度": {"lat": 50.88, "lon": 155.55},
    "黒石": {"lat": 49.45, "lon": 154.75},
    "柏原": {"lat": 50.67, "lon": 156.12}
}

def fetch_weather():
    names = list(CITIES.keys())
    lats = ",".join([str(CITIES[n]["lat"]) for n in names])
    lons = ",".join([str(CITIES[n]["lon"]) for n in names])
    
    # Open-Meteo API URL (複数地点一括リクエスト)
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lats}&longitude={lons}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo"
    
    print("APIからデータを取得中...")
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Error: APIリクエストに失敗しました ({response.status_code})")
        return

    data = response.json()
    
    # APIのレスポンス形式に合わせてパース
    # 複数地点の場合、dataはリスト形式で返ってくる
    weather_cache = {}
    for i, name in enumerate(names):
        target_data = data[i] if isinstance(data, list) else data
        # Note: Open-Meteoの仕様で地点が1つの場合と複数の場合で構造が少し変わることがあります
        # ここでは一括取得（リスト）を想定
        weather_cache[name] = {
            "current": data[i]["current"],
            "hourly": data[i]["hourly"],
            "daily": data[i]["daily"]
        }
    
    # JSONファイルとして保存
    with open('weather_data.json', 'w', encoding='utf-8') as f:
        json.dump(weather_cache, f, ensure_ascii=False, indent=2)
    print("weather_data.json を更新しました。")

if __name__ == "__main__":
    fetch_weather()