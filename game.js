let player={
 name:"Raviraj",
 chips:1000
}
let cards=[]
let sum=0
let hasblackjack=false
let isAlive=false
let message=""

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("card-el")


let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" :" + " Rs "+player.chips


function getrandomcard(){
  //let no=Math.random()*13
   //return Math.floor(no)+1

   let randomnumber= Math.floor(Math.random()*13)+1  
   if(randomnumber>10){
    return 10
   }else if (randomnumber===1){
    return 11
   }
   else{
    return randomnumber
   }
  }


function startGame(){
  isAlive=true
  let firstcard=getrandomcard()
  let secondcard=getrandomcard()
  cards=[firstcard,secondcard]
  sum=firstcard+secondcard
   renderGame()
}
function renderGame(){ 
   cardsEl.textContent="Cards: "
  for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
  }
   sumEl.textContent="Sum: "+sum

if(sum<=20){
  message="Do you want to draw a new card? 😉"
} else if(sum===21){
  message="whoo! you got the blackjack ☠️"
   hasblackjack=true
} else{
  message="better luck for the next time! 🫡"
  isAlive=false
}
messageEl.textContent=message
}

function Newcard()  {
if(isAlive===true && hasblackjack===false){
let card=getrandomcard()
sum+=card
cards.push(card)
renderGame()
}
}


