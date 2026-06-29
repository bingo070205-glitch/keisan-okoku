<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
  <meta name="theme-color" content="#3BA7FF" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="けいさん王国" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <link rel="manifest" href="manifest.json" />
  <link rel="apple-touch-icon" href="assets/app-icon.svg" />
  <link rel="stylesheet" href="style.css" />
  <title>けいさん王国</title>
</head>
<body>
  <div id="app">
    <header class="topbar">
      <div class="pill">🪙 <span id="coinTop">0</span></div>
      <div class="pill">💎 <span id="gemTop">0</span></div>
      <button class="round" data-go="parent">⚙️</button>
    </header>

    <main id="title" class="screen active title-screen">
      <div class="sky"></div>
      <div class="title-card">
        <div class="logo-small">たしざん・ひきざん</div>
        <h1>けいさん王国</h1>
        <p>なかまをあつめて、けいさんの冒険へ！</p>
        <div class="hero-row">
          <img src="assets/characters/hero-boy.svg" class="hero-big" alt="主人公" />
          <img src="assets/characters/slime.svg" class="monster-bounce" alt="スライム" />
        </div>
        <button class="btn primary" data-go="map">スタート</button>
        <div class="menu-row">
          <button class="btn green" data-go="book">ずかん</button>
          <button class="btn blue" data-go="gacha">ガチャ</button>
        </div>
      </div>
    </main>

    <main id="map" class="screen">
      <section class="panel map-panel">
        <h2>ぼうけんマップ</h2>
        <p class="sub">ステージをえらぼう</p>
        <div id="mapBoard" class="map-board"></div>
      </section>
      <nav class="bottom-nav"><button data-go="title">ホーム</button><button data-go="book">ずかん</button><button data-go="gacha">ガチャ</button></nav>
    </main>

    <main id="battle" class="screen battle-screen">
      <div class="battle-head">
        <button class="back" data-go="map">←</button>
        <div><div id="stageName" class="stage-name">ステージ</div><div id="heartRow" class="hearts"></div></div>
      </div>
      <section class="battle-field" id="battleField">
        <img id="heroImg" src="assets/characters/hero-boy.svg" class="hero" alt="主人公" />
        <div id="effect" class="effect"></div>
        <div class="enemy-wrap">
          <div id="enemyName" class="enemy-name">スライム</div>
          <div class="enemy-hp"><div id="enemyHpBar"></div></div>
          <img id="enemyImg" src="assets/characters/slime.svg" class="enemy" alt="モンスター" />
        </div>
      </section>
      <section class="question-card">
        <div class="q-label">もんだい</div>
        <div id="question" class="question">1 + 1 = ?</div>
        <div id="answers" class="answers"></div>
      </section>
      <section class="exp-card">
        <div id="expText">Lv.1 EXP 0/100</div><div class="expbar"><div id="expBar"></div></div>
      </section>
    </main>

    <main id="clear" class="screen clear-screen">
      <section class="panel clear-card">
        <div class="clear-title">ステージクリア！</div>
        <p id="clearText">よくできました！</p>
        <button class="btn primary" data-go="map">マップへ</button>
      </section>
    </main>

    <main id="gacha" class="screen">
      <section class="panel center">
        <h2>なかまガチャ</h2>
        <p id="gachaMsg">100コインでなかまをゲット！</p>
        <div id="gachaPrize" class="gacha-machine">?</div>
        <button id="spinBtn" class="btn primary">1回まわす 🪙100</button>
      </section>
      <nav class="bottom-nav"><button data-go="title">ホーム</button><button data-go="map">マップ</button><button data-go="book">ずかん</button></nav>
    </main>

    <main id="book" class="screen">
      <section class="panel">
        <h2>なかま図鑑 <span id="bookCount"></span></h2>
        <div id="bookGrid" class="book-grid"></div>
      </section>
      <nav class="bottom-nav"><button data-go="title">ホーム</button><button data-go="map">マップ</button><button data-go="gacha">ガチャ</button></nav>
    </main>

    <main id="parent" class="screen">
      <section class="panel">
        <h2>保護者メニュー</h2>
        <div class="report"><div>正答率</div><strong id="rate">0%</strong></div>
        <div class="report"><div>問題数</div><strong id="totalQ">0問</strong></div>
        <div class="report"><div>苦手</div><strong id="weak">まだありません</strong></div>
        <button id="resetBtn" class="btn danger">データリセット</button>
      </section>
      <nav class="bottom-nav"><button data-go="title">ホーム</button><button data-go="map">マップ</button></nav>
    </main>
  </div>
  <script src="app.js"></script>
</body>
</html>
