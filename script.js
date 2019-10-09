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
var scoreDiv = document.getElementById("scoreContainer");
var quizDone = document.getElementById("quizDone");

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
  var count = 75;
  var quizTime = 75; //15 seconds
  var gaugeWidth = 750;
  var gaugeUnit = quizTime / gaugeWidth;
  var scorePoints = 0;

//start quiz  
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

function quizOver(){
    quiz.style.display = "none";
    quizDone.style.display = "block";
    console.log("~~~quiz over~~~")
}

start.addEventListener("click", startQuiz); 

  //render a question
  function renderQuestion(){
      var q = questions[runningQuestion];
      question.innerHTML = "<p>" + q.question + "</p>";
      choiceA.innerHTML = q.choiceA;
      choiceB.innerHTML = q.choiceB;
      choiceC.innerHTML = q.choiceC;
      choiceD.innerHTML = q.choiceD;
  }

  //render progress
  function renderProgress(){
      for ( qIndex = 0; qIndex <= lastQuestion; qIndex++){
          progress.innerHTML += "<div class= 'prog' id="+ qIndex +"></div>";
      }
  }

  //render COUNTER
  function renderCounter(){
      if (count <= quizTime){
          counter.innerHTML = count;
          timeGauge.style.width = count - gaugeUnit - "1px";
          count--;
      }

      if (count <= -1){
          clearInterval(TIMER);
          console.log("time is up!");
          quizOver();
          renderScore();
      }
      }

  //check answer function
  function checkAnswer (answer){
      if (answer == questions[runningQuestion].correct){
          //change check bar to green
          answerIsCorrect();
          console.log("its correct!");
      } else {
          //change check bar to red
          answerIsWrong();
          //subtract 15 seconds
          count = count - 15;
          console.log("you're wrong:(");
      }
      if(runningQuestion < lastQuestion) {
          runningQuestion++;
          renderQuestion();
          console.log("next question beech!");
      } else {
          //end the quiz and show the score
        //   getTimeRemaining();
          quizOver();
          renderScore();

      }
  }

  //answer is correct
  function answerIsCorrect(){
      document.getElementById(runningQuestion).style.backgroundColor = "green";
  }

  function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

//render score
function renderScore (){
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML += "<p>" + scorePoints + "YOUR SCORE HERE" + "</p>";
    console.log("time to +-x/+calculate/x-+ score");
    var score = getTimeRemaining();
    console.log(getTimeRemaining());
}

//get score
    function getTimeRemaining(){
        console.log(count);
        return  count;
}

//select element for local storage
var userNameInput = document.querySelector("#user-name");
var scoreSpan = document.querySelector("#user-score");

//set the local storage for username and score
localStorage.setItem("userName", userName);
localStorage.setItem("userScore", scorePoints);
    
// get most recent submission
var lastUserName = localStorage.getItem("userName");
var lastUserScore = localStorage.getItem("userScore");

userNameInput.textContent = userNameInput.value;
userScoreSpan.textContent = scorePoints;

