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
