
var readLineSync = require('readline-sync');
var score = 0;

function welcome(){
  var userName = readLineSync.question("What is your name? ");
  console.log("Welcome " + userName + " to: DO YOU KNOW Swastik quiz!!");
  console.log("Lets Begin :)");
  console.log("---------------------------------------");
}

function club(question,answer){
  var userName = readLineSync.question(question);

  if (userName.toUpperCase() === answer.toUpperCase()){
    score = score +1;
    console.log("You are correct!");
  } else{
    console.log("You are wrong!");
  }
  
  console.log(score);
  console.log("---------");
  
}

var questions = [
  {
    question : `What is the nickname of Swastik? 
    a: Sonu 
    b: Suvam 
    c: Subham 
    d: Samar \n` , 
    
    answer : `b`,
  },

  {
    question : `What is the fav color of Swastik? 
      a: Red 
      b: Black 
      c: Blue 
      d: Pink \n `,

    answer: `c`
  },

  {
    question : `Which subject was fascinating to Swastik in highschool? 
      a: Maths 
      b: English 
      c: History 
      d: Chemistry \n `,

    answer: `d`,
  }, 

  {
    question : `Which TV show is binge worthy for Swastik? 
      a: Breaking Bad 
      b: Friends 
      c: Mr Robot 
      d: Vikings \n `,

    answer: `b`,
  },

  {
    question: `Which one of these is his fav band ? 
      a: Coldplay
      b: The Beatles
      c: One Direction
      d: Maroon 5 \n `,

    answer: "a",
  }
]

function game(){
  for (i=0;i<questions.length;i++){
    var currentQuestion = questions[i];
    club(currentQuestion.question,currentQuestion.answer);
  }
  displayFinalScore();
}

function displayFinalScore(){
  
  if (score > 3){
    console.log(`Nice! You are a good friend of Swastik \n 
                Your final score is ` + score);
  } else {
    console.log(`Oops! You need to spend more time with Swastik! \n
                Your final score is ` + score);
  }
}

welcome();
game();
club();
