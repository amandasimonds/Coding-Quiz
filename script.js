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
      var response = window.title(questions[i].title);
      if(response === questions[i].answer){
          score++;
          alert("Correct!");
      } else {
          alert("wrong :(");
      }
      alert("you got " + score + " right!");
  }