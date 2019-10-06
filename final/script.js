//create / select elements

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("score");

//questions

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

    {
        question: "In which HTML element do we put the JavaScript?",
        choiceA : "&lt;script&gt;",
        choiceB : "&lt;js&gt;",
        choiceC : "&lt;scripting&gt;",
        choiceD : "javascript",
        correct : "A"
      },

      {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA : "The &lt;body&gt; section",
        choiceB : "Both the &lt;head&gt; and the &lt;body&gt; section would work",
        choiceC : "The &lt;head&gt; section",
        choiceD : "It don't matter!",
        correct : "A"
      },

      {
        question: "How do you create a function in JavaScript?",
        choiceA : "function = myFunction()",
        choiceB : "function: myFunction()",
        choiceC : "function myFunction()",
        choiceD : "myFunction function()",
        correct : "C"
      },

  ];

  //create variables

  var lastQuestion = questions.length - 1;
  var runningQuestion = 0;
  var count = 0
  var questionTime = 15; //15 seconds
  var gaugeWidth = 150;
  var gaugeUnit = gaugeWidth / questionTime;
  var score = 0;

  //render a question
  function renderQuestion(){
      var q = questions[runningQuestion];
      question.innerHTML = "<p>" + q.question + "</p>";
      choiceA.innerHTML = q.choiceA;
      choiceB.innerHTML = q.choiceB;
      choiceC.innerHTML = q.choiceC;
      choiceD.innerHTML = q.choiceD;
  }

 start.addEventListener("click", startQuiz); 

//start quiz  
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

  //render progress
  function renderProgress(){
      for ( qIndex = 0; qIndex <= lastQuestion; qIndex++){
          progress.innerHTML += "<div class= 'prog' id="+ qIndex +"></div>";
      }
  }

  //counter render
  function renderCounter(){
      if (count <= questionTime){
          counter.innerHTML = count;
          timeGauge.style.width = count + gaugeUnit + "px";
          count++;
      } else {
          count = 0;
          if(runningQuestion < lastQuestion){
          runningQuestion++;
          renderQuestion();
          console.log("next question beech!");
        }
      }
  }

  //check answer
  function checkAnswer (answer){
      if (answer == questions[runningQuestion].correct){
          score++;
          //change check bar to green
          answerIsCorrect();
          console.log("its correct!");
      } else {
          //change check bar to red
          answerIsWrong();
          console.log("you're wrong:(");
      }
      count = 0
      if(runningQuestion < lastQuestion) {
          runningQuestion++;
          renderQuestion();
          console.log("next question beech!");
      }
  }

  //answer is correct
  function answerIsCorrect(){
      document.getElementById(runningQuestion).style.backgroundColor = "green";
  }

  function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}