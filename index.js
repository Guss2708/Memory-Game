/*
1. Creat and assign variables & retrive the necessary HTML elements
*/

let record = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let imgRec = [];
let rand;
let flipIndex = 0;
let cardTextRec = [];
let cardRec = [];
let cardNum;
let front;
let back;
let cardChk = 0;
let correct = 0; //score

let memory = document.getElementById("playarea");
let timer = document.getElementById("timer");
let scoreEl = document.getElementById("score");
let newGame;
let result = document.getElementById("outcome");
let opacityD = document.getElementById("transparency");
let h1Res = document.getElementById("winFrase");
let pRes = document.getElementById("result");

let status = 0;
let countDown;
let secsInput = 60;
let seconds = secsInput;
let gameOver = false;

//2. Make the flipping work
memory.addEventListener("click", function (e) {
    var el = e.target.parentElement;
    var numId = el.id;
    if (Number.isInteger(parseInt(numId.replace("back", ""), 10))) {
      cardClick(el.parentElement.id);
    } else {
      cardClick(numId);
    }
  });
  
  function cardClick(cardId) {
    cardNum = cardId.replace("card", ""); //"1", "2"
    cardNum = parseInt(cardNum, 10); //1, 2
  
    //if conditions - game is over, record value of the card is 0, see if card is checked
    if (record[cardNum - 1] == 0 && cardChk == 0 && gameOver == false) {
      //Do the actul flipping
      front = document.getElementById("front" + cardNum); //"front" + 1 -> "front1"
      back = document.getElementById("back" + cardNum);
      front.style.transform = "rotateY(-180deg)";
      back.style.transform = "rotateY(0deg)";
  
      //3. Basic game - no randomization, no timer, just flipping, comparing and alert box for result
      //change data of variables, compare the 2 flipped cards, display result etc
      cardTextRec.push(back.innerHTML); //['<img src="images/img1.png">','<img src="images/img3.png">']
      cardRec.push(cardNum); //[1,2]
  
      flipIndex++;
      record[cardNum - 1] = 1;
  
      if (flipIndex == 2) {
        //comparison
        if (cardTextRec[0] == cardTextRec[1]) {
          correct++;
          scoreEl.innerHTML = "Score: " + correct; //Score: 1
          cardRec = [];
          cardTextRec = [];
          flipIndex = 0;
  
          if (correct == 10) {
            //STOP TIMER CALL HERE
            clearTimeout(countDown);
            //display result and stop game
            setTimeout(function () {
              displayResult();
            }, 600); //delay the display of result by 600 milliseconds
          }
          return;
        } else {
          //flip back because they're not the same
          cardChk = 1;
          //call the flipBack functio at a time delay of 600 milliseconds
          setTimeout(function () {
            flipBack();
          }, 600);
          return;
        }
      }
    }
  
    if (gameOver == true) {
      alert("Game is over. Click on the New Game button to start a new game");
    }
  }
  
  function flipBack() {
    front = document.getElementById("front" + cardRec[0]);
    back = document.getElementById("back" + cardRec[0]);
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";
  
    front = document.getElementById("front" + cardRec[1]);
    back = document.getElementById("back" + cardRec[1]);
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";
  
    record[cardRec[0] - 1] = 0;
    record[cardRec[1] - 1] = 0;
    cardTextRec = [];
    cardRec = [];
    flipIndex = 0;
    cardChk = 0;
  }