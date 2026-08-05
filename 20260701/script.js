// ボタンを押すたびにランダムで表示する一言メッセージの候補リスト
const messages = [
  "今日という日を大切に、一歩ずつ前へ。",
  "できることから、コツコツと。",
  "失敗は成功のもと。挑戦し続けます。",
  "笑顔を忘れずに、日々精進。",
  "小さな積み重ねが、大きな成果になる。",
  "静かな自信で、着実に前進する。",
  "作り込みは細部に宿る。"
];

// 操作対象のDOM要素をあらかじめ取得しておく
const messageEl = document.getElementById("message");   // 一言メッセージを表示する要素
const shuffleBtn = document.getElementById("shuffleBtn"); // メッセージ切り替えボタン
const barcode = document.getElementById("barcode");     // バーコード風の装飾要素
const card = document.getElementById("card");           // カード本体

// マウスの位置に合わせてカードがわずかに傾く3Dチルト演出
card.addEventListener("mousemove", (e) => {
  // カード要素の画面上の位置とサイズを取得
  const rect = card.getBoundingClientRect();
  // カード内でのマウス位置を -0.5〜0.5 の範囲に正規化(中心が0)
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  // 最大何度まで傾けるか
  const maxTilt = 6;
  // マウスのX位置でY軸回転、Y位置でX軸回転させ、立体的に傾ける
  card.style.transform = `rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg)`;
});

// マウスがカードから離れたら、傾きを元に戻す
card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});

// ボタンがクリックされたときの処理
shuffleBtn.addEventListener("click", () => {
  // messages配列からランダムに1つ選んで表示を差し替える
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageEl.textContent = `"${messages[randomIndex]}"`;

  // バーコードをスキャンし直したような一瞬のフラッシュ演出
  // 不透明→ほぼ透明→不透明、と変化させることで点滅させる
  barcode.animate(
    [
      { opacity: 1 },
      { opacity: 0.15 },
      { opacity: 1 }
    ],
    { duration: 250, easing: "ease-out" }
  );
});
