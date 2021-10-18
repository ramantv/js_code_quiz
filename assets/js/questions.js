// Define the array of questions asan array of objects, each object represents a question, 4 answer choices, and the correct answer
// These questions were obtained from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JavaScript 
var questionArray = [
  {
    qn: "Arrays in Javascript can be used to store __________.",
    choices: ["numbers", "booleans", "strings", "all of the above"],
    ans: 3,
  },
  {
    qn: "What parts of an HTML file can have JavaScript scripts added to them?",
    choices: [
      "The <body> section",
      "The <head> section",
      "Both the <head> and <body> sections",
      "The <meta> section",
    ],
    ans: 2,
  },
  {
    qn: "Inside which HTML element do we put the javascript?",
    choices: ["<h1>", "<js>", "<script>", "<head>"],
    ans: 2,
  },
  {
    qn: "In the code -- setinterval(time(), 1000) -- what is time()?",
    choices: ["callback function", "undefined", "variable", "all of the above"],
    ans: 0,
  },
  {
    qn: "How do you call a function named 'myFunction'?",
    choices: [
      "call function myFunction()",
      "myFunction()",
      "call myFunction()",
      "call.myFunction()",
    ],
    ans: 1,
  },
  {
    qn: "What is the correct way to declare an array in JavaScript?",
    choices: [
      "var colors = 'red', 'green', 'blue';",
      "var colors = ['red', 'green', 'blue'];",
      "var colors = (1:'red', 2:'green', 3:'blue');",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');",
    ],
    ans: 1,
  },
  {
    qn: "What operator is used to compare a value or variable?",
    choices: ["=", "===", "#", "<<"],
    ans: 1,
  },
  {
    qn: "How would you alert the user with the message 'Hello World!' using javascript?",
    choices: [
      "alert('Hello World');",
      "msgBox('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
    ],
    ans: 0,
  },
  {
    qn: "What operator is the AND operator?",
    choices: ["+", "&", "&&", "||"],
    ans: 2,
  },
  {
    qn: "What type of event occurs when an HTML element is clicked on?",
    choices: ["onchange", "onmouseclick", "onmouseover", "onclick"],
    ans: 3,
  },
  {
    qn: "What operator is the OR operator?",
    choices: ["+", "&", "&&", "||"],
    ans: 3,
  },
  {
    qn: "What operator is used to assign a value to a variable?",
    choices: ["=", "===", "->", ">>"],
    ans: 0,
  },
  {
    qn: "How do you write a comment in JavaScript?",
    choices: [
      "This is a comment",
      "<!-- This is a comment -->",
      "rem This is a comment",
      "//This is a comment",
    ],
    ans: 3,
  },
  {
    qn: "What is the correct syntax for referring to an external script called “geek.js”?",
    choices: [
      '< script src="geek.js" >',
      '< script href="geek.js" >',
      '< script ref="geek.js" >',
      ' < script name="geek.js" >',
    ],
    ans: 0,
  },
  {
    qn: "How do you find the minimum of x and y using JavaScript? ",
    choices: ["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
    ans: 1,
  },
];
