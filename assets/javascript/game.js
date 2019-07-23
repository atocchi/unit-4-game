//declare global variables
let target, gemOne, gemTwo, gemThree, gemFour, score, special, wins, losses;

//set win/loses
wins = 0;
losses = 0;

// //I've given the root beers different ranges of values to make the game more intresting
// rest function, resets all vars on win/loss
function reset () {
     target = ((Math.floor(Math.random() * 50)) + 50);
     gemOne = ((Math.floor(Math.random() * 5)) + 3);
     gemTwo = ((Math.floor(Math.random() * 15)) + 3);
     gemThree = ((Math.floor(Math.random() * 5)) + 19);
     gemFour = ((Math.floor(Math.random() * 50)) + 1);
     score = 0;
     special = true;
     $("#target").text("Target: "+ target)
     $("#score").text("Score :"+ score);
     $("#special").attr("src", "./assets/images/special.png")
}
// Checks for win or loss
function scoreChecker () {
    if (score === target){
    alert("You Win!");
    wins++;
    $("#special").attr("src", "./assets/images/special.png") //Rootbeer Float hack
    $("#win").text('Wins:' + wins );
    reset();
    }
    else if(score > target){
    alert("Sorry, You Lose!");
    losses++;
    $("#lose").text('Losses:' + losses );
    reset();
    }
    else{

    }
}

// start document, jquery functions that set format doc
$(document).ready(function() {

    //loads all the default values
    reset()

    //When the first rootbeer is clicked
    $("#root-1").on("click", function() {
        score = score + gemOne
        scoreChecker();
        $("#score").text("Score: " + score) 
    })
    //When the Second rootbeer is clicked
    $("#root-2").on("click", function() {
        score = score + gemTwo;
        scoreChecker();
        $("#score").text("Score: " + score);

    })
    //when the Third rootbeer is clicked
    $("#root-3").on("click", function() {
        score = score + gemThree;
        scoreChecker();
        $("#score").text("Score: " + score);
    })
    //When the Forth rootbeer is clicked
    $("#root-4").on("click", function() {
        score = score + gemFour;
        scoreChecker();
        $("#score").text("Score: " + score);
    })
    //Special rootbeer float that can only be click once a round, should replace itself
    $("#special").on("click", function() {
     if (special == true){
        score = score + 1
        special = false
        scoreChecker();
        $("#special").attr("src", "./assets/images/used.png")
        $("#score").text("Score: " + score) 
        }
    })
        
    
        });















