let questionList = [
  {
    question: "What statement supplies the value of the function?",
    answer_0: "cancel",
    answer_1: "valueOf",
    answer_2: "continue",
    answer_3: "return",
    right_answer: 3,
  },
  
  {
    question: "JavaScript is a ___ -side programming language.",
    answer_0: "Client",
    answer_1: "Server",
    answer_2: "Both",
    answer_3: "None",
    right_answer: 2,
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    answer_0: "min(x,y);",
    answer_1: "Math.min(x,y)",
    answer_2: "Math.min(xy)",
    answer_3: "min(xy);",
    right_answer: 1,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answer_0: "rnd(7.25)",
    answer_1: "Math.round(7.25)",
    answer_2: "round(7.25)",
    answer_3: "Math.rnd(7.25)",
    right_answer: 1,
  },
  // {
  //   question: "How does a FOR-Loop start?",
  //   answer_0: "for (i <= 5; i++)",
  //   answer_1: "for i = 1 to 5",
  //   answer_2: "for (i = 0; i <= 5; i++)",
  //   answer_3: "for (i = 0; i++)",
  //   right_answer: 2,
  // },
  
];

// const question = document.getElementById('questiontext');
// const answers = Array.from (document.getElementsByClassName('answer-text'));
// const questionCounterText = document.getElementById('current-question');


let questionCounter = 0;
let currentQuestion = 0;
let rightQuestions = 0;
let setNextButtonTo = document.getElementById("next-button");
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
  document.getElementById("all-questions").innerHTML = questionList.length;
  loadSetup();
}

function startQuiz() {
  document.getElementById("start-overlay").classList.add("d-none");
  document.getElementById("start-txt").classList.add("d-none");
}

function loadSetup() {
  if (currentQuestion < questionList.length) {
    for (let i = 0; i < questionList.length; i++) {
      document.getElementById("answer-field" + i).innerHTML = `${validateAnswerFromArray(i)}`;
    }
    let startScreen = document.getElementById("questiontext");
    startScreen.innerHTML = questionList[currentQuestion]["question"];
    
    document.getElementById("current-question").innerHTML = questionCounter  +1 ;
  } else {
    // allQuestionCounter = 100;
    // alert('end');
    endQuiz();
    
  }
  setNextButtonTo.disabled = true;
}

function restartGame() {
  currentQuestion = 0;
  rightQuestions = 0;
  init();
  document.getElementById('endscreen').classList.add('d-none');
}

function endQuiz() {
  document.getElementById('main-content-container').innerHTML = '';
  document.getElementById('all-questions-endscreen').innerHTML = questionList.length;
  document.getElementById('endscreen').classList.remove('d-none');
  document.getElementById('right-questions-endscreen').innerHTML = rightQuestions;
}

function validateAnswerFromArray(arrIndex) {
   
    let loadingAnswers = questionList[currentQuestion]["answer_" + arrIndex];
    return loadingAnswers;
  
}

function updateProgressbar() {
  let percent = (currentQuestion + 1) / questionList.length;
  percent = Math.round(percent * 100);
  document.getElementById('progress-bar').innerHTML = `${percent}%`;
  document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function nextQuestion() {
  
  questionCounter++;
  currentQuestion++;
  document.getElementById("current-question").innerHTML = questionCounter;
  resetAnswerCards();
  loadSetup();
}

function getRightAnswer(selectedAnswer) {
  let whenFalseTurnRight = questionList[currentQuestion].right_answer;
  let targetCardId = document.getElementById("feedback-card-" + selectedAnswer);
  
  if (questionList[currentQuestion]["right_answer"] == selectedAnswer) {
    AUDIO_SUCCESS.play();
    updateProgressbar();
    rightQuestions++;
    setNextButtonTo.disabled = false;
    targetCardId.classList.add("right-choise");
  } else {
    AUDIO_FAIL.play();
    setNextButtonTo.disabled = false;
    targetCardId.classList.add("wrong-choise");
    document.getElementById("feedback-card-" + whenFalseTurnRight)
    targetCardId.classList.add("right-choise");
  }
  
  
}

function resetAnswerCards() {
  document
    .getElementById("answer-field0")
    .parentNode.classList.remove("right-choise");
  document
    .getElementById("answer-field0")
    .parentNode.classList.remove("wrong-choise");
  document
    .getElementById("answer-field1")
    .parentNode.classList.remove("right-choise");
  document
    .getElementById("answer-field1")
    .parentNode.classList.remove("wrong-choise");
  document
    .getElementById("answer-field2")
    .parentNode.classList.remove("right-choise");
  document
    .getElementById("answer-field2")
    .parentNode.classList.remove("wrong-choise");
  document
    .getElementById("answer-field3")
    .parentNode.classList.remove("right-choise");
  document
    .getElementById("answer-field3")
    .parentNode.classList.remove("wrong-choise");

}
