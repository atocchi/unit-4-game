$(document).ready(function() {
    // Randomly generate the Target value and value of all three gems
    let target = ((Math.floor(Math.random() * 50)) + 50);
    let gemOne = ((Math.floor(Math.random() * 5)) + 3);
    let gemTwo = ((Math.floor(Math.random() * 15)) + 3);
    let gemThree = ((Math.floor(Math.random() * 5)) + 19);
    let gemFour = ((Math.floor(Math.random() * 50)) + 1);
    //I've given the root beers different ranges of values to make the game more intresting
    // Variables to store game info, win, loss, score
    let wins = 0;
    let losses = 0;
    let score = 0;
    
    // rest function, resets all vars on win/loss
    function reset () {
         target = ((Math.floor(Math.random() * 50)) + 50);
         gemOne = ((Math.floor(Math.random() * 5)) + 3);
         gemTwo = ((Math.floor(Math.random() * 15)) + 3);
         gemThree = ((Math.floor(Math.random() * 5)) + 19);
         gemFour = ((Math.floor(Math.random() * 50)) + 1);
         score = 0;
    }
    // Checks for win or loss
    function scoreChecker () {
        if (score === target){
        alert("You Win!");
        wins++;
        $("#win").text('Wins:' + wins );
        reset();
        $("#target").text("Target: "+ target);
        }
        else if(score > target){
        alert("Sorry, You Lose!");
        losses++;
        $("#lose").text('Losses:' + losses );
        reset();
        $("#target").text("Target: "+ target);
        }
        else{
    
        }
    }
    //sets target value in HTML
    $("#target").text("Target: "+ target)

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
        
    
    
    
    
        });















