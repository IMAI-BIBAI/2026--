// 要素の取得
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

// カウントの初期値を設定
let count = 0;

// +1 ボタンがクリックされたときの処理
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
    animateBump();
});

// リセット ボタンがクリックされたときの処理
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// 画面の表示を更新する関数
function updateDisplay() {
    counterDisplay.textContent = count;
}

// クリック時に数字を少し大きくするアニメーション効果
function animateBump() {
    counterDisplay.classList.add('bump');
    setTimeout(() => {
        counterDisplay.classList.remove('bump');
    }, 100);
}