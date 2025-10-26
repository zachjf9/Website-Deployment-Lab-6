let score = 0;
const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const restartBtn = document.getElementById("restartBtn");

clickBtn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Score: " + score;
});

restartBtn.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
});
