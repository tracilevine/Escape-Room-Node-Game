const readlineSync = require("readline-sync");

const theGame = () =>{
let maxMoves = 4;
let trueItems=["lamp","notebook","book","picture","blanket","waterbottle","speaker"];
let falseItems =["couch","dining room table","chair","desk","hand santizer"];

//random item in the true array 
let key =  trueItems[Math.floor(Math.random()*trueItems.length)];


const name = readlineSync.question('Welcome, guest... what is your name? ');

readlineSync.keyInPause(`Welcome to the escape room, ${name}, your goal is to find your way out.`);
readlineSync.keyInPause(`In this room you will find somewhere a key that will unlock the door. 
You must look around and find the right tools to find the key. You will have 4 moves to get out of the room! 
`);

readlineSync.keyInPause(`\nIn this room you are going to find the following items:\n
lamp, couch, dining room table, book, notebook, speaker, picture, waterbottle, desk, chair, blanket\n\n`)

const playAgain = () =>{
    let userDecision =  readlineSync.question('Do you want to play again?')

    if(userDecision === 'yes') {
      theGame()
    } else {
      console.log('Thank you for playing have a nice day!')
    }

}

const yourMoves = (userMove) => {
    
    if (userMove === key){
        console.log ("\nCongratulations! You have one the game!🏆");
        maxMoves = 0;
        playAgain();
    } else if (trueItems.includes(userMove)){
        maxMoves = maxMoves-1; 
        if(maxMoves === 0 ) {
            console.log('you are out of moves game over');
            playAgain();
          } else {
           console.log(`\nYou are very close....Keep trying....You have ${maxMoves} moves left to escape.\n`);}
    } else if (falseItems.includes(userMove)){
        console.log (`\nYou have hit a bomb. Game Over\n`); 
        maxMoves = 0;
        playAgain();
    } 
}

while (maxMoves>0){
    const userMove = readlineSync.question ("\nWhere do you want to look?\n");
    yourMoves(userMove);
}


}
theGame();






    
  
        
