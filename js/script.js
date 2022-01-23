let questionList = [
  {
    question: "What statement supplies the value of the function?",
    answer_0: "cancel",
    answer_1: "valueOf",
    answer_2: "continue",
    answer_3: "return",
    'right_answer': 3,
  },

  {
    question: "JavaScript is a ___ -side programming language.",
    answer_0: "Client",
    answer_1: "Server",
    answer_2: "Both",
    answer_3: "None",
    'right_answer': 2,
  },
  {
    question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
    answer_0: "reverse()",
    answer_1: "shift()",
    answer_2: "slice()",
    answer_3: "some()",
    right_answer: 2,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answer_0: "//This is a comment",
    answer_1: "None",
    answer_2: "'This is a comment'",
    answer_3: "!--This is a comment--",
    right_answer: 0,
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
    question: "Which built-in method calls a function for each element in the array?",
    answer_0: "while()",
    answer_1: "forEach()",
    answer_2: "loop()",
    answer_3: "None",
    'right_answer': 1,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answer_0: "rnd(7.25)",
    answer_1: "Math.round(7.25)",
    answer_2: "round(7.25)",
    answer_3: "Math.rnd(7.25)",
    'right_answer': 1,
  },
  {
    question: "How does a FOR-Loop start?",
    answer_0: "for (i <= 5; i++)",
    answer_1: "for i = 1 to 5",
    answer_2: "for (i = 0; i <= 5; i++)",
    answer_3: "for (i = 0; i++)",
    'right_answer': 2,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answer_0: "body section",
    answer_1: "head section",
    answer_2: "None",
    answer_3: "Both",
    'right_answer': 3,
  },
];

let questionCounter = 0;
let currentQuestion = 0;
let rightQuestions = 0;
let setNextButtonTo = document.getElementById('next-button');
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
  document.getElementById('all-questions').innerHTML = questionList.length;
  loadSetup();
  
}

function startQuiz() {
  document.getElementById('start-overlay').classList.add('d-none');
  document.getElementById('start-txt').classList.add('d-none');
}

function loadSetup() {
  if (questionList.length <= 0 || currentQuestion < questionList.length) {
    for (let i = 0; i < 4; i++) {
      document.getElementById('answer-' + i).innerHTML = questionList[currentQuestion]['answer_' + i];
    }
    document.getElementById('questiontext').innerHTML = questionList[currentQuestion]['question'];
    document.getElementById("current-question").innerHTML = questionCounter + 1;
  } else {
    endQuiz();
  }  
}

function restartGame() {
  document.getElementById("endscreen").classList.add("d-none");
  document.getElementById("main-content-container").classList.remove('d-none');
  questionCounter = 0;
  currentQuestion = 0;
  document.getElementById('current-question').innerHTML = currentQuestion;
  rightQuestions = 0;
  
  document.getElementById("progress-bar").style = 'width: 0%;';
  resetAnswerCards();
  init(); 
  stopConfetti();
  
}

function endQuiz() {
  document.getElementById("main-content-container").classList.add('d-none');
  document.getElementById("all-questions-endscreen").innerHTML = questionList.length;
  document.getElementById("endscreen").classList.remove("d-none");
  document.getElementById("right-questions-endscreen").innerHTML = rightQuestions;
  confetti();
}

function updateProgressbar() {

  let percent = (currentQuestion + 1) / questionList.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
  console.log(percent);
}

function nextQuestion() {
  questionCounter++;
  currentQuestion++;
  loadSetup();
  resetAnswerCards();
  setNextButtonTo.disabled = true;
}

function getRightAnswer(selectedAnswer) {
  let question = questionList[currentQuestion];
  let selectedQuestionNumber = selectedAnswer.slice(-1);
  let idOfRightAnswer =`answer-${questionList[currentQuestion]['right_answer']}`
  
  if (selectedQuestionNumber == question['right_answer']) {
    rightSelection(selectedAnswer);
  } else {
    wrongSelection(idOfRightAnswer, selectedAnswer);
  }
  setNextButtonTo.disabled = false;
  updateProgressbar();
}

function rightSelection(id) {
  AUDIO_SUCCESS.play();
  rightQuestions++;
  document.getElementById(id).parentNode.classList.add("right-choice");
}

function wrongSelection(id, answer) {
  AUDIO_FAIL.play();
  document.getElementById(answer).parentNode.classList.add("wrong-choice");
  document.getElementById(id).parentNode.classList.add("right-choice");
}

function resetAnswerCards() {
  for (let i = 0; i <= 3; i++) {
    document.getElementById("answer-" + i).parentNode.classList.remove("wrong-choice");
    document.getElementById("answer-" + i).parentNode.classList.remove("right-choice");
  }
}





