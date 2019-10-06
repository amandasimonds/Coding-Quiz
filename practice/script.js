
//create quiz elements//

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("question-image");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("time-gauge");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var progress = document.getElementById("progress");

var scoreContainer = document.getElementById("score-container")

//questions array//
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choiceA : "strings",
      choiceB : "booleans",
      choiceC : "alerts",
      choiceD : "numbers",
      correct : "C",
    },

    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choiceA : "quotes",
      choiceB : "curly brackets",
      choiceC : "parantheses",
      choiceD : "square brackets",
      correct : "C"
    },

  ];

//create variable for running questions index//
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

start.addEventListener("click", startQuiz);

function startQuiz () {
  start.style.display= "none";
  counterRender();
  TIMER = setInterval(counterRender, 1000);
  progressRender();
  renderQuestion();
  quiz.style.display = "block";
}

function scoreRender(){
  scoreContainer.style.display = "block";
  var scorePerCent = Math.round(100 * score / questions.length);
}

//------------------------------------------------//
//-----Render Question Function------------------//
function renderQuestion(index){
  var q = questions[index];
  question.innerHTML = "<p>" + q.question + "<p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

//------------------------------------------------//
//----progress render function-------------------//
function progressRender(){
  for (var i = 0; i <= lastQuestionIndex; i++){
    progress.innerHTML += "<div class= 'prog' id=" + i + "></div>";
  }
}

//------------------------------------------------//
//if answer is wrong or correct, render the progress//
function answerIsCorrect(){
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

function answerIsWrong(){
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

//counter variables /////// counter function //////
var questionTime = 15;
var gaugeWidth = 150;
var count = 0;
var gaugeProgressUnit = gaugeWidth/questionTime;
var TIMER = setInterval(counterRender, 15000);

function counterRender(){
  if( count <= questionTime){
    counter.innerHTML = count;
    timeGauge.style.width = gaugeProgressUnit * count + "px";
    count++;
  } else {
    count = 0;
    answerIsWrong();
    if (runningQuestionIndex < lastQuestionIndex){
      runningQuestionIndex++;
      renderQuestion();
    } else {
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

function checkAnswer(answer){
  if (questions[runningQuestionIndex].correct == answer){
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  if (runningQuestionIndex < lastQuestionIndex){
    count = 0;
    runningQuestionIndex++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    scoreRender();
  }
}



//questions loop//
runningQuestionIndex = 0;

for(var i = 0; i < questions.length; i++){
  // console.log(renderQuestion(questions[0]));
  // renderQuestion(i);
  console.log(questions[i].question);
  console.log(i);
};

renderQuestion(1);

















  // var score = 0;

  // for (var i = 0; i < questions.length; i++){
  //     var response = window.prompt(questions[i].title);
  //     if(response === questions[i].answer){
  //         score++;
  //         alert("Correct!");
  //     } else {
  //         alert("wrong :(");
  //     }
  //     alert("you got " + score + " right!");
  // }