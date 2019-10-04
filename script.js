
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("questionImage");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ];

  var score = 0;

  for (var i = 0; i < questions.length; i++){
      var response = window.prompt(questions[i].title);
      if(response === questions[i].answer){
          score++;
          alert("Correct!");
      } else {
          alert("wrong :(");
      }
      alert("you got " + score + " right!");
  }