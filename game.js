const readlineSync = require("readline-sync");

const moves = 10; 
const score = 0;
const life = true;
let falseItems=["lamp","couch","chair","bike","picture","blanket"];
let trueItems =["waterbottle","dining room table","notebook","book"];
let key = "bed" 

const name = readlineSync.question('Welcome, guest... what is your name? ');

readlineSync.keyInPause(`
Welcome to the escape room, ${name}, 
your goal is to find your way out.
`);
readlineSync.keyInPause(`
In this room you will find somewhere a key that will unlock the door. 

You must look around and find the right tools to find the key. You will have 10 moves to get out of the room! 
`);

readlineSync.keyInPause(`\nIn this room you are going to find the following items:\n
a lamp, waterbottle, dining room table, chair, book, notebook, blanket, picture, couch, bike, bed\n`)
const input = readlineSync.question ("Where do you want to look?\n")

//while statement for if life is true and they still have moves allow .... 

for (let i=0; i<moves; i++){
    const input = readlineSync.question ("Where do you want to look?\n");
}

//if input true item  return clue - create loop for true items

if (input===trueItems){
    console.log(`The key is under something soft. You have ${moves-1} left to escape.`);
 } else if (input===key){
     console.log ("Congratulations! You have one the game!");
 }else{
     console.log (`Sorry no clue here. You have ${moves-1} left to escape.`);
     
 };




if (moves === 0 && count == 10) {
    console.log("You used " + (10 - moves) + " moves and your score was " + (moves * 6) + "\n\n GAME OVER");
  }