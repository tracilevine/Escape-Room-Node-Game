const readlineSync = require("readline-sync");

const maxMoves = 10;
let currentMove =0; 
const score = 0;
const life = true;
let trueItems=["lamp","couch","chair","bike","picture","blanket"];
let falseItems =["waterbottle","dining room table","notebook","book"];
//random item in the true array 
let key =  trueItems[Math.floor(Math.random()*trueItems.length)];

const name = readlineSync.question('Welcome, guest... what is your name? ');

readlineSync.keyInPause(`Welcome to the escape room, ${name}, your goal is to find your way out.`);
readlineSync.keyInPause(`In this room you will find somewhere a key that will unlock the door. 
You must look around and find the right tools to find the key. You will have 10 moves to get out of the room! 
`);

readlineSync.keyInPause(`\nIn this room you are going to find the following items:\n
a lamp, waterbottle, dining room table, chair, book, notebook, blanket, picture, couch, bike, bed\n\n`)

const userMove = readlineSync.question ("\nWhere do you want to look?\n")

const yourMoves = (userMove) => {
    for (let move=0; move <maxMoves; move++){
        if (userMove === key){
            console.log ("\nCongratulations! You have one the game!🏆");
        } else if (userMove === trueItems){
            console.log(`\nYou are very close....Keep trying....You have ${maxMoves-1} moves left to escape.\n`);
            currentMove++;
            return userMove;
        } else if (userMove === maxMoves -1){
            console.log(`You lose. 💀\n The key was in the bed!`);

        } else
            console.log (`\nYou have hit a bomb. Game Over\n`);       
    }
};

yourMoves(userMove);