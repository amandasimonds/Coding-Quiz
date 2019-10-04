
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

//------------------------------------------------//
//-----Render Question Function------------------//
function renderQuestion(){
  var q = questions[runningQuestionIndex];
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

function answerIsCorrect(){
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}


//questions loop//
runningQuestionIndex = 0;

for(var i = 0; i < lastQuestionIndex; i++){
  console.log(renderQuestion(questions[0]));
  renderQuestion();
}

















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