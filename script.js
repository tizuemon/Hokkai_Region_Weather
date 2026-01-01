const cityMaster = {
    "札幌": { 
        lat: 43.06, lon: 141.35, region: "北海道", area: "道央", main: true, ru: "", 
        posAll:  { top: 50, left: 10 }, 
        posReg:  { top: 50, left: 35 }, 
        posArea: { top: 62, left: 50 } 
    },
    "倶知安": { 
        lat: 42.90, lon: 140.75, region: "北海道", area: "道央", main: false, ru: "", 
        posAll:  { top: 74, left: 26 }, 
        posReg:  { top: 60, left: 32 }, 
        posArea: { top: 55, left: 30 } 
    },
    "岩見沢": { 
        lat: 43.20, lon: 141.77, region: "北海道", area: "道央", main: false, ru: "", 
        posAll:  { top: 68, left: 35 }, 
        posReg:  { top: 50, left: 45 }, 
        posArea: { top: 62, left: 70 } 
    },
    "滝川": { 
        lat: 43.55, lon: 141.91, region: "北海道", area: "道央", main: false, ru: "", 
        posAll:  { top: 62, left: 38 }, 
        posReg:  { top: 42, left: 48 }, 
        posArea: { top: 30, left: 80 } 
    },
    "函館": { 
        lat: 41.77, lon: 140.73, region: "北海道", area: "道南", main: true, ru: "", 
        posAll:  { top: 83, left: 10 }, 
        posReg:  { top: 83, left: 15 }, 
        posArea: { top: 75, left: 25 } 
    },
    "室蘭": { 
        lat: 42.32, lon: 140.97, region: "北海道", area: "道南", main: true, ru: "", 
        posAll:  { top: 78, left: 30 }, 
        posReg:  { top: 83, left: 35 }, 
        posArea: { top: 40, left: 48 } 
    },
    "江差": { 
        lat: 41.86, lon: 140.12, region: "北海道", area: "道南", main: false, ru: "", 
        posAll:  { top: 86, left: 18 }, 
        posReg:  { top: 82, left: 22 }, 
        posArea: { top: 40, left: 25 } 
    },
    "浦河": { 
        lat: 42.16, lon: 142.77, region: "北海道", area: "道南", main: false, ru: "", 
        posAll:  { top: 82, left: 48 }, 
        posReg:  { top: 72, left: 60 }, 
        posArea: { top: 75, left: 70 } 
    },
    "旭川": { 
        lat: 43.77, lon: 142.36, region: "北海道", area: "道北", main: true, ru: "", 
        posAll:  { top: 58, left: 45 }, 
        posReg:  { top: 50, left: 55 }, 
        posArea: { top: 60, left: 52 } 
    },
    "稚内": { 
        lat: 45.41, lon: 141.67, region: "北海道", area: "道北", main: true, ru: "", 
        posAll:  { top: 38, left: 38 }, 
        posReg:  { top: 17, left: 50 }, 
        posArea: { top: 20, left: 52 } 
    },
    "留萌": { 
        lat: 43.94, lon: 141.64, region: "北海道", area: "道北", main: false, ru: "", 
        posAll:  { top: 52, left: 35 }, 
        posReg:  { top: 35, left: 45 }, 
        posArea: { top: 45, left: 30 } 
    },
    "釧路": { 
        lat: 42.98, lon: 144.38, region: "北海道", area: "道東", main: true, ru: "", 
        posAll:  { top: 83, left: 32 }, 
        posReg:  { top: 83, left: 60 }, 
        posArea: { top: 75, left: 50 } 
    },
    "根室": { 
        lat: 43.33, lon: 145.58, region: "北海道", area: "道東", main: false, ru: "", 
        posAll:  { top: 70, left: 88 }, 
        posReg:  { top: 58, left: 92 }, 
        posArea: { top: 75, left: 75 } 
    },
    "帯広": { 
        lat: 42.92, lon: 143.20, region: "北海道", area: "道東", main: false, ru: "", 
        posAll:  { top: 76, left: 55 }, 
        posReg:  { top: 68, left: 65 }, 
        posArea: { top: 75, left: 25 } 
    },
    "北見": { 
        lat: 43.80, lon: 143.89, region: "北海道", area: "道東", main: false, ru: "", 
        posAll:  { top: 56, left: 68 }, 
        posReg:  { top: 45, left: 78 }, 
        posArea: { top: 35, left: 35 } 
    },
    "網走": { 
        lat: 44.02, lon: 144.27, region: "北海道", area: "道東", main: true, ru: "", 
        posAll:  { top: 55, left: 58 }, 
        posReg:  { top: 50, left: 75 }, 
        posArea: { top: 35, left: 60 } 
    },
    "豊原": { 
        lat: 46.96, lon: 142.73, region: "樺太", area: "樺太南部", main: true, ru: "ユジノサハリンスク", 
        posAll:  { top: 50, left: 32 }, 
        posReg:  { top: 83, left: 50 }, 
        posArea: { top: 75, left: 60 } 
    },
    "真岡": { 
        lat: 47.05, lon: 142.05, region: "樺太", area: "樺太南部", main: true, ru: "ホルムスク", 
        posAll:  { top: 50, left: 28 }, 
        posReg:  { top: 60, left: 30 }, 
        posArea: { top: 50, left: 35 } 
    },
    "本斗": { 
        lat: 46.67, lon: 141.85, region: "樺太", area: "樺太南部", main: false, ru: "ネベリスク", 
        posAll:  { top: 58, left: 25 }, 
        posReg:  { top: 85, left: 45 }, 
        posArea: { top: 83, left: 25 } 
    },
    "泊居": { 
        lat: 47.76, lon: 142.18, region: "樺太", area: "樺太南部", main: false, ru: "トマリ", 
        posAll:  { top: 38, left: 28 }, 
        posReg:  { top: 60, left: 52 }, 
        posArea: { top: 17, left: 45 } 
    },
    "落合": { 
        lat: 47.35, lon: 142.75, region: "樺太", area: "樺太南部", main: false, ru: "ドリンスク", 
        posAll:  { top: 45, left: 38 }, 
        posReg:  { top: 70, left: 68 }, 
        posArea: { top: 40, left: 70 } 
    },
    "知取": { 
        lat: 48.62, lon: 142.78, region: "樺太", area: "樺太北部", main: true, ru: "マカロフ", 
        posAll:  { top: 25, left: 45 }, 
        posReg:  { top: 50, left: 50 }, 
        posArea: { top: 80, left: 40 } 
    },
    "敷香": { 
        lat: 49.23, lon: 143.11, region: "樺太", area: "樺太北部", main: true, ru: "ポロナイスク", 
        posAll:  { top: 17, left: 52 }, 
        posReg:  { top: 30, left: 70 }, 
        posArea: { top: 55, left: 60 } 
    },
    "気屯": { 
        lat: 49.75, lon: 142.83, region: "樺太", area: "樺太北部", main: false, ru: "スミルヌイフ", 
        posAll:  { top: 10, left: 48 }, 
        posReg:  { top: 22, left: 58 }, 
        posArea: { top: 20, left: 60 } 
    },
    "恵須取": { 
        lat: 49.07, lon: 142.10, region: "樺太", area: "樺太北部", main: true, ru: "ウグレゴルスク", 
        posAll:  { top: 17, left: 32 }, 
        posReg:  { top: 17, left: 50 }, 
        posArea: { top: 17, left: 30 } 
    },
    "珍内": { 
        lat: 48.42, lon: 142.12, region: "樺太", area: "樺太北部", main: false, ru: "クラスノゴルスク", 
        posAll:  { top: 28, left: 28 }, 
        posReg:  { top: 48, left: 52 }, 
        posArea: { top: 50, left: 17 } 
    },
    "泊": { 
        lat: 43.75, lon: 145.51, region: "千島", area: "南千島", main: true, ru: "", 
        posAll:  { top: 78, left: 82 }, 
        posReg:  { top: 82, left: 17 }, 
        posArea: { top: 65, left: 20 } 
    },
    "留別": { 
        lat: 44.93, lon: 147.63, region: "千島", area: "南千島", main: false, ru: "", 
        posAll:  { top: 76, left: 56 }, 
        posReg:  { top: 78, left: 32 }, 
        posArea: { top: 55, left: 50 } 
    },
    "紗那": { 
        lat: 44.03, lon: 145.86, region: "千島", area: "南千島", main: true, ru: "", 
        posAll:  { top: 75, left: 52 }, 
        posReg:  { top: 77, left: 40 }, 
        posArea: { top: 40, left: 75 } 
    },
    "得撫": { 
        lat: 45.85, lon: 149.88, region: "千島", area: "中千島", main: false, ru: "", 
        posAll:  { top: 74, left: 78 }, 
        posReg:  { top: 55, left: 52 }, 
        posArea: { top: 75, left: 30 } 
    },
    "新知": { 
        lat: 46.85, lon: 151.75, region: "千島", area: "中千島", main: true, ru: "", 
        posAll:  { top: 72, left: 82 }, 
        posReg:  { top: 72, left: 63 }, 
        posArea: { top: 55, left: 55 } 
    },
    "松輪": { 
        lat: 48.05, lon: 153.20, region: "千島", area: "中千島", main: true, ru: "", 
        posAll:  { top: 65, left: 71 }, 
        posReg:  { top: 35, left: 68 }, 
        posArea: { top: 30, left: 85 } 
    },
    "阿頼度": { 
        lat: 50.88, lon: 155.55, region: "千島", area: "北千島", main: false, ru: "", 
        posAll:  { top: 48, left: 88 }, 
        posReg:  { top: 15, left: 82 }, 
        posArea: { top: 20, left: 45 } 
    },
    "黒石": { 
        lat: 49.45, lon: 154.75, region: "千島", area: "北千島", main: false, ru: "", 
        posAll:  { top: 58, left: 78 }, 
        posReg:  { top: 32, left: 70 }, 
        posArea: { top: 75, left: 60 } 
    },
    "柏原": { 
        lat: 50.67, lon: 156.12, region: "千島", area: "北千島", main: true, ru: "", 
        posAll:  { top: 50, left: 90 }, 
        posReg:  { top: 25, left: 90 }, 
        posArea: { top: 40, left: 87 } 
    }
};

const mapBounds = {
    all: { img: "all.png" }, "北海道": { img: "hokkaido.png" }, "道南": { img: "hokkaido_south.png" }, "道央": { img: "hokkaido_central.png" },
    "道北": { img: "hokkaido_north.png" }, "道東": { img: "hokkaido_east.png" }, "樺太": { img: "karafuto.png" }, 
    "樺太北部": { img: "karafuto_north.png" }, "樺太南部": { img: "karafuto_south.png" }, "千島": { img: "chishima.png" }, 
    "南千島": { img: "chishima_south.png" }, "中千島": { img: "chishima_central.png" }, "北千島": { img: "chishima_north.png" }
};

let weatherCache = null;
let activeCity = null; 
let currentRegion = "all";
let currentArea = null;

window.onload = async () => {
    updateTabUI('all');
    initMap('main-map', 'all');
    await loadWeatherData();
};

async function loadWeatherData() {
    try {
        // GitHub Actionsで生成されるJSONを読み込む
        const res = await fetch('./weather_data.json');
        if (!res.ok) throw new Error("Weather data not found. Run update script first.");
        
        weatherCache = await res.json();
        
        // 更新時刻の表示（現在の時刻を表示）
        document.getElementById('update-time').innerText = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        renderCityList();
        updateMapMarkers();
    } catch (e) { 
        console.error("Data Load Error:", e);
        document.getElementById('update-time').innerText = "読み込み失敗";
    }
}

function initMap(elementId, boundKey) {
    const map = document.getElementById(elementId);
    if (!map) return;
    map.innerHTML = "";
    const config = mapBounds[boundKey] || mapBounds.all;
    const imgPath = `img/${config.img}`;
    map.style.backgroundImage = `url('${imgPath}')`;
    map.style.backgroundSize = "cover";
    map.style.backgroundPosition = "center";
    
    const testImg = new Image();
    testImg.src = imgPath;
    testImg.onerror = () => {
        map.style.backgroundImage = "none";
        map.innerHTML = `<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#8e8e93; font-size:12px; border:2px dashed #ccc; border-radius:16px; background:#eef2f6;">Missing: ${config.img}</div>`;
        drawMarkers();
    };
    testImg.onload = () => drawMarkers();

    function drawMarkers() {
        let citiesToDraw = (boundKey === 'all') ? ["函館", "札幌", "釧路", "豊原", "敷香", "恵須取", "紗那", "柏原", "松輪"] : Object.keys(cityMaster).filter(n => {
            const city = cityMaster[n];
            if (currentArea) return city.area === currentArea;
            return city.region === currentRegion && city.main;
        });
        const viewType = (boundKey === 'all') ? "all" : (currentArea ? "area" : "reg");

        citiesToDraw.forEach(name => {
            const city = cityMaster[name];
            const pos = getPos(viewType, name);
            const div = document.createElement('div');
            div.className = "city-marker";
            div.style.top = pos.top; div.style.left = pos.left;
            div.setAttribute('data-name', name);
            div.onclick = (e) => { 
                e.stopPropagation(); 
                if (currentRegion === "all") { showRegion(city.region); }
                else if (currentArea === null) {
                    const areaButtons = document.querySelectorAll('.sub-tabs button');
                    areaButtons.forEach(btn => { if (btn.innerText === city.area) selectArea(city.area, btn); });
                } else { toggleCityDetail(name, 'reg'); }
            };
            map.appendChild(div);
        });
        updateMapMarkers();
    }
}

function updateMapMarkers() {
    document.querySelectorAll('.city-marker').forEach(m => {
        const name = m.getAttribute('data-name');
        if (weatherCache && weatherCache[name]) {
            const w = weatherCache[name];
            m.innerHTML = `
                <div class="marker-name">${name}</div>
                <div class="marker-mid-row">
                    <span class="marker-weather-text">${getWeatherText(w.current.weather_code)}</span>
                    <span class="marker-temp">${Math.round(w.current.temperature_2m)}°</span>
                </div>
                <img src="${getWeatherIcon(w.current.weather_code)}" style="width:28px; height:28px; object-fit:contain;">
                <div class="marker-range">
                    <span class="range-max">${Math.round(w.daily.temperature_2m_max[0])}</span> / <span class="range-min">${Math.round(w.daily.temperature_2m_min[0])}</span>
                </div>`;
        }
    });
}

function renderCityList() {
    const isAll = (currentRegion === "all");
    const list = document.getElementById(isAll ? 'main-city-list' : 'region-city-list');
    if (!list) return;
    list.innerHTML = "";
    const prefix = isAll ? 'all' : 'reg';
    Object.keys(cityMaster).forEach(name => {
        const city = cityMaster[name];
        if (isAll && !city.main) return;
        if (!isAll && (currentArea ? city.area !== currentArea : (city.region !== currentRegion || !city.main))) return;
        
        const w = weatherCache ? weatherCache[name] : null;
        if (!w) return;

        const wrapper = document.createElement('div');
        wrapper.className = "city-item-wrapper";
        wrapper.id = `wrapper-${prefix}-${name}`;
        wrapper.innerHTML = `
            <div class="city-row-main" onclick="toggleCityDetail('${name}', '${prefix}')">
                <div class="city-name-container">
                    <span class="city-name-jp">${name}</span>
                    <span id="time-target-${prefix}-${name}" class="update-time-inline"></span>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                    <img src="${getWeatherIcon(w.current.weather_code)}" style="width:30px; height:30px; object-fit:contain;">
                    <span style="font-size:1.4rem; font-weight:bold; color:var(--primary-blue);">${Math.round(w.current.temperature_2m)}°</span>
                </div>
            </div>
            <div id="detail-container-${prefix}-${name}" class="hidden"></div>`;
        list.appendChild(wrapper);
    });
}

function showRegion(regionName) {
    closeAllDetails(); currentRegion = regionName; currentArea = null; 
    updateTabUI(regionName);
    document.getElementById('view-all').classList.add('hidden');
    document.getElementById('view-region').classList.remove('hidden');
    renderSubTabs(regionName);
    initMap('region-map-box', regionName);
    renderCityList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSubTabs(regionName) {
    const container = document.getElementById('sub-tabs-container');
    const subTabs = document.getElementById('sub-tabs');
    subTabs.innerHTML = "";
    const areas = [...new Set(Object.values(cityMaster).filter(c => c.region === regionName).map(c => c.area))];
    if (areas.length > 0) {
        container.classList.remove('hidden');
        const mainBtn = document.createElement('button');
        mainBtn.innerText = "主要都市"; mainBtn.className = "active";
        mainBtn.onclick = () => selectArea(null, mainBtn);
        subTabs.appendChild(mainBtn);
        areas.forEach(area => {
            const btn = document.createElement('button');
            btn.innerText = area;
            btn.onclick = () => selectArea(area, btn);
            subTabs.appendChild(btn);
        });
    } else { container.classList.add('hidden'); }
}

function selectArea(areaName, btnElement) {
    closeAllDetails();
    currentArea = areaName;
    document.querySelectorAll('.sub-tabs button').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    initMap('region-map-box', areaName || currentRegion);
    renderCityList();
}

function showView(viewName) {
    closeAllDetails(); currentRegion = "all"; currentArea = null;
    updateTabUI('all');
    document.getElementById('sub-tabs-container').classList.add('hidden');
    document.getElementById('view-all').classList.remove('hidden');
    document.getElementById('view-region').classList.add('hidden');
    initMap('main-map', 'all'); 
    renderCityList(); 
}

function updateTabUI(activeId) {
    document.querySelectorAll('.region-tabs button').forEach(btn => btn.classList.remove('active'));
    const t = document.getElementById(`tab-${activeId}`);
    if (t) t.classList.add('active');
}

async function toggleCityDetail(name, prefix) {
    const container = document.getElementById(`detail-container-${prefix}-${name}`);
    const cityKey = name + prefix;
    if (activeCity === cityKey) {
        closeAllDetails();
        activeCity = null;
    } else {
        closeAllDetails(); 
        activeCity = cityKey; 
        openCityDetailOnly(name, prefix);
        setTimeout(() => {
            const el = document.getElementById(`wrapper-${prefix}-${name}`);
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
        }, 100);
    }
}

function openCityDetailOnly(name, prefix) {
    const container = document.getElementById(`detail-container-${prefix}-${name}`);
    const timeTarget = document.getElementById(`time-target-${prefix}-${name}`);
    if (!container || !weatherCache || !weatherCache[name]) return;
    
    const w = weatherCache[name];
    const timeStr = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    if (timeTarget) timeTarget.innerText = `${timeStr} 表示`;

    let hourlyHtml = "", dailyHtml = "";
    const nowHour = new Date().getHours();
    
    // Hourly
    for(let i=0; i<24; i++) {
        const idx = nowHour + i;
        if(!w.hourly.time[idx]) break;
        hourlyHtml += `<div class="forecast-item">
            <div style="font-size:11px; color:#888;">${new Date(w.hourly.time[idx]).getHours()}時</div>
            <div style="font-size:10px;">${getWeatherText(w.hourly.weather_code[idx])}</div>
            <img src="${getWeatherIcon(w.hourly.weather_code[idx])}" style="width:28px; height:28px; margin:4px 0;">
            <div style="font-size:14px; font-weight:bold;">${Math.round(w.hourly.temperature_2m[idx])}°</div>
        </div>`;
    }

    // Daily
    for(let i=0; i<7; i++) {
        const d = new Date(w.daily.time[i]);
        dailyHtml += `<div class="forecast-item" style="min-width: 85px;">
            <div style="font-size:11px; color:#888;">${i===0?"今日":`${d.getMonth()+1}/${d.getDate()}`}(${["日","月","火","水","木","金","土"][d.getDay()]})</div>
            <div style="font-size:10px;">${getWeatherText(w.daily.weather_code[i])}</div>
            <img src="${getWeatherIcon(w.daily.weather_code[i])}" style="width:28px; height:28px; margin:4px 0;">
            <div style="font-size:13px; font-weight:bold;"><span style="color:#ff453a;">${Math.round(w.daily.temperature_2m_max[i])}°</span> <span style="color:#007aff;">${Math.round(w.daily.temperature_2m_min[i])}°</span></div>
        </div>`;
    }

    container.innerHTML = `
        <div class="detail-card">
            ${cityMaster[name].ru ? `<div class="ru-label-sub">ロシア名: ${cityMaster[name].ru}</div>` : ''}
            <div style="display:flex; align-items:center; gap:15px; background:#f0f7ff; padding:15px; border-radius:15px; margin-top: 10px;">
                <div style="text-align:center;">
                    <img src="${getWeatherIcon(w.current.weather_code)}" style="width:50px; height:50px;">
                    <div style="font-size:12px; font-weight:bold;">${getWeatherText(w.current.weather_code)}</div>
                </div>
                <div style="flex-grow:1;">
                    <span style="font-size:2.2rem; font-weight:bold; color:var(--primary-blue);">${Math.round(w.current.temperature_2m)}℃</span>
                    <div style="font-size:0.9rem; color:#666;">最高:${Math.round(w.daily.temperature_2m_max[0])}° / 最低:${Math.round(w.daily.temperature_2m_min[0])}°</div>
                </div>
                <div class="weather-sub-info">
                    <div>湿度: <b>${w.current.relative_humidity_2m}%</b></div>
                    <div>風速: <b>${w.current.wind_speed_10m}m/s</b></div>
                </div>
            </div>
            <h3 class="section-title">24時間予報</h3>
            <div class="forecast-scroll-container"><div class="forecast-grid">${hourlyHtml}</div></div>
            <h3 class="section-title">週間予報</h3>
            <div class="forecast-scroll-container"><div class="forecast-grid">${dailyHtml}</div></div>
        </div>`;
    container.classList.remove('hidden');
}

function closeAllDetails() {
    document.querySelectorAll('[id^="detail-container-"]').forEach(el => { el.innerHTML = ""; el.classList.add('hidden'); });
    document.querySelectorAll('.update-time-inline').forEach(el => el.innerText = "");
}

function getPos(viewType, name) {
    const city = cityMaster[name];
    let coords = (viewType === "all") ? city.posAll : (viewType === "area" ? city.posArea : city.posReg);
    return { top: (coords ? coords.top : 50) + "%", left: (coords ? coords.left : 50) + "%" };
}

function getWeatherIcon(code) {
    // 晴れ
    if (code === 0) return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    // 晴れ～曇り
    if (code <= 3) return "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
    // 雨・雪・雷
    return "https://cdn-icons-png.flaticon.com/512/1146/1146858.png";
}

function getWeatherText(code) {
    if (code === 0) return "快晴"; if (code <= 3) return "晴れ"; if (code <= 48) return "霧";
    if (code <= 55) return "霧雨"; if (code <= 65) return "雨"; if (code <= 75) return "雪";
    if (code <= 82) return "俄雨"; if (code <= 86) return "雪"; return "雷雨";
}