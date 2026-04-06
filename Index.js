/* ============================================================
   BATTLE ARENA – FLAG WARS
   Physics Engine v1.3 – Rotational Torque & Projectile Bombs
   ============================================================ */

'use strict';

const COUNTRIES = [
    { code: 'ad', name: 'Andorra' }, { code: 'ae', name: 'UAE' }, { code: 'af', name: 'Afghanistan' },
    { code: 'ag', name: 'Antigua' }, { code: 'al', name: 'Albania' }, { code: 'am', name: 'Armenia' },
    { code: 'ao', name: 'Angola' }, { code: 'ar', name: 'Argentina' }, { code: 'at', name: 'Austria' },
    { code: 'au', name: 'Australia' }, { code: 'az', name: 'Azerbaijan' }, { code: 'ba', name: 'Bosnia' },
    { code: 'bb', name: 'Barbados' }, { code: 'bd', name: 'Bangladesh' }, { code: 'be', name: 'Belgium' },
    { code: 'bf', name: 'Burkina Faso' }, { code: 'bg', name: 'Bulgaria' }, { code: 'bh', name: 'Bahrain' },
    { code: 'bi', name: 'Burundi' }, { code: 'bj', name: 'Benin' }, { code: 'bn', name: 'Brunei' },
    { code: 'bo', name: 'Bolivia' }, { code: 'br', name: 'Brazil' }, { code: 'bs', name: 'Bahamas' },
    { code: 'bt', name: 'Bhutan' }, { code: 'bw', name: 'Botswana' }, { code: 'by', name: 'Belarus' },
    { code: 'bz', name: 'Belize' }, { code: 'ca', name: 'Canada' }, { code: 'cd', name: 'DR Congo' },
    { code: 'cf', name: 'C. African Rep.' }, { code: 'cg', name: 'Congo' }, { code: 'ch', name: 'Switzerland' },
    { code: 'ci', name: "Côte d'Ivoire" }, { code: 'cl', name: 'Chile' }, { code: 'cm', name: 'Cameroon' },
    { code: 'cn', name: 'China' }, { code: 'co', name: 'Colombia' }, { code: 'cr', name: 'Costa Rica' },
    { code: 'cu', name: 'Cuba' }, { code: 'cv', name: 'Cape Verde' }, { code: 'cy', name: 'Cyprus' },
    { code: 'cz', name: 'Czech Rep' }, { code: 'de', name: 'Germany' }, { code: 'dj', name: 'Djibouti' },
    { code: 'dk', name: 'Denmark' }, { code: 'dm', name: 'Dominica' }, { code: 'dz', name: 'Algeria' },
    { code: 'ec', name: 'Ecuador' }, { code: 'ee', name: 'Estonia' }, { code: 'eg', name: 'Egypt' },
    { code: 'er', name: 'Eritrea' }, { code: 'es', name: 'Spain' }, { code: 'et', name: 'Ethiopia' },
    { code: 'fi', name: 'Finland' }, { code: 'fj', name: 'Fiji' }, { code: 'fm', name: 'Micronesia' },
    { code: 'fr', name: 'France' }, { code: 'ga', name: 'Gabon' }, { code: 'gb', name: 'UK' },
    { code: 'gd', name: 'Grenada' }, { code: 'ge', name: 'Georgia' }, { code: 'gh', name: 'Ghana' },
    { code: 'gm', name: 'Gambia' }, { code: 'gn', name: 'Guinea' }, { code: 'gq', name: 'Eq. Guinea' },
    { code: 'gr', name: 'Greece' }, { code: 'gt', name: 'Guatemala' }, { code: 'gw', name: 'Guinea-Bissau' },
    { code: 'gy', name: 'Guyana' }, { code: 'hn', name: 'Honduras' }, { code: 'hr', name: 'Croatia' },
    { code: 'ht', name: 'Haiti' }, { code: 'hu', name: 'Hungary' }, { code: 'id', name: 'Indonesia' },
    { code: 'ie', name: 'Ireland' }, { code: 'il', name: 'Israel' }, { code: 'in', name: 'India' },
    { code: 'iq', name: 'Iraq' }, { code: 'ir', name: 'Iran' }, { code: 'is', name: 'Iceland' },
    { code: 'it', name: 'Italy' }, { code: 'jm', name: 'Jamaica' }, { code: 'jo', name: 'Jordan' },
    { code: 'jp', name: 'Japan' }, { code: 'ke', name: 'Kenya' }, { code: 'kg', name: 'Kyrgyzstan' },
    { code: 'kh', name: 'Cambodia' }, { code: 'km', name: 'Comoros' }, { code: 'kn', name: 'St Kitts' },
    { code: 'kp', name: 'North Korea' }, { code: 'kr', name: 'South Korea' }, { code: 'kw', name: 'Kuwait' },
    { code: 'kz', name: 'Kazakhstan' }, { code: 'la', name: 'Laos' }, { code: 'lb', name: 'Lebanon' },
    { code: 'lc', name: 'Saint Lucia' }, { code: 'li', name: 'Liechtenstein' }, { code: 'lk', name: 'Sri Lanka' },
    { code: 'lr', name: 'Liberia' }, { code: 'ls', name: 'Lesotho' }, { code: 'lt', name: 'Lithuania' },
    { code: 'lu', name: 'Luxembourg' }, { code: 'lv', name: 'Latvia' }, { code: 'ly', name: 'Libya' },
    { code: 'ma', name: 'Morocco' }, { code: 'mc', name: 'Monaco' }, { code: 'md', name: 'Moldova' },
    { code: 'me', name: 'Montenegro' }, { code: 'mg', name: 'Madagascar' }, { code: 'mk', name: 'N. Macedonia' },
    { code: 'ml', name: 'Mali' }, { code: 'mm', name: 'Myanmar' }, { code: 'mn', name: 'Mongolia' },
    { code: 'mr', name: 'Mauritania' }, { code: 'mt', name: 'Malta' }, { code: 'mu', name: 'Mauritius' },
    { code: 'mv', name: 'Maldives' }, { code: 'mw', name: 'Malawi' }, { code: 'mx', name: 'Mexico' },
    { code: 'my', name: 'Malaysia' }, { code: 'mz', name: 'Mozambique' }, { code: 'na', name: 'Namibia' },
    { code: 'ne', name: 'Niger' }, { code: 'ng', name: 'Nigeria' }, { code: 'ni', name: 'Nicaragua' },
    { code: 'nl', name: 'Netherlands' }, { code: 'no', name: 'Norway' }, { code: 'np', name: 'Nepal' },
    { code: 'nr', name: 'Nauru' }, { code: 'nz', name: 'New Zealand' }, { code: 'om', name: 'Oman' },
    { code: 'pa', name: 'Panama' }, { code: 'pe', name: 'Peru' }, { code: 'pg', name: 'P.N. Guinea' },
    { code: 'ph', name: 'Philippines' }, { code: 'pk', name: 'Pakistan' }, { code: 'pl', name: 'Poland' },
    { code: 'ps', name: 'Palestine' }, { code: 'pt', name: 'Portugal' }, { code: 'pw', name: 'Palau' },
    { code: 'py', name: 'Paraguay' }, { code: 'qa', name: 'Qatar' }, { code: 'ro', name: 'Romania' },
    { code: 'rs', name: 'Serbia' }, { code: 'ru', name: 'Russia' }, { code: 'rw', name: 'Rwanda' },
    { code: 'sa', name: 'Saudi Arabia' }, { code: 'sb', name: 'Solomon Islands' }, { code: 'sc', name: 'Seychelles' },
    { code: 'sd', name: 'Sudan' }, { code: 'se', name: 'Sweden' }, { code: 'sg', name: 'Singapore' },
    { code: 'si', name: 'Slovenia' }, { code: 'sk', name: 'Slovakia' }, { code: 'sl', name: 'Sierra Leone' },
    { code: 'sm', name: 'San Marino' }, { code: 'sn', name: 'Senegal' }, { code: 'so', name: 'Somalia' },
    { code: 'sr', name: 'Suriname' }, { code: 'ss', name: 'South Sudan' }, { code: 'st', name: 'São Tomé' },
    { code: 'sy', name: 'Syria' }, { code: 'sz', name: 'Eswatini' }, { code: 'td', name: 'Chad' },
    { code: 'tg', name: 'Togo' }, { code: 'th', name: 'Thailand' }, { code: 'tj', name: 'Tajikistan' },
    { code: 'tl', name: 'Timor-Leste' }, { code: 'tm', name: 'Turkmenistan' }, { code: 'tn', name: 'Tunisia' },
    { code: 'to', name: 'Tonga' }, { code: 'tr', name: 'Turkey' }, { code: 'tt', name: 'Trinidad' },
    { code: 'tv', name: 'Tuvalu' }, { code: 'tz', name: 'Tanzania' }, { code: 'ua', name: 'Ukraine' },
    { code: 'ug', name: 'Uganda' }, { code: 'us', name: 'USA' }, { code: 'uy', name: 'Uruguay' },
    { code: 'uz', name: 'Uzbekistan' }, { code: 'va', name: 'Vatican' }, { code: 'vc', name: 'St Vincent' },
    { code: 've', name: 'Venezuela' }, { code: 'vn', name: 'Vietnam' }, { code: 'vu', name: 'Vanuatu' },
    { code: 'za', name: 'South Africa' }, { code: 'zm', name: 'Zambia' }, { code: 'zw', name: 'Zimbabwe' },
];

const BASE_CFG = {
    maxPlayers: 10,
    playerRadius: 22, // Reduced from 28
    playerSpeed: 3.5,
    playerMaxHP: 100,
    obstacleCount: 2,
    crossArmLength: 110,
    crossArmWidth: 18,
    obstacleDamage: 0,
    wallDamage: 0,
    playerCollDmg: 0,
    itemSpawnMs: 3000,
    bulletSpeed: 10,
    bulletDamage: 1,
    bulletMaxAge: 160,
    bombRadius: 120,
    bombDamage: 50,
    shieldDuration: 500,
    friction: 0.99,
    torqueFactor: 0.15,
    gracePeriod: 60,
    bulletRadius: 5,
    bombBulletRadius: 12,
    gunWidth: 22,
    gunHeight: 10,
    spikeLength: 18,
    spikeBaseWidth: 6,
    hpBarWidth: 56,
    hpBarHeight: 7,
    nameFontSize: 13,
};

let CFG = { ...BASE_CFG };

let selectedCountries = [];
let gameRunning = false;
let gameFrames = 0;
let animFrameId = null;
let players = [];
let obstacles = [];
let items = [];
let bullets = [];
let particles = []; // Special FX
let lastItemSpawn = 0;
let arenaRadius = 100;
let arenaCenterX = 0;
let arenaCenterY = 0;
let lastArenaRadius = 100;
let lastArenaCenterX = 0;
let lastArenaCenterY = 0;
let wallAngle = 0;
let timeScale = 1.0;
let flagImages = {};

/* ===========================
   SOUND SYSTEM
   =========================== */
const SoundManager = {
    muted: false,
    sounds: {},
    init() {
        const soundFiles = ['blast', 'collide', 'damage', 'shoot', 'spike hit', 'win'];
        soundFiles.forEach(name => {
            this.sounds[name] = new Audio(`sounds/${name}.wav`);
            this.sounds[name].load();
        });
    },
    play(name, volume = 0.5) {
        if (this.muted || !this.sounds[name]) return;
        const s = this.sounds[name].cloneNode();
        s.volume = volume;
        s.play().catch(() => {});
    },
    toggleMute() {
        this.muted = !this.muted;
        const btn = document.getElementById('mute-btn');
        const icon = btn.querySelector('.mute-icon');
        if (this.muted) {
            btn.classList.add('muted');
            icon.textContent = '🔇';
        } else {
            btn.classList.remove('muted');
            icon.textContent = '🔊';
        }
        return this.muted;
    }
};
SoundManager.init();

// DOM
const canvas = document.getElementById('arena-canvas');
const ctx = canvas.getContext('2d');
const controlPanel = document.getElementById('control-panel');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-panel-btn');
const muteBtn = document.getElementById('mute-btn');
const playerListEl = document.getElementById('player-list');
const countBadgeEl = document.getElementById('player-count-badge');
const searchInput = document.getElementById('country-search');
const dropdown = document.getElementById('country-dropdown');
const playBtn = document.getElementById('play-btn');
const resetBtn = document.getElementById('reset-btn');
const speedSlider = document.getElementById('speed-slider');
const winnerOverlay = document.getElementById('winner-overlay');
const winnerName = document.getElementById('winner-name');
const winnerFlagEl = document.getElementById('winner-flag-display');
const playAgainBtn = document.getElementById('play-again-btn');
const hud = document.getElementById('hud');
const hudAlive = document.getElementById('hud-alive-count');
const hudTime = document.getElementById('hud-time-value');

const rand = (lo, hi) => lo + Math.random() * (hi - lo);
const randI = (lo, hi) => Math.floor(rand(lo, hi + 1));
const distSq = (ax, ay, bx, by) => (bx - ax) ** 2 + (by - ay) ** 2;
const dist = (ax, ay, bx, by) => Math.hypot(bx - ax, by - ay) || 0.001;
const flagSrc = code => `svg/${code}.svg`;

function loadFlagImage(code) {
    if (flagImages[code]) return flagImages[code];
    const img = new Image();
    img.src = flagSrc(code);
    flagImages[code] = img;
    return img;
}

function spawnFX(x, y, count = 10, type = 'spark') {
    for (let i = 0; i < count; i++) {
        let color, size, vx, vy, life = 1.0, decay, growth = 0;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random();

        if (type === 'fire') {
            color = ['#f97316', '#ef4444', '#fbbf24', '#f59e0b'][Math.floor(Math.random() * 4)];
            vx = Math.cos(angle) * (speed * 12);
            vy = Math.sin(angle) * (speed * 12);
            size = 6 + Math.random() * 12;
            decay = 0.015 + Math.random() * 0.02;
        } else if (type === 'smoke') {
            color = 'rgba(148, 163, 184, 0.4)';
            vx = Math.cos(angle) * (speed * 4);
            vy = Math.sin(angle) * (speed * 4);
            size = 10 + Math.random() * 20;
            decay = 0.01 + Math.random() * 0.02;
            growth = 0.15;
        } else if (type === 'spark') {
            color = '#fbbf24';
            vx = Math.cos(angle) * (speed * 8);
            vy = Math.sin(angle) * (speed * 8);
            size = 2 + Math.random() * 4;
            decay = 0.03 + Math.random() * 0.05;
        } else if (type === 'blood') {
            color = '#f87171';
            vx = Math.cos(angle) * (speed * 6);
            vy = Math.sin(angle) * (speed * 6);
            size = 3 + Math.random() * 5;
            decay = 0.02 + Math.random() * 0.04;
        }

        particles.push({ x, y, vx, vy, life, decay, color, size, type, growth });
    }
}

menuBtn.onclick = () => controlPanel.classList.remove('hidden');
closeBtn.onclick = () => controlPanel.classList.add('hidden');
muteBtn.onclick = () => SoundManager.toggleMute();
speedSlider.oninput = () => timeScale = parseFloat(speedSlider.value);

function renderDropdown(query = '') {
    const q = query.toLowerCase().trim();
    const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(q) || c.code.includes(q)).slice(0, 50);
    dropdown.innerHTML = filtered.length ? '' : '<p class="empty-hint">No results</p>';
    filtered.forEach(country => {
        const isSelected = selectedCountries.some(s => s.code === country.code);
        const div = document.createElement('div');
        div.className = 'country-option' + (isSelected ? ' selected' : '');
        div.innerHTML = `<div class="option-flag"><img src="${flagSrc(country.code)}"></div><span class="option-name">${country.name}</span>`;
        if (!isSelected) div.onclick = () => addPlayer(country);
        dropdown.appendChild(div);
    });
}

searchInput.oninput = () => renderDropdown(searchInput.value);
searchInput.onfocus = () => renderDropdown(searchInput.value);

function addPlayer(country) {
    if (selectedCountries.length >= CFG.maxPlayers || gameRunning) return;
    selectedCountries.push(country);
    loadFlagImage(country.code);
    renderUI();
    renderDropdown(searchInput.value);
}

function removePlayer(code) {
    if (gameRunning) return;
    selectedCountries = selectedCountries.filter(c => c.code !== code);
    renderUI();
    renderDropdown(searchInput.value);
}

function renderUI() {
    countBadgeEl.textContent = `${selectedCountries.length}/10`;
    playBtn.disabled = selectedCountries.length < 2;
    playerListEl.innerHTML = selectedCountries.length ? '' : '<p class="empty-hint">Add fighters below ↓</p>';
    selectedCountries.forEach(c => {
        const div = document.createElement('div');
        div.className = 'player-card';
        div.id = `pcard-${c.code}`;
        div.innerHTML = `
      <div class="player-card-top">
        <div class="player-card-flag"><img src="${flagSrc(c.code)}"></div>
        <span class="player-card-name">${c.name}</span>
        ${gameRunning ? '' : `<button class="remove-btn" onclick="removePlayer('${c.code}')">✕</button>`}
      </div>
      <div class="hp-bar-track"><div class="hp-bar-fill" id="hp-${c.code}" style="width:100%"></div></div>
      <div class="status-badges" id="badges-${c.code}"></div>
    `;
        playerListEl.appendChild(div);
    });
}
window.removePlayer = removePlayer;

function resize() {
    const wrapper = canvas.parentElement;
    if (!wrapper) return;
    const w = wrapper.clientWidth, h = wrapper.clientHeight;
    const s = Math.min(w, h) * 0.94;
    const dpr = window.devicePixelRatio || 1;

    // Store old values for coordinate re-mapping
    lastArenaRadius = arenaRadius || s / 2 - 15;
    lastArenaCenterX = arenaCenterX || s / 2;
    lastArenaCenterY = arenaCenterY || s / 2;

    canvas.width = s * dpr;
    canvas.height = s * dpr;
    canvas.style.width = s + 'px';
    canvas.style.height = s + 'px';

    arenaCenterX = s / 2;
    arenaCenterY = s / 2;
    arenaRadius = s / 2 - 15;

    // Dynamic Scaling (Requirement #1)
    const scale = s / 600; // 600px is reference size
    CFG.playerRadius = BASE_CFG.playerRadius * scale;
    CFG.playerSpeed = BASE_CFG.playerSpeed * scale;
    CFG.crossArmLength = BASE_CFG.crossArmLength * scale;
    CFG.crossArmWidth = BASE_CFG.crossArmWidth * scale;
    CFG.bulletSpeed = BASE_CFG.bulletSpeed * scale;
    CFG.bombRadius = BASE_CFG.bombRadius * scale;
    CFG.bulletRadius = BASE_CFG.bulletRadius * scale;
    CFG.bombBulletRadius = BASE_CFG.bombBulletRadius * scale;
    CFG.gunWidth = BASE_CFG.gunWidth * scale;
    CFG.gunHeight = BASE_CFG.gunHeight * scale;
    CFG.spikeLength = BASE_CFG.spikeLength * scale;
    CFG.spikeBaseWidth = BASE_CFG.spikeBaseWidth * scale;
    CFG.hpBarWidth = BASE_CFG.hpBarWidth * scale;
    CFG.hpBarHeight = BASE_CFG.hpBarHeight * scale;
    CFG.nameFontSize = BASE_CFG.nameFontSize * scale;

    // Re-map positions so everything stays in the same relative spot (Requirement #1)
    const posScale = arenaRadius / lastArenaRadius;
    const reMap = (obj) => {
        const relX = obj.x - lastArenaCenterX;
        const relY = obj.y - lastArenaCenterY;
        obj.x = arenaCenterX + relX * posScale;
        obj.y = arenaCenterY + relY * posScale;
    };

    players.forEach(reMap);
    obstacles.forEach(o => {
        const relX = o.cx - lastArenaCenterX;
        const relY = o.cy - lastArenaCenterY;
        o.cx = arenaCenterX + relX * posScale;
        o.cy = arenaCenterY + relY * posScale;
    });
    items.forEach(reMap);
    bullets.forEach(reMap);
    particles.forEach(reMap);

    if (!gameRunning) drawIdle();
}
window.onresize = resize;
resize();

function startGame() {
    gameRunning = true;
    gameFrames = 0;
    hud.classList.remove('hidden');
    winnerOverlay.classList.add('hidden');
    resetBtn.disabled = false;
    playBtn.disabled = true;

    players = selectedCountries.map((c, i) => {
        const a = (i / selectedCountries.length) * Math.PI * 2;
        const r = arenaRadius * 0.45;
        return {
            ...c,
            x: arenaCenterX + Math.cos(a) * r,
            y: arenaCenterY + Math.sin(a) * r,
            vx: Math.cos(a + Math.PI + 0.3) * CFG.playerSpeed,
            vy: Math.sin(a + Math.PI + 0.3) * CFG.playerSpeed,
            hp: CFG.playerMaxHP,
            alive: true,
            img: loadFlagImage(c.code),
            rotation: a,
            av: 0, // Angular Velocity
            shield: 0, gun: 0, spike: 0, bombCount: 0,
            target: null, aimAngle: 0, // Lerped aiming
            spikeCD: 0, // Cooldown for spike hits (Requirement #2)
            flash: 0, shake: 0, // Visual feedback
        };
    });

    obstacles = [
        { cx: arenaCenterX - arenaRadius * 0.35, cy: arenaCenterY - arenaRadius * 0.35, angle: 0, rot: 0.025, type: 'cross' },
        { cx: arenaCenterX + arenaRadius * 0.35, cy: arenaCenterY + arenaRadius * 0.35, angle: 0, rot: -0.025, type: 'cross' }
    ];

    bullets = []; items = []; particles = []; lastItemSpawn = Date.now();
    renderUI();
    if (animFrameId) cancelAnimationFrame(animFrameId);
    loop();
}

playBtn.onclick = () => { startGame(); controlPanel.classList.add('hidden'); };
resetBtn.onclick = () => location.reload();
playAgainBtn.onclick = startGame;

function loop() {
    if (!gameRunning) return;
    for (let i = 0; i < (timeScale < 1 ? 1 : Math.ceil(timeScale)); i++) {
        const substep = timeScale < 1 ? timeScale : 1;
        update(substep);
    }
    render();
    animFrameId = requestAnimationFrame(loop);
}

function update(step = 1.0) {
    gameFrames += step;
    wallAngle += 0.005 * step;

    if (Date.now() - lastItemSpawn > CFG.itemSpawnMs / step) {
        let x, y, safe = false, tries = 0;
        while (!safe && tries < 20) {
            const a = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()) * arenaRadius * 0.85; // Better distribution
            x = arenaCenterX + Math.cos(a) * r;
            y = arenaCenterY + Math.sin(a) * r;
            safe = obstacles.every(o => dist(x, y, o.cx, o.cy) > CFG.crossArmLength * 0.7);
            tries++;
        }
        items.push({ x, y, type: ['shield', 'gun', 'spike', 'bomb'][randI(0, 3)] });
        lastItemSpawn = Date.now();
    }

    obstacles.forEach(o => o.angle += o.rot * step);

    // Update Particles
    particles = particles.filter(p => {
        p.x += p.vx * step; p.y += p.vy * step;
        p.size += p.growth * step;
        p.life -= p.decay * step;
        return p.life > 0;
    });

    const alive = players.filter(p => p.alive);
    alive.forEach(p => {
        // Movement
        p.x += p.vx * step; p.y += p.vy * step;
        // p.rotation += p.av * step; // Rotation removed as requested
        // p.av *= Math.pow(CFG.friction, step); // Slow down spin
        p.rotation = 0; // Keep upright
        p.av = 0;

        // Find nearest enemy for auto-targeting
        const enemies = alive.filter(e => e.code !== p.code);
        p.target = enemies.reduce((prev, curr) => {
            const d_prev = distSq(p.x, p.y, prev ? prev.x : 0, prev ? prev.y : 0);
            const d_curr = distSq(p.x, p.y, curr.x, curr.y);
            return (!prev || d_curr < d_prev) ? curr : prev;
        }, null);

        // Update aim angle (Lerp)
        if (p.target) {
            const targetAngle = Math.atan2(p.target.y - p.y, p.target.x - p.x);
            let diff = ((targetAngle - p.aimAngle + Math.PI) % (Math.PI * 2)) - Math.PI;
            if (diff < -Math.PI) diff += Math.PI * 2;
            p.aimAngle += diff * 0.15 * step;
        }

        if (p.shield > 0) p.shield -= step;
        if (p.spike > 0) p.spike -= step;
        if (p.spikeCD > 0) p.spikeCD -= step;

        // Gun power (Machine Gun)
        if (p.gun > 0) {
            if (Math.floor(gameFrames) % 8 === 0) { // High fire rate
                let bvx = (p.vx / CFG.playerSpeed) * CFG.bulletSpeed;
                let bvy = (p.vy / CFG.playerSpeed) * CFG.bulletSpeed;
                if (p.target) {
                    bvx = Math.cos(p.aimAngle) * CFG.bulletSpeed;
                    bvy = Math.sin(p.aimAngle) * CFG.bulletSpeed;
                }
                bullets.push({ x: p.x, y: p.y, vx: bvx, vy: bvy, owner: p.code, age: 0, type: 'bullet' });
                SoundManager.play('shoot', 0.15); // Machine gun is loud, lower volume
            }
            p.gun -= step;
        }

        // Bomb power (Throws 2 projectile bombs) (Auto-targeting)
        if (p.bombCount > 0 && Math.floor(gameFrames) % 80 === 0) {
            let bvx = (p.vx / CFG.playerSpeed) * CFG.bulletSpeed * 0.8;
            let bvy = (p.vy / CFG.playerSpeed) * CFG.bulletSpeed * 0.8;
            if (p.target) {
                bvx = Math.cos(p.aimAngle) * CFG.bulletSpeed * 0.8;
                bvy = Math.sin(p.aimAngle) * CFG.bulletSpeed * 0.8;
            }
            bullets.push({ x: p.x, y: p.y, vx: bvx, vy: bvy, owner: p.code, age: 0, type: 'bomb' });
            SoundManager.play('shoot', 0.3);
            p.bombCount--;
        }

        // Wall collision
        const d = dist(p.x, p.y, arenaCenterX, arenaCenterY);
        if (d > arenaRadius - CFG.playerRadius) {
            const nx = (p.x - arenaCenterX) / d, ny = (p.y - arenaCenterY) / d;
            const tx = -ny, ty = nx; // Tangent

            p.x = arenaCenterX + nx * (arenaRadius - CFG.playerRadius);
            p.y = arenaCenterY + ny * (arenaRadius - CFG.playerRadius);

            const vDotN = p.vx * nx + p.vy * ny;
            const vDotT = p.vx * tx + p.vy * ty;

            // Reflect 
            p.vx = (p.vx - 2 * vDotN * nx);
            p.vy = (p.vy - 2 * vDotN * ny);
            // p.av += vDotT * CFG.torqueFactor; // Spin removed
            SoundManager.play('collide', 0.2);

            if (p.shield <= 0) p.hp -= CFG.wallDamage * step;
        }

        // Cross Obstacle logic
        obstacles.forEach(o => {
            [o.angle, o.angle + Math.PI / 2].forEach(beamA => {
                const dx = p.x - o.cx, dy = p.y - o.cy;
                const cos = Math.cos(-beamA), sin = Math.sin(-beamA);
                const lx = dx * cos - dy * sin, ly = dx * sin + dy * cos;

                const hw = CFG.crossArmLength / 2, hh = CFG.crossArmWidth / 2;
                if (Math.abs(lx) < hw + CFG.playerRadius && Math.abs(ly) < hh + CFG.playerRadius) {
                    const overlapX = (hw + CFG.playerRadius) - Math.abs(lx);
                    const overlapY = (hh + CFG.playerRadius) - Math.abs(ly);

                    let nx, ny, tx, ty;
                    if (overlapX < overlapY) {
                        const side = lx > 0 ? 1 : -1;
                        nx = side * cos; ny = side * -sin;
                        tx = -ny; ty = nx;
                        p.x += nx * overlapX; p.y += ny * overlapX;
                    } else {
                        const side = ly > 0 ? 1 : -1;
                        nx = side * sin; ny = side * cos;
                        tx = -ny; ty = nx;
                        p.x += nx * overlapY; p.y += ny * overlapY;
                    }

                    const vDotN = p.vx * nx + p.vy * ny;
                    if (vDotN < 0) {
                        p.vx -= 2 * vDotN * nx; p.vy -= 2 * vDotN * ny;
                        // p.av += (p.vx * tx + p.vy * ty) * CFG.torqueFactor; // Spin removed
                        SoundManager.play('collide', 0.2);
                    }
                    if (p.shield <= 0) {
                        p.hp -= CFG.obstacleDamage * step;
                        if (CFG.obstacleDamage > 0) { p.flash = 5; p.shake = 3; }
                    }
                }
            });
        });

        // Player vs Player
        alive.forEach(o => {
            if (o === p) return;
            const d = dist(p.x, p.y, o.x, o.y);
            if (d < CFG.playerRadius * 2) {
                const nx = (o.x - p.x) / d, ny = (o.y - p.y) / d;
                const tx = -ny, ty = nx;
                const overlap = CFG.playerRadius * 2 - d;

                // Depenetrate
                p.x -= nx * overlap / 2; p.y -= ny * overlap / 2;
                o.x += nx * overlap / 2; o.y += ny * overlap / 2;

                const relV = { x: p.vx - o.vx, y: p.vy - o.vy };
                const vDotN = relV.x * nx + relV.y * ny;
                if (vDotN > 0) {
                    p.vx -= vDotN * nx; p.vy -= vDotN * ny;
                    o.vx += vDotN * nx; o.vy += vDotN * ny;
                }

                // Spike Hit Logic (Requirement #1: Single use)
                if (o.spike > 0 && p.shield <= 0 && p.spikeCD <= 0) {
                    p.hp -= 30; p.spikeCD = 40;
                    p.flash = 12; p.shake = 8;
                    spawnFX(p.x, p.y, 20, 'blood');
                    SoundManager.play('spike hit', 0.6);
                    o.spike = 0; // Remove spikes from opponent after hit
                }
                if (p.spike > 0 && o.shield <= 0 && o.spikeCD <= 0) {
                    o.hp -= 30; o.spikeCD = 40;
                    o.flash = 12; o.shake = 8;
                    spawnFX(o.x, o.y, 20, 'blood');
                    SoundManager.play('spike hit', 0.6);
                    p.spike = 0; // Remove spikes from me after hit
                }
            }
        });

        // Speed Cap
        const s = Math.hypot(p.vx, p.vy);
        if (s > 0) { p.vx = (p.vx / s) * CFG.playerSpeed; p.vy = (p.vy / s) * CFG.playerSpeed; }

        // Item pickup
        items = items.filter(it => {
            if (distSq(p.x, p.y, it.x, it.y) < (CFG.playerRadius + 18) ** 2) {
                if (it.type === 'bomb') p.bombCount = 2; // NOW: Gets 2 throwable bombs
                else p[it.type] = CFG.shieldDuration;
                return false;
            } return true;
        });
    });

    bullets = bullets.filter(b => {
        b.x += b.vx * step; b.y += b.vy * step; b.age += step;
        let hit = false;

        // Border / Obstacle blast collision
        const dWall = dist(b.x, b.y, arenaCenterX, arenaCenterY);
        if (dWall > arenaRadius) hit = true;
        
        obstacles.forEach(o => {
            if (dist(b.x, b.y, o.cx, o.cy) < CFG.crossArmLength * 0.4) hit = true;
        });

        if (hit && b.type === 'bomb') {
            spawnFX(b.x, b.y, 25, 'fire');
            spawnFX(b.x, b.y, 15, 'smoke');
        }

        alive.forEach(p => {
            if (!hit && p.code !== b.owner && distSq(b.x, b.y, p.x, p.y) < (CFG.playerRadius + CFG.bulletRadius) ** 2) {
                if (b.type === 'bomb') { // Bomb Explodes
                    spawnFX(b.x, b.y, 35, 'fire');
                    spawnFX(b.x, b.y, 20, 'smoke');
                    SoundManager.play('blast', 0.8);
                    alive.forEach(target => {
                        if (target.shield <= 0 && distSq(b.x, b.y, target.x, target.y) < CFG.bombRadius ** 2) {
                            target.hp -= CFG.bombDamage * (1 - dist(b.x, b.y, target.x, target.y) / CFG.bombRadius);
                            target.flash = 15;
                            target.shake = 10;
                            SoundManager.play('damage', 0.4);
                        }
                    });
                } else if (p.shield <= 0) {
                    p.hp -= CFG.bulletDamage;
                    p.flash = 6;
                    p.shake = 3;
                    spawnFX(b.x, b.y, 6, 'spark'); 
                    SoundManager.play('damage', 0.2);
                }
                hit = true;
            }
        });
        return !hit && b.age < CFG.bulletMaxAge;
    });

    players.forEach(p => {
        if (p.alive && p.hp <= 0) {
            p.alive = false;
            spawnFX(p.x, p.y, 40, 'fire');
            spawnFX(p.x, p.y, 30, 'smoke');
            SoundManager.play('blast', 0.7);
        }
        if (p.flash > 0) p.flash -= step;
        if (p.shake > 0) p.shake *= Math.pow(0.85, step); // Dampen shake
        const bar = document.getElementById(`hp-${p.code}`);
        if (bar) bar.style.width = Math.max(0, p.hp) + '%';
    });

    hudAlive.textContent = alive.length;
    hudTime.textContent = Math.floor(gameFrames / 60) + 's';

    if (gameFrames > CFG.gracePeriod && alive.length <= 1) endGame(alive[0]);
}

function endGame(winner) {
    gameRunning = false;
    winnerOverlay.classList.remove('hidden');
    winnerName.textContent = winner ? winner.name : "Draw!";
    winnerFlagEl.innerHTML = winner ? `<img src="${flagSrc(winner.code)}">` : "🏁";
    playBtn.disabled = false;
    if (winner) SoundManager.play('win', 1.0);
}

function render() {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.scale(dpr, dpr);

    // Arena floor
    ctx.beginPath(); ctx.arc(arenaCenterX, arenaCenterY, arenaRadius + 8, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a'; ctx.fill();

    // Wall
    ctx.save(); ctx.translate(arenaCenterX, arenaCenterY); ctx.rotate(wallAngle);
    ctx.beginPath(); ctx.arc(0, 0, arenaRadius, 0, Math.PI * 2);
    ctx.strokeStyle = '#f97316'; ctx.lineWidth = 6; ctx.setLineDash([40, 20]); ctx.stroke();
    ctx.restore();

    obstacles.forEach(o => {
        ctx.save(); ctx.translate(o.cx, o.cy); ctx.rotate(o.angle);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-CFG.crossArmLength / 2, -CFG.crossArmWidth / 2, CFG.crossArmLength, CFG.crossArmWidth);
        ctx.rotate(Math.PI / 2);
        ctx.fillRect(-CFG.crossArmLength / 2, -CFG.crossArmWidth / 2, CFG.crossArmLength, CFG.crossArmWidth);
        ctx.restore();
    });

    items.forEach(it => {
        ctx.font = '24px Segoe UI Emoji, Arial'; ctx.textAlign = 'center';
        ctx.fillText(({ shield: '🛡️', gun: '🔫', spike: '🔺', bomb: '💣' })[it.type], it.x, it.y + 8);
    });

    bullets.forEach(b => {
        ctx.fillStyle = b.type === 'bomb' ? '#a855f7' : '#fbbf24';
        ctx.beginPath(); ctx.arc(b.x, b.y, b.type === 'bomb' ? CFG.bombBulletRadius : CFG.bulletRadius, 0, Math.PI * 2); ctx.fill();
        if (b.type === 'bomb') { ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; ctx.stroke(); }
    });

    players.forEach(p => {
        if (!p.alive) return;

        ctx.save(); ctx.translate(p.x, p.y);
        if (p.shake > 0.1) {
            ctx.translate((Math.random() - 0.5) * p.shake, (Math.random() - 0.5) * p.shake);
        }

        // Name & Health Bar (Requirement #2 & #4)
        ctx.save(); 
        ctx.font = `bold ${CFG.nameFontSize}px Outfit`; ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.fillText(p.name, 0, -CFG.playerRadius - (CFG.hpBarHeight * 4));

        // Health Bar Background
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(-CFG.hpBarWidth / 2, -CFG.playerRadius - (CFG.hpBarHeight * 2.8), CFG.hpBarWidth, CFG.hpBarHeight);
        // Health Bar Fill
        const hpColor = p.hp > 50 ? '#4ade80' : (p.hp > 25 ? '#fbbf24' : '#f87171');
        ctx.fillStyle = hpColor;
        ctx.fillRect(-CFG.hpBarWidth / 2, -CFG.playerRadius - (CFG.hpBarHeight * 2.8), (Math.max(0, p.hp) / CFG.playerMaxHP) * CFG.hpBarWidth, CFG.hpBarHeight);
        ctx.restore();

        // Power-up Animations & Visuals
        const pulse = 1 + Math.sin(gameFrames * 0.1) * 0.1;
        const slowRot = gameFrames * 0.05;

        // Shield Animation
        if (p.shield > 0) {
            ctx.beginPath(); ctx.arc(0, 0, CFG.playerRadius + 8 + Math.sin(gameFrames * 0.2) * 2, 0, Math.PI * 2);
            ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 4; ctx.stroke();
            ctx.fillStyle = 'rgba(6,182,212,0.1)'; ctx.fill();
        }

        // Gun Visual (Points to target with lerp)
        if (p.gun > 0) {
            ctx.save();
            ctx.rotate(p.aimAngle);
            ctx.fillStyle = '#fbbf24';
            ctx.fillRect(CFG.playerRadius, -CFG.gunHeight / 2, CFG.gunWidth, CFG.gunHeight);
            ctx.restore();
        }

        // Bomb Aura
        if (p.bombCount > 0) {
            ctx.beginPath(); ctx.arc(0, 0, CFG.playerRadius + 5, 0, Math.PI * 2);
            ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 3; ctx.setLineDash([5, 5]); ctx.stroke();
            ctx.setLineDash([]);
        }

        // Spikes Visual (Requirement #3)
        if (p.spike > 0) {
            ctx.save(); ctx.rotate(slowRot);
            ctx.fillStyle = '#f87171';
            for (let i = 0; i < 8; i++) {
                ctx.rotate(Math.PI / 4);
                ctx.beginPath();
                ctx.moveTo(CFG.playerRadius - 2, -CFG.spikeBaseWidth);
                ctx.lineTo(CFG.playerRadius + CFG.spikeLength, 0);
                ctx.lineTo(CFG.playerRadius - 2, CFG.spikeBaseWidth);
                ctx.fill();
            }
            ctx.restore();
        }

        ctx.save();
        ctx.beginPath(); ctx.arc(0, 0, CFG.playerRadius, 0, Math.PI * 2); ctx.clip();
        if (p.img.complete) ctx.drawImage(p.img, -CFG.playerRadius * 1.5, -CFG.playerRadius, CFG.playerRadius * 3, CFG.playerRadius * 2);
        ctx.restore();

        ctx.beginPath(); ctx.arc(0, 0, CFG.playerRadius, 0, Math.PI * 2);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();

        if (p.flash > 0) {
            ctx.fillStyle = 'rgba(239, 68, 68, 0.5)'; // Red damage tint
            ctx.fill();
        }
        ctx.restore();
    });

    // Draw Particles
    particles.forEach(p => {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        if (p.type === 'smoke' || p.type === 'fire') {
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        } else {
            ctx.rect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        }
        ctx.fill();
    });
    ctx.globalAlpha = 1.0;
    
    ctx.restore(); // Restore dpr scale
}

function drawIdle() {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    const dpr = window.devicePixelRatio || 1;
    ctx.save();
    ctx.scale(dpr, dpr);

    ctx.beginPath(); ctx.arc(arenaCenterX, arenaCenterY, arenaRadius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.stroke();
    
    ctx.restore();
}
renderUI();
