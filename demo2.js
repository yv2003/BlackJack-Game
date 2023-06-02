let player = {
  name: "Per",
  chips: 145
};
let sum = 0
console.log(sum)
let hasBlackjack = false;
let isAlive = false; // to check if the 
let message = " ";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-El");
let cards = [] // array -ordered lst 
console.log(messageEl)

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$" + player.chips;

function getRandomCard(){
    let randomCard =  Math.floor(Math.random()*13 + 1)
    if (randomCard === 1){
        return 11
    }
    else if (randomCard > 10){
        return 10
    }
    else {
        return randomCard
    }
}
let RandomCard = getRandomCard()

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length ; i+=1){
       // let card = document.createElement("div")
       console.log(cards[i])
        cardsEl.textContent += " " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum

if (sum <= 20) {
    message="do you want to draw a new card? "
} else if (sum === 21) {
    message="woho!, you have got blackjack"
    hasBlackjack = true 
    console.log(hasBlackjack)
} else {
    message = "you are out of the game"
    isAlive = false
} 
messageEl.textContent = message
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){
      let card = getRandomCard();
      sum += card
      cards.push(card)
      console.log("Drawing a new card!")
      renderGame()
    }
    }
    






// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
/*
let age = 21

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
if (age < 21){
    console.log("You cannot enter the club!!")
} else {
    console.log("welcome")
}

// Check if the person is elegible for a birthday card from the King! (100)

let Age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
if (Age < 100){
    console.log("Not eligible")
} else if (Age === 100){//=== is strict
    console.log("here is your bdAY card")
}else {
    console.log("Not eligible, you have already got a card")
}*/



