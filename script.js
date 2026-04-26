  /* ===== POSTCARD DATA ===== */
  const postcards = {
    atari: {
      icon: '', tag: 'DATO HISTÓRICO · 1972', color: '#ff6b00',
      title: 'El Nacimiento de Atari',
      body: 'Atari fue fundada con solo $250 dólares en 1972. Nolan Bushnell instaló el primer prototipo de Pong en un bar de Sunnyvale, California. En pocas semanas, la máquina se atascó: estaba demasiado llena de monedas de 25 centavos. Ese fue el primer problema "bueno" de la historia de los videojuegos.',
      stat1v: '$13.4B', stat1l: 'Valor Atari en 1982', stat2v: '30M', stat2l: 'Unidades Atari 2600 vendidas'
    },
    bogota70s: {
      icon: '', tag: 'DATO BOGOTANO · 1977', color: '#ff6b00',
      title: 'Bogotá y el Primer Pixel',
      body: 'Los primeros videojuegos llegaron a Colombia en las maletas de viajeros y diplomáticos. Las clases altas de El Nogal y La Cabrera tenían los primeros Atari como exóticas curiosidades de importación. En el resto de la ciudad, los televisores eran ya un lujo y los juegos electrónicos, una fantasía lejana.',
      stat1v: '1977', stat1l: 'Primer Atari 2600 en Colombia', stat2v: '$800', stat2l: 'Precio en USD (solo importado)'
    },
    'tech70s': {
      icon: '', tag: 'IMPACTO GLOBAL · 1978', color: '#ff6b00',
      title: 'Space Invaders Cambia Todo',
      body: 'Space Invaders no era solo un juego: fue el primer caso documentado de un medio digital causando un efecto económico masivo. Japón tuvo que acuñar cuatro veces más monedas de 100 yenes. El juego generó más dinero que las películas de ese año en Japón, demostrando que los videojuegos eran una industria, no un juguete.',
      stat1v: '100M', stat1l: 'Monedas consumidas por día en Japón', stat2v: '360M', stat2l: 'USD en arcades en 1980'
    },
    'arcade-bogota': {
      icon: '', tag: 'MEMORIA BOGOTANA · 1983–1995', color: '#ff00ff',
      title: 'Las Maquinitas de Bogotá',
      body: 'Los salones de videojuegos en Bogotá tuvieron una identidad propia. No eran solo tiendas: eran puntos de encuentro social en barrios como Teusaquillo, Kennedy y la Candelaria. Los dueños eran figuras respetadas del barrio. Las peleas por los primeros puestos del marcador eran legendarias. El olor a fritos y pantallas calientes es una memoria sensorial de toda una generación.',
      stat1v: '500+', stat1l: 'Salones en Bogotá (1988)', stat2v: '$50', stat2l: 'Precio turno en pesos de la época'
    },
    'nes-colombia': {
      icon: '', tag: 'HOGARES COLOMBIANOS · 1987', color: '#ff00ff',
      title: 'La NES en San Andresito',
      body: 'Nintendo nunca distribuyó oficialmente sus consolas en Colombia en los 80s. Entraron por el San Andresito de la 38 y el 17: los célebres mercados de electrónicos de Bogotá donde todo tenía "garantía de palabra". Una NES costaba lo equivalente a un salario mínimo. Tenerla era prestigio puro. Los vecinos se turnaban para jugar y los cartuchos se prestaban como libros de biblioteca.',
      stat1v: '1 SMLV', stat1l: 'Costo de una NES en Colombia', stat2v: '1987', stat2l: 'Año estimado de llegada masiva'
    },
    'street-fighter': {
      icon: '', tag: 'COMPETENCIA · 1992', color: '#ff00ff',
      title: 'Los Torneos de Street Fighter',
      body: 'Street Fighter II creó la cultura del torneo en Bogotá. En cada salón había una jerarquía no escrita: el "man de la maquinita", el imbatible local que todos querían vencer. Esto fue el embrión de los esports colombianos. Las técnicas, los combos y los personajes favoritos definían identidades sociales enteras.',
      stat1v: '1992', stat1l: 'Lanzamiento en Colombia', stat2v: '#1', stat2l: 'Juego más popular en salones'
    },
    pirateria: {
      icon: '', tag: 'ACCESO Y ECONOMÍA · 1996', color: '#ff00ff',
      title: 'La PlayStation y el CD Pirata',
      body: 'La PlayStation transformó el mercado: los CDs grabados en el Paloquemao y el San Andresito democratizaron el acceso a los juegos. Un juego original costaba $80.000 pesos; uno pirata, $5.000. Esta paradoja colombiana —acceso ilegal pero masificación real— es parte fundamental de la historia cultural del gaming en el país.',
      stat1v: '$5.000', stat1l: 'CD pirata en pesos COP', stat2v: '90%', stat2l: 'Estimado piratería en Colombia'
    },
    'cafe-internet': {
      icon: '', tag: 'REVOLUCIÓN SOCIAL · 2001', color: '#00ccff',
      title: 'El Ciber Como Universidad',
      body: 'El café internet bogotano fue mucho más que un lugar para jugar. Era el punto de acceso a la modernidad para quienes no podían pagar un computador. Niños de barrios populares aprendieron inglés con videojuegos, diseño gráfico con Paint, y lógica de programación con el propio juego. Las primeras "becas tech" colombianas se gestaron a $1.000 la hora.',
      stat1v: '3.000+', stat1l: 'Cafés internet en Bogotá (peak)', stat2v: '$1.000', stat2l: 'Hora de juego en pesos'
    },
    'counter-strike': {
      icon: '', tag: 'CULTURA LAN · 2002', color: '#00ccff',
      title: 'CS 1.6: El Idioma del Barrio',
      body: 'Counter-Strike 1.6 fue el primer juego en crear una verdadera comunidad online colombiana. Los clanes con nombres como "Barrio Norte" y "Bogotá FC" competían en servidores locales. El vocabulario del juego —"rush B", "tirate", "flasheame"— se mezclaba con el argot bogotano creando una jerga gamer colombiana única que persiste hasta hoy.',
      stat1v: '#1', stat1l: 'Juego en cibers colombianos 2002-2008', stat2v: '200+', stat2l: 'Clanes bogotanos activos en 2004'
    },
    'mu-online': {
      icon: '', tag: 'ECONOMÍA VIRTUAL · 2004', color: '#00ccff',
      title: 'Vendiendo lo Invisible',
      body: 'Mu Online y Tibia crearon la primera economía informal digital colombiana. Jóvenes bogotanos vendían "items" virtuales por dinero real, aceptando pagos por giro Baloto o en efectivo. Era ridículo para los adultos, revolucionario en retrospectiva. Estos fueron los primeros "freelancers digitales" de Colombia, quince años antes de que ese término existiera.',
      stat1v: '$500K', stat1l: 'COP en transacciones mensuales estimadas', stat2v: '2004', stat2l: 'Año peak de la economía virtual local'
    },
    'wii-era': {
      icon: '', tag: 'INCLUSIÓN · 2007', color: '#00ccff',
      title: 'La Wii Democratiza el Gaming',
      body: 'La Nintendo Wii rompió todas las barreras demográficas del gaming en Colombia. Abuelas jugando Wii Sports, familias enteras reunidas en la sala, mujeres que nunca habían tocado un joystick. Fue el primer dispositivo que convirtió a Colombia en un mercado multi-generacional de videojuegos, sentando las bases del mercado casual que hoy domina en el país.',
      stat1v: '3M+', stat1l: 'Wiis vendidas en LatAm (2007-2010)', stat2v: '52%', stat2l: 'Jugadoras casuales por primera vez'
    },
    streamers: {
      icon: '', tag: 'INDUSTRIA CREATIVA · HOY', color: '#7c3aed',
      title: 'La Nueva Economía del Stream',
      body: 'Colombia tiene una de las escenas de streaming en español más activas de Latinoamérica. Streamers bogotanos de Twitch y YouTube generan ingresos superiores a muchos empleos formales. El modelo incluye suscripciones, donaciones, patrocinios de marcas y colaboraciones con estudios internacionales. Es la primera profesión digital masiva sin educación formal requerida.',
      stat1v: '2.5M+', stat1l: 'Seguidores promedio top streamer CO', stat2v: '$8.000+', stat2l: 'USD/mes top streamers colombianos'
    },
    esports: {
      icon: '', tag: 'COMPETENCIA GLOBAL · HOY', color: '#7c3aed',
      title: 'Esports: Colombia en el Mapa',
      body: 'La escena colombiana de esports ha crecido explosivamente. En Free Fire, Colombia es potencia regional. Bogotá alberga torneos con premios en dólares y transmisiones con decenas de miles de espectadores. Universidades como la UNAD y la Politécnico ofrecen ya programas relacionados con esports y gestión de eventos gaming.',
      stat1v: '$2M+', stat1l: 'Premios esports en Colombia en 2023', stat2v: 'TOP 5', stat2l: 'Colombia en ranking LatAm esports'
    },
    'indie-dev': {
      icon: '', tag: 'INDUSTRIA LOCAL · HOY', color: '#7c3aed',
      title: 'Made in Bogotá',
      body: 'La escena indie de Bogotá produce juegos que se venden en Steam, App Store y Google Play. Con inspiración en la cultura andina, el conflicto colombiano y la fauna local, los estudios bogotanos crean una voz propia. El MinTIC apoya la industria con convocatorias y el ecosistema crece apoyado en universidades con programas de game design.',
      stat1v: '200+', stat1l: 'Estudios de videojuegos en Colombia', stat2v: '$50M', stat2l: 'Exportaciones software 2023 (inc. games)'
    },
    'cultura-gamer': {
      icon: '', tag: 'CULTURA · 2024', color: '#7c3aed',
      title: 'Gaming como Arte y Cultura',
      body: 'El Bogotá Gaming Festival, Comic-Con Colombia y múltiples eventos han convertido al gaming en un pilar de la cultura popular urbana. Cosplay, arte digital, música chiptune y moda gamer son parte de la identidad joven de la ciudad. Los museos comienzan a integrar exhibiciones sobre la historia del gaming. El pixel es ahora patrimonio cultural.',
      stat1v: '30M+', stat1l: 'Gamers activos en Colombia', stat2v: '65%', stat2l: 'Población menor de 35 que juega'
    }
  };

  /* ===== DOM READY ===== */
  document.addEventListener('DOMContentLoaded', () => {

    /* CURSOR */
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursor-trail');
    let mx = 0, my = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    });
    function animTrail() {
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      trail.style.transform = `translate(${tx - 15}px, ${ty - 15}px)`;
      requestAnimationFrame(animTrail);
    }
    animTrail();

    /* PROGRESS BAR */
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = pct + '%';
    });

    /* SCROLL REVEAL */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    /* POSTCARD MODAL */
    const overlay = document.getElementById('postcard-overlay');
    const pcClose = document.getElementById('postcard-close');

    document.querySelectorAll('[data-postcard]').forEach(card => {
      card.addEventListener('click', () => {
        const key = card.dataset.postcard;
        const data = postcards[key];
        if (!data) return;
        document.getElementById('postcard-stamp').textContent = data.icon;
        document.getElementById('postcard-tag').textContent = data.tag;
        document.getElementById('postcard-title').textContent = data.title;
        document.getElementById('postcard-body').textContent = data.body;
        document.getElementById('stat-val1').textContent = data.stat1v;
        document.getElementById('stat-lab1').textContent = data.stat1l;
        document.getElementById('stat-val2').textContent = data.stat2v;
        document.getElementById('stat-lab2').textContent = data.stat2l;
        // Color
        const pc = document.getElementById('postcard-content');
        pc.style.borderColor = data.color + '33';
        document.getElementById('postcard-tag').style.color = data.color;
        document.getElementById('postcard-divider').style.background = data.color;
        document.getElementById('postcard-stamp').style.color = data.color;
        document.getElementById('postcard-stamp').style.borderColor = data.color;
        document.querySelectorAll('.stat-value').forEach(s => s.style.color = data.color);
        overlay.classList.add('active');
      });
    });

    pcClose.addEventListener('click', () => overlay.classList.remove('active'));
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });

    /* ESC key */
    document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('active'); });

    /* PARALLAX on ERA LABELS */
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.era-label').forEach(label => {
        const rect = label.parentElement.getBoundingClientRect();
        const offset = rect.top * 0.1;
        label.style.transform = `translateY(${offset}px)`;
      });
    });
  });