const messages = [
  "美唄の焼き鳥が大好きです！",
  "最近AIにハマっています",
  "趣味はドライブです",
  "今日も元気にプログラミング！",
  "よろしくお願いします！"
];

let current = 0;

document.getElementById("change-btn").addEventListener("click", function() {
  current = (current + 1) % messages.length;
  document.querySelector(".message").textContent = messages[current];
});
