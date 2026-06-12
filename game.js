/* ================================================================
   GAME DATA
   ================================================================ */

const ZONES = [
  {
    id: 0,
    name: "ZONA I — BOSQUE VITAL",
    shortName: "🌿 ZONA I",
    bgClass: "battle-bg-z1",
    tagClass: "tag-z1",
    enemy: "🧟",
    enemyName: "Guardián del Olvido",
    color: "#2ecc71",
    badge: "🌿",
    completedMsg: "Has dominado el Adulto Joven. El pico físico ya no tiene secretos para ti.",
  },
  {
    id: 1,
    name: "ZONA II — DESIERTO DEL CAMBIO",
    shortName: "🏜 ZONA II",
    bgClass: "battle-bg-z2",
    tagClass: "tag-z2",
    enemy: "🔥",
    enemyName: "Demonio del Cambio",
    color: "#e67e22",
    badge: "🏜",
    completedMsg: "La mediana edad reveló todos sus secretos ante tu sabiduría.",
  },
  {
    id: 2,
    name: "ZONA III — MONTAÑAS DEL CAMBIO",
    shortName: "🏔 ZONA III",
    bgClass: "battle-bg-z3",
    tagClass: "tag-z3",
    enemy: "👁",
    enemyName: "Guardián de la Mediana Edad",
    color: "#a855f7",
    badge: "🏔",
    completedMsg: "La adultez media-tardía y la crisis de la edad media ya no guardan secretos para ti.",
  }
];

const QUESTIONS = [
  // ========== ZONA 0: ADULTO JOVEN ==========
  [
    {
      q: "¿Entre qué edades se alcanza el pico máximo de fuerza muscular y rendimiento físico?",
      opts: ["15–19 años", "25–35 años", "45–50 años", "55–60 años"],
      ans: 1,
      exp: "<strong>Correcto.</strong> Según Papalia & Martorell (2021), la fuerza muscular, resistencia cardiorrespiratoria y agilidad alcanzan su punto máximo entre los 25–35 años."
    },
    {
      q: "¿Qué capacidad física mide el VO₂ máximo en los adultos jóvenes?",
      opts: ["Densidad ósea", "Flexibilidad articular", "Capacidad cardiorrespiratoria", "Velocidad de reflejos"],
      ans: 2,
      exp: "<strong>Correcto.</strong> El VO₂ máximo indica la cantidad máxima de oxígeno que el organismo puede absorber y utilizar durante el ejercicio. En adultos jóvenes entrenados alcanza sus valores más altos."
    },
    {
      q: "¿Qué le ocurre al metabolismo basal al pasar de la adultez joven a la media?",
      opts: ["Se acelera notablemente", "Permanece idéntico", "Disminuye progresivamente", "Aumenta solo en hombres"],
      ans: 2,
      exp: "<strong>Correcto.</strong> El metabolismo basal disminuye aprox. un 2–3% por década, principalmente por la pérdida gradual de masa muscular (sarcopenia), que consume más energía que el tejido graso."
    },
    {
      q: "¿Cuál de estos factores ACELERA el deterioro físico en la adultez temprana?",
      opts: ["Ejercicio aeróbico regular", "Dieta equilibrada y sueño adecuado", "Tabaquismo y sedentarismo", "Hidratación constante"],
      ans: 2,
      exp: "<strong>Correcto.</strong> El tabaquismo afecta la capacidad pulmonar y cardiovascular; el sedentarismo acelera la pérdida de masa muscular. Ambos son factores de riesgo documentados por Papalia (2021)."
    },
    {
      q: "¿Cómo se llama la reducción de densidad ósea que puede iniciar discretamente en la adultez joven?",
      opts: ["Artritis reumatoide", "Osteopenia", "Sarcopenia", "Espondilitis"],
      ans: 1,
      exp: "<strong>Correcto.</strong> La osteopenia es la reducción de densidad mineral ósea antes de llegar a osteoporosis. Puede iniciar en la tercera década y se acelera con la menopausia femenina."
    },
  ],
  // ========== ZONA 1: ADULTO MEDIO ==========
  [
    {
      q: "¿Cómo se llama la pérdida progresiva de masa y fuerza muscular que se acelera desde los 40 años?",
      opts: ["Osteoporosis", "Artrosclerosis", "Sarcopenia", "Cifosis"],
      ans: 2,
      exp: "<strong>Correcto.</strong> La sarcopenia (del griego: «pobreza de carne») es la pérdida degenerativa de músculo esquelético. El ejercicio de resistencia es la intervención más eficaz para ralentizarla."
    },
    {
      q: "¿Qué efecto físico principal causa el descenso de estrógenos durante la menopausia?",
      opts: ["Mayor masa muscular", "Mayor densidad ósea", "Menor riesgo cardiovascular", "Mayor riesgo de osteoporosis y cambios cardíacos"],
      ans: 3,
      exp: "<strong>Correcto.</strong> El descenso de estrógenos acelera la pérdida ósea y modifica el perfil lipídico, aumentando el riesgo cardiovascular. También produce sofocos y redistribución de grasa corporal."
    },
    {
      q: "¿Qué condición visual casi universal en la mediana edad requiere lentes para leer?",
      opts: ["Miopía progresiva", "Presbicia (vista cansada)", "Glaucoma", "Retinitis pigmentosa"],
      ans: 1,
      exp: "<strong>Correcto.</strong> La presbicia aparece por endurecimiento del cristalino y pérdida de elasticidad del músculo ciliar. Afecta a prácticamente toda la población entre los 40–45 años."
    },
    {
      q: "¿Qué sucede con los tiempos de reacción motora durante la mediana edad?",
      opts: ["Mejoran por la experiencia", "Se mantienen iguales que en la juventud", "Aumentan ligeramente (mayor lentitud)", "Mejoran solo en mujeres"],
      ans: 2,
      exp: "<strong>Correcto.</strong> Los tiempos de reacción aumentan por cambios en la velocidad de conducción nerviosa. Sin embargo, la experiencia y la práctica compensan esto en muchas actividades cotidianas."
    },
    {
      q: "¿Cómo se denomina la disminución gradual de testosterona en hombres durante la mediana edad?",
      opts: ["Andropausia", "Menopausia masculina aguda", "Climaterio testicular", "Hipergonadismo tardío"],
      ans: 0,
      exp: "<strong>Correcto.</strong> La andropausia implica descenso gradual (~1–2% anual) de testosterona desde los 30–40 años, causando cambios en composición corporal, energía y libido, de forma más gradual que en la mujer."
    },
  ],
  // ========== ZONA 2: ADULTEZ MEDIA-TARDÍA (45–65) ==========
  [
    {
      q: "¿Qué les pasa a los huesos de las mujeres después de la menopausia?",
      opts: ["Se vuelven más fuertes", "Pierden densidad más rápido por la baja de estrógenos", "Crecen más que antes", "No les pasa nada diferente"],
      ans: 1,
      exp: "<strong>Correcto.</strong> Al bajar los estrógenos en la menopausia, los huesos pierden calcio y densidad más rápido. Por eso aumenta el riesgo de osteoporosis. Hacer ejercicio y consumir calcio ayuda a frenar esta pérdida."
    },
    {
      q: "¿Qué le pasa al corazón en la adultez media al hacer ejercicio?",
      opts: ["Late más rápido que cuando eras joven", "Tarda más en volver a su ritmo normal después del esfuerzo", "Ya no reacciona al ejercicio", "Bombea el doble de sangre"],
      ans: 1,
      exp: "<strong>Correcto.</strong> Con los años, el corazón pierde un poco de eficiencia y tarda más en recuperarse después del ejercicio. Aun así, hacer actividad física regular mantiene el corazón más saludable."
    },
    {
      q: "¿Cómo cambia el sueño en la adultez media?",
      opts: ["Se duerme más profundamente que antes", "Hay más despertares durante la noche y el sueño es más ligero", "Ya no se necesita dormir", "Solo cambia en los hombres"],
      ans: 1,
      exp: "<strong>Correcto.</strong> En la adultez media es común despertarse más veces durante la noche y tener un sueño menos profundo. Mantener horarios regulares y evitar pantallas antes de dormir ayuda a descansar mejor."
    },
    {
      q: "Durante la crisis de la edad media, ¿qué sucede con la imagen que tenemos de nuestro cuerpo?",
      opts: ["No cambia en absoluto", "Toca adaptarse a cambios visibles como canas, arrugas o cambios de peso", "Solo afecta a quienes hacen ejercicio", "El cuerpo deja de cambiar por completo"],
      ans: 1,
      exp: "<strong>Correcto.</strong> En la mediana edad aparecen cambios físicos visibles (canas, arrugas, redistribución de peso). Según Saavedra et al. (2022), atravesar esta etapa implica reelaborar la imagen corporal y aceptar estos cambios como parte natural del desarrollo."
    },
    {
      q: "¿Qué es lo más recomendable para mantenerse físicamente bien entre los 45 y 65 años?",
      opts: ["Hacer reposo todo lo posible", "Ejercicio regular combinado con chequeos médicos", "Solo hacer dieta sin moverse", "Tomar vitaminas y no preocuparse por nada más"],
      ans: 1,
      exp: "<strong>Correcto.</strong> La combinación de ejercicio aeróbico (caminar, nadar), ejercicios de fuerza y visitas médicas periódicas es la mejor estrategia para mantener la salud física durante la adultez media. Papalia & Martorell (2021) lo confirman."
    },
  ]
];

/* ================================================================
   PIXEL SPRITE GENERATOR
   ================================================================ */
const PALETTES = {
  hero: {
    ' ': null,
    'B': '#5a3e28',  // Brown - hair/boots
    'S': '#f5c6a0',  // Skin
    'E': '#2c1a0e',  // Dark - eyes
    'T': '#4a90d9',  // Blue - tunic
    'R': '#e74c3c',  // Red - cape
    'P': '#2c3e50',  // Dark gray - pants
    'G': '#bdc3c7',  // Light gray - sword
    'Y': '#f0c040',  // Gold - accents
  },
  guardian1: {
    ' ': null,
    'D': '#2d4a2d',  // Dark green
    'G': '#8b9a8b',  // Gray-green skin
    'W': '#ecf0f1',  // White eyes
    'R': '#c0392b',  // Red accents
    'K': '#1a1a1a',  // Black
  },
  guardian2: {
    ' ': null,
    'R': '#c0392b',  // Red body
    'O': '#e67e22',  // Orange fire
    'Y': '#f1c40f',  // Yellow eyes
    'K': '#1a0a00',  // Dark
    'D': '#5a2000',  // Dark red
  },
  guardian3: {
    ' ': null,
    'P': '#6c2d82',  // Dark purple
    'L': '#a855f7',  // Light purple
    'W': '#ecf0f1',  // White eye
    'K': '#0d0d1a',  // Deep dark
    'V': '#4a1a6b',  // Medium purple
  },
};

// 10 wide x 14 tall
const HERO_PIXELS = [
  '   BBBB    ',
  '  BBBBBB   ',
  '  BSSSSB   ',
  '  SSSSSS   ',
  '  SSEESS   ',
  '  SSSSSS   ',
  '   SSSS    ',
  '   TTTT    ',
  '  TTTTTT   ',
  ' TTRRRRTT  ',
  ' TTRRRRTT  ',
  '  TTTTTT   ',
  '   PPPP    ',
  '   BBBB    ',
];

// 12 wide x 16 tall
const GUARDIAN1_PIXELS = [
  '   DDDDDD    ',
  '  DDGGGGDD   ',
  '  DGGGGGGD   ',
  '  GGWGGWGG   ',
  '  GGGGGGGG   ',
  '  GGGGGGGG   ',
  '   GGGGGG    ',
  '   DDDDDD    ',
  '  DDDDDDDD   ',
  ' DDDDGGDDDD  ',
  ' DDDDDDDDDD  ',
  ' DDDDGGDDDD  ',
  '  DDDDDDDD   ',
  '  DD    DD   ',
  '  DD    DD   ',
  '  KK    KK   ',
];

// 12 wide x 16 tall
const GUARDIAN2_PIXELS = [
  '    KKKK     ',
  '   KRRRRK    ',
  '  KRRRRRRK   ',
  '  RRRRRRRR   ',
  '  RRYRRYRR   ',
  '  RRRRRRRR   ',
  '  RRRRRRRR   ',
  '  OOOOOOOO   ',
  '  OOOOOOOO   ',
  '  OOOOOOOO   ',
  '  OOOOOOOO   ',
  '   OOOOOO    ',
  '   OOOOOO    ',
  '   DD  DD    ',
  '   DD  DD    ',
  '   KK  KK    ',
];

// 12 wide x 16 tall
const GUARDIAN3_PIXELS = [
  '    PPPP     ',
  '  PPPPPPPPP  ',
  '  PVPPPPPVP  ',
  '  PPPPPPPPP  ',
  '  PPWWWWPP   ',
  '  PWWKKWWP   ',
  '  PWWKKWWP   ',
  '  PPWWWWPP   ',
  '  PPPPPPPPP  ',
  '  PVPPPPPVP  ',
  '  PPPPPPPPP  ',
  '   PPPPPP    ',
  '   LL  LL    ',
  '   LL  LL    ',
  '   VV  VV    ',
  '   KK  KK    ',
];

function generateSpriteDataUrl(pixels, palette, scale = 4) {
  const h = pixels.length;
  const w = Math.max(...pixels.map(r => r.length));
  const canvas = document.createElement('canvas');
  canvas.width = w * scale;
  canvas.height = h * scale;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < pixels[y].length; x++) {
      const ch = pixels[y][x];
      const color = palette[ch];
      if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }
  }
  return canvas.toDataURL();
}

const SPRITES = {
  hero: generateSpriteDataUrl(HERO_PIXELS, PALETTES.hero),
  guardian1: generateSpriteDataUrl(GUARDIAN1_PIXELS, PALETTES.guardian1),
  guardian2: generateSpriteDataUrl(GUARDIAN2_PIXELS, PALETTES.guardian2),
  guardian3: generateSpriteDataUrl(GUARDIAN3_PIXELS, PALETTES.guardian3),
};

function setHeroSprites() {
  const heroSrc = SPRITES.hero;
  // Title screen
  const titleSprite = document.getElementById('title-sprite');
  if (titleSprite) titleSprite.src = heroSrc;
  // Map status
  const mapSprite = document.getElementById('map-sprite');
  if (mapSprite) mapSprite.src = heroSrc;
  // Battle hero
  const battleHero = document.getElementById('battle-hero');
  if (battleHero) battleHero.src = heroSrc;
}

function setEnemySprite(zoneIdx) {
  const enemyImg = document.getElementById('enemy-sprite');
  if (!enemyImg) return;
  const urls = [SPRITES.guardian1, SPRITES.guardian2, SPRITES.guardian3];
  enemyImg.src = urls[zoneIdx] || urls[0];
}

/* ================================================================
   GAME STATE
   ================================================================ */
let state = {
  hp: 100,
  maxHp: 100,
  score: 0,
  currentZone: 0,
  currentQ: 0,
  zoneDone: [false, false, false],
  zoneScores: [0, 0, 0],        // best score per zone (first clear)
  zoneFirstClear: [false, false, false],  // was first clear done?
  enemyHP: 100,
  answered: false,
  isReplay: false,              // is current zone a replay?
  replayScores: [0, 0, 0],      // current replay scores
};

/* ================================================================
   AUDIO ENGINE (simple Web Audio beeps)
   ================================================================ */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playBeep(freq, duration, type = 'square', vol = 0.08) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch(e) { /* audio not available */ }
}

function sfxCorrect() {
  playBeep(523, 0.1, 'square', 0.07);  // C5
  setTimeout(() => playBeep(659, 0.1, 'square', 0.07), 100);  // E5
  setTimeout(() => playBeep(784, 0.15, 'square', 0.07), 200);  // G5
}

function sfxWrong() {
  playBeep(200, 0.2, 'sawtooth', 0.06);
  setTimeout(() => playBeep(150, 0.3, 'sawtooth', 0.06), 150);
}

function sfxLevelUp() {
  const notes = [523, 659, 784, 1047];
  notes.forEach((f, i) => setTimeout(() => playBeep(f, 0.15, 'square', 0.07), i * 120));
}

function sfxGameOver() {
  const notes = [400, 350, 300, 200];
  notes.forEach((f, i) => setTimeout(() => playBeep(f, 0.25, 'sawtooth', 0.06), i * 200));
}

function sfxClick() {
  playBeep(880, 0.05, 'square', 0.04);
}

/* ================================================================
   SCREEN MANAGEMENT
   ================================================================ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ================================================================
   START
   ================================================================ */
function startGame() {
  sfxClick();
  state = {
    hp: 100, maxHp: 100, score: 0,
    currentZone: 0, currentQ: 0,
    zoneDone: [false, false, false],
    zoneScores: [0, 0, 0],
    zoneFirstClear: [false, false, false],
    enemyHP: 100,
    answered: false,
    isReplay: false,
    replayScores: [0, 0, 0],
  };
  setHeroSprites();
  updateMapUI();
  showScreen('map-screen');
}

function restartGame() {
  sfxClick();
  startGame();
}

/* ================================================================
   MAP
   ================================================================ */
function updateMapUI() {
  const pct = (state.hp / state.maxHp) * 100;
  const fill = document.getElementById('map-hp-fill');
  fill.style.width = pct + '%';
  fill.className = 'hp-fill' + (pct <= 25 ? ' low' : pct <= 50 ? ' mid' : '');
  document.getElementById('map-hp-num').textContent = `${state.hp}/${state.maxHp}`;
  document.getElementById('map-score').textContent = state.score;

  ZONES.forEach((z, i) => {
    const node = document.getElementById(`zone-node-${i}`);
    node.classList.remove('locked', 'completed', 'replay');

    if (state.zoneDone[i]) {
      // Zone was completed at least once
      node.classList.add('completed');
      node.classList.add('replay');
      updateStars(i, state.zoneScores[i]);
    } else if (i > 0 && !state.zoneDone[i - 1]) {
      node.classList.add('locked');
    }
  });
}

function updateStars(zoneIdx, zScore) {
  const stars = document.querySelectorAll(`#stars-${zoneIdx} .star`);
  const earned = zScore >= 5 ? 5 : zScore >= 4 ? 4 : zScore >= 3 ? 3 : zScore >= 2 ? 2 : zScore >= 1 ? 1 : 0;
  stars.forEach((s, i) => s.classList.toggle('earned', i < earned));
}

function showMapToast(msg) {
  const toast = document.getElementById('map-toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function enterZone(idx) {
  // Locked zone?
  if (idx > 0 && !state.zoneDone[idx - 1]) {
    showMapToast('🔒 Debes completar la zona anterior primero');
    sfxWrong();
    return;
  }

  state.currentZone = idx;
  state.currentQ = 0;
  state.answered = false;

  // Is this a replay?
  state.isReplay = state.zoneDone[idx];
  if (state.isReplay) {
    state.replayScores[idx] = 0;
  }

  sfxClick();
  startBattle();
}

/* ================================================================
   BATTLE
   ================================================================ */
function startBattle() {
  const zone = ZONES[state.currentZone];
  const bg = document.getElementById('battle-bg');
  bg.className = 'battle-bg ' + zone.bgClass;

  setEnemySprite(state.currentZone);
  document.getElementById('battle-zone-tag').className = 'battle-zone-tag ' + zone.tagClass;
  document.getElementById('battle-zone-tag').textContent = zone.shortName;

  // Display enemy name from zone data
  document.getElementById('enemy-name-label').textContent = zone.enemyName;

  // Reset enemy HP to full
  state.enemyHP = 100;
  setEnemyHP(100);
  showScreen('battle-screen');
  updateBattleHP();  // sync hero HP bar
  renderQuestion();
}

function setEnemyHP(pct) {
  const fill = document.getElementById('enemy-hp-fill');
  if (fill) fill.style.width = pct + '%';
}

function renderQuestion() {
  const qs = QUESTIONS[state.currentZone];
  const q = qs[state.currentQ];
  state.answered = false;

  document.getElementById('q-progress').textContent = `${state.currentQ + 1}/${qs.length}`;
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('explanation-box').className = 'explanation-box';
  document.getElementById('explanation-box').innerHTML = '';
  document.getElementById('continue-btn').style.display = 'none';

  const grid = document.getElementById('choices-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.setAttribute('data-index', i);
    btn.onclick = () => handleChoice(i, btn);
    grid.appendChild(btn);
  });

  // Focus first choice button
  const firstBtn = grid.querySelector('.choice-btn');
  if (firstBtn) setTimeout(() => firstBtn.focus(), 100);
}

function handleChoice(idx, btn) {
  if (state.answered) return;
  state.answered = true;

  const q = QUESTIONS[state.currentZone][state.currentQ];
  const btns = document.querySelectorAll('.choice-btn');
  btns.forEach(b => b.disabled = true);

  const correct = idx === q.ans;
  btns.forEach((b, i) => {
    if (i === q.ans) b.classList.add('correct');
    else if (i === idx && !correct) b.classList.add('wrong');
    else if (!correct) b.classList.add('dimmed');
  });

  if (correct) {
    // Only award points on first clear
    if (!state.isReplay) {
      state.score += 20;
    }
    state.zoneScores[state.currentZone] = Math.max(
      state.zoneScores[state.currentZone],
      state.isReplay ? state.replayScores[state.currentZone] + 1 : state.zoneScores[state.currentZone] + 1
    );
    if (state.isReplay) {
      state.replayScores[state.currentZone]++;
    }
    document.getElementById('map-score').textContent = state.score;

    // Enemy takes damage (correct answer = -20 HP to enemy)
    state.enemyHP = Math.max(0, state.enemyHP - 20);
    setEnemyHP(state.enemyHP);

    triggerHeroAttack();
    spawnParticles(true);
    sfxCorrect();
  } else {
    state.hp = Math.max(0, state.hp - 20);
    updateMapHP();
    triggerHeroHurt();
    spawnParticles(false);
    sfxWrong();
  }

  document.getElementById('explanation-box').innerHTML = q.exp;
  document.getElementById('explanation-box').className = 'explanation-box show';

  const continueBtn = document.getElementById('continue-btn');
  continueBtn.style.display = 'block';
  setTimeout(() => continueBtn.focus(), 150);
}

function updateMapHP() {
  const pct = (state.hp / state.maxHp) * 100;
  const fill = document.getElementById('map-hp-fill');
  fill.style.width = pct + '%';
  fill.className = 'hp-fill' + (pct <= 25 ? ' low' : pct <= 50 ? ' mid' : '');
  document.getElementById('map-hp-num').textContent = `${state.hp}/${state.maxHp}`;
  // Also update battle HP bar if visible
  updateBattleHP();
}

function updateBattleHP() {
  const pct = (state.hp / state.maxHp) * 100;
  const fill = document.getElementById('battle-hp-fill');
  if (!fill) return;
  fill.style.width = pct + '%';
  fill.className = 'hp-fill' + (pct <= 25 ? ' low' : pct <= 50 ? ' mid' : '');
  const num = document.getElementById('battle-hp-num');
  if (num) num.textContent = `${state.hp}/${state.maxHp}`;
}

function triggerHeroAttack() {
  const hero = document.getElementById('battle-hero');
  const enemy = document.getElementById('enemy-sprite');

  // Hero charges forward
  hero.classList.remove('attacking', 'hurt');
  void hero.offsetWidth;
  hero.classList.add('attacking');

  // Enemy gets hit when hero reaches them (mid-animation)
  setTimeout(() => {
    if (enemy) {
      enemy.classList.remove('hit', 'attacking');
      void enemy.offsetWidth;
      enemy.classList.add('hit');
    }
    showSlash('correct');
  }, 250);

  // Resume enemy float after hit
  setTimeout(() => {
    if (enemy) enemy.classList.remove('hit');
    hero.classList.remove('attacking');
  }, 700);

  // Damage popup on enemy
  const bg = document.getElementById('battle-bg');
  const popup = document.createElement('div');
  popup.className = 'damage-popup';
  popup.textContent = state.isReplay ? 'OK' : '+20';
  popup.style.cssText = `color:#2ecc71; right:100px; top:25px;`;
  bg.appendChild(popup);
  setTimeout(() => popup.remove(), 900);
}

function triggerHeroHurt() {
  const hero = document.getElementById('battle-hero');
  const enemy = document.getElementById('enemy-sprite');

  // Enemy charges toward hero
  if (enemy) {
    enemy.classList.remove('hit', 'attacking');
    void enemy.offsetWidth;
    enemy.classList.add('attacking');
  }

  // Hero gets hit mid-enemy-charge
  setTimeout(() => {
    hero.classList.remove('attacking', 'hurt');
    void hero.offsetWidth;
    hero.classList.add('hurt');
    showSlash('wrong');
  }, 220);

  // Clean up animations
  setTimeout(() => {
    hero.classList.remove('hurt');
    if (enemy) enemy.classList.remove('attacking');
  }, 700);

  // Damage popup on hero
  const bg = document.getElementById('battle-bg');
  const popup = document.createElement('div');
  popup.className = 'damage-popup';
  popup.textContent = '-20 HP';
  popup.style.cssText = `color:#e74c3c; left:60px; bottom:40px;`;
  bg.appendChild(popup);
  setTimeout(() => popup.remove(), 900);
}

function showSlash(type) {
  const slash = document.getElementById('slash-effect');
  if (!slash) return;
  slash.className = 'slash-effect';
  slash.textContent = type === 'correct' ? '⚔️' : '💥';
  void slash.offsetWidth;
  slash.classList.add('show', type);
  setTimeout(() => { slash.className = 'slash-effect'; }, 550);
}

function nextBattleQ() {
  sfxClick();

  if (state.hp <= 0) {
    sfxGameOver();
    showScreen('gameover-screen');
    return;
  }

  state.currentQ++;
  const total = QUESTIONS[state.currentZone].length;

  if (state.currentQ >= total) {
    // Zone complete
    setEnemyHP(0);
    if (!state.isReplay) {
      state.zoneDone[state.currentZone] = true;
      state.zoneFirstClear[state.currentZone] = true;
    }
    sfxLevelUp();
    showLevelUp();
  } else {
    renderQuestion();
  }
}

/* ================================================================
   LEVEL UP
   ================================================================ */
function showLevelUp() {
  const zone = ZONES[state.currentZone];
  const zScore = state.isReplay
    ? state.replayScores[state.currentZone]
    : state.zoneScores[state.currentZone];
  const xp = state.isReplay ? 0 : zScore * 20;

  document.getElementById('levelup-badge').textContent = zone.badge;
  document.getElementById('levelup-title').textContent = state.isReplay
    ? '¡ZONA REPASADA!'
    : '¡ZONA SUPERADA!';
  document.getElementById('levelup-sub').textContent = state.isReplay
    ? `Repaso completado: ${zone.completedMsg}`
    : zone.completedMsg;
  document.getElementById('xp-gained').textContent = state.isReplay
    ? 'Modo práctica — sin XP'
    : `+${xp} XP GANADOS`;
  document.getElementById('xp-gained').style.color = state.isReplay ? '#8899aa' : '#2ecc71';
  document.getElementById('xp-gained').style.borderColor = state.isReplay ? '#445566' : '#2ecc71';

  // HP recovery between zones (on first clear only)
  const hpRecovered = document.getElementById('hp-recovered');
  if (!state.isReplay) {
    const oldHP = state.hp;
    state.hp = Math.min(state.maxHp, state.hp + 30);
    const recovered = state.hp - oldHP;
    if (recovered > 0) {
      hpRecovered.textContent = `💙 +${recovered} HP RECUPERADO`;
      hpRecovered.style.display = 'block';
    } else {
      hpRecovered.style.display = 'none';
    }
  } else {
    hpRecovered.style.display = 'none';
  }
  updateMapHP();

  // Replay notice
  document.getElementById('replay-notice').style.display = state.isReplay ? 'block' : 'none';

  const statsEl = document.getElementById('stats-gained');
  statsEl.innerHTML = `
    <div class="stat-badge"><span class="val">${zScore}/5</span>RESPUESTAS</div>
    <div class="stat-badge"><span class="val">${state.hp}</span>HP RESTANTE</div>
    <div class="stat-badge"><span class="val">${state.score}</span>PUNTOS TOT.</div>
  `;

  updateMapUI();
  spawnParticles(true, 20);
  showScreen('levelup-screen');
  document.getElementById('levelup-continue-btn').focus();
}

function continueFromLevelup() {
  sfxClick();
  if (state.zoneDone.every(d => d)) {
    showVictory();
  } else {
    updateMapUI();
    showScreen('map-screen');
  }
}

/* ================================================================
   VICTORY
   ================================================================ */
function showVictory() {
  document.getElementById('final-score').textContent = state.score;

  const pct = state.score / (QUESTIONS.flat().length * 20) * 100;
  let grade, gradeClass, msg;
  if (pct >= 90) { grade = 'RANGO S — MAESTRO'; gradeClass = 'grade-s'; msg = '¡Conocimiento perfecto! Eres un verdadero maestro del Desarrollo Físico Adulto.'; }
  else if (pct >= 75) { grade = 'RANGO A — EXPERTO'; gradeClass = 'grade-a'; msg = 'Excelente dominio del tema. Tus conocimientos sobre el desarrollo físico son sólidos.'; }
  else if (pct >= 55) { grade = 'RANGO B — EXPLORADOR'; gradeClass = 'grade-b'; msg = 'Buen recorrido. Refuerza algunos conceptos de la vejez y la menopausia para llegar al siguiente nivel.'; }
  else { grade = 'RANGO C — APRENDIZ'; gradeClass = 'grade-c'; msg = '¡Completaste la aventura! Revisa las lecturas de Papalia & Martorell para profundizar.'; }

  document.getElementById('final-grade').textContent = grade;
  document.getElementById('final-grade').className = 'final-grade ' + gradeClass;
  document.getElementById('victory-msg').textContent = msg;

  const vstats = document.getElementById('victory-stats');
  vstats.innerHTML = `
    <div class="stat-badge"><span class="val">${state.zoneScores[0]}/5</span>ZONA I ⭐</div>
    <div class="stat-badge"><span class="val">${state.zoneScores[1]}/5</span>ZONA II ⭐</div>
    <div class="stat-badge"><span class="val">${state.zoneScores[2]}/5</span>ZONA III ⭐</div>
  `;

  sfxLevelUp();
  spawnParticles(true, 30);
  showScreen('victory-screen');
}

/* ================================================================
   PARTICLES
   ================================================================ */
function spawnParticles(good, count = 12) {
  const container = document.getElementById('particles');
  const colors = good
    ? ['#2ecc71', '#f0c040', '#3498db', '#2ecc71']
    : ['#e74c3c', '#c0392b', '#e74c3c'];

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = 20 + Math.random() * 60;
    const y = 20 + Math.random() * 60;
    const tx = (Math.random() - 0.5) * 200;
    const ty = -(50 + Math.random() * 200);
    p.style.cssText = `
      left:${x}vw; top:${y}vh;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      --fly: translate(${tx}px,${ty}px) rotate(${Math.random() * 720}deg);
      animation-delay:${Math.random() * 0.3}s;
      animation-duration:${0.6 + Math.random() * 0.6}s;
    `;
    container.appendChild(p);
    setTimeout(() => p.remove(), 1200);
  }
}

/* ================================================================
   KEYBOARD CONTROLS
   ================================================================ */
document.addEventListener('keydown', (e) => {
  // Battle screen keyboard controls
  const battleScreen = document.getElementById('battle-screen');
  if (!battleScreen.classList.contains('active')) return;

  // Keys 1-4 to answer (even if numpad)
  const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'Digit1': 0, 'Digit2': 1, 'Digit3': 2, 'Digit4': 3, 'Numpad1': 0, 'Numpad2': 1, 'Numpad3': 2, 'Numpad4': 3 };

  if (keyMap[e.code] !== undefined && !state.answered) {
    e.preventDefault();
    const idx = keyMap[e.code];
    const btn = document.querySelector(`.choice-btn[data-index="${idx}"]`);
    if (btn && !btn.disabled) {
      handleChoice(idx, btn);
    }
    return;
  }

  // Enter or Space to continue
  if ((e.code === 'Enter' || e.code === 'Space') && state.answered) {
    e.preventDefault();
    nextBattleQ();
    return;
  }
});

// Start screen keyboard
document.addEventListener('keydown', (e) => {
  const titleScreen = document.getElementById('title-screen');
  if (titleScreen.classList.contains('active') && (e.code === 'Enter' || e.code === 'Space')) {
    e.preventDefault();
    startGame();
  }
});

// Map screen keyboard (1-3 to enter zones)
document.addEventListener('keydown', (e) => {
  const mapScreen = document.getElementById('map-screen');
  if (!mapScreen.classList.contains('active')) return;

  const zoneKeyMap = { 'Digit1': 0, 'Digit2': 1, 'Digit3': 2, 'Numpad1': 0, 'Numpad2': 1, 'Numpad3': 2 };
  if (zoneKeyMap[e.code] !== undefined) {
    e.preventDefault();
    enterZone(zoneKeyMap[e.code]);
  }
});

/* ================================================================
   INIT
   ================================================================ */
// Pre-load sprites into all hero image slots on page load
setHeroSprites();
console.log('⚔ Cuerpo & Tiempo — Pixel art sprites loaded');
