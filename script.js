let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML Tag ...",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 1,
  },
  {
    question: "Wir können HTML-Code mit________schreiben",
    answer_1: "Microsoft Word",
    answer_2: "Notepad++",
    answer_3: "Notepad",
    answer_4: "Alle",
    right_answer: 4,
  },
  {
    question: "Was befindet sich meistens innerhalb eines <section> Tags?",
    answer_1: "Der Head Bereich.. <head>",
    answer_2: "Die Navigation... <nav>",
    answer_3: "Ein Artikel...<article>",
    answer_4: "Der Body Bereich... <body>",
    right_answer: 3,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
  let number = document.getElementById("all-questions");
  number.innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  if (currentQuestion >= questions.length) {
      // Show End Screen
    document.getElementById("endscreen").style = "";
    document.getElementById('questionBody').style = 'display: none';

    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('rightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = 'img/troph.png';
  } else {
    // Show question
    let percent = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-bar').innerHTML = `${percent.toFixed(2)}%`;
    document.getElementById('progress-bar').style.width = `${percent + 1}%`;

    document.getElementById("current-question").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function showRightAnswer(selection) {
  let question = questions[currentQuestion];
  console.log("Current question is", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log(selectedQuestionNumber);
  console.log("Current question is", question);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log;
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;

  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}




function startQuiz() {
  let start = document.getElementById('start-overlay');
  start.classList.add('d-none');
}