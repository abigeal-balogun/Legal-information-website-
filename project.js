const button = document.getElementById("question-button");
const questionBox = document.getElementById("question-box");
const questionInput = document.getElementById("question-input");
const submitQuestion = document.getElementById("submit-question");
const thankYou = document.getElementById("thank-you");

button.addEventListener("click", function () {
  questionBox.hidden = false;
  questionInput.focus();
});

submitQuestion.addEventListener("click", function () {
  if (questionInput.value.trim() === "") return;

  questionInput.value = "";
  thankYou.hidden = false;
});
