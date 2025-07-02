
let player1 = {
  name: "player 1",
  dicevalue: [1,2,3,4,5,6],
  color: 'green',
  throwdice: function() {
    let dicelength = this.dicevalue.length;
    let randomIndex = Math.floor(Math.random() * dicelength);
    return this.dicevalue[randomIndex];
  }
}

let player2 = {
  name: "player 2",
  dicevalue:  [1,2,3,4,5,6],
  color: 'blue',
  throwdice: function() {
    let dicelength = this.dicevalue.length;
    let randomIndex = Math.floor(Math.random() * dicelength);
    return this.dicevalue[randomIndex];
  }
}

// Example calls
console.log(player1.throwdice());
console.log(player2.throwdice());




//if page is refreshed throwdice for player 1 and player 2 and  
// update player 2 or 1 as winner 
window.addEventListener('load', function() 
{
  // Your JavaScript code here to be executed after the page loads
  
   var audio = document.getElementById("myAudio");
        play1 = player1.throwdice();
        document.getElementById("img1").src = "./images/dice"+play1+".png";
       
       
   
        play2 = player2.throwdice();
        document.getElementById("img2").src = "./images/dice"+play2+".png";
       ;
        audio.play();
        

    if (play1 < play2){
        
        this.document.querySelector("h1").innerHTML = "Player 2 won this round"
    }

    else if (play1 === play2){
        document.querySelector("h1").innerHTML= "ITS A DRAW TRY AGAIN!"


    }
    else{
        
        document.querySelector("h1").innerHTML= "Player 1 won this round"
    }

        
}  
)


