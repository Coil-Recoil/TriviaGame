//Variables
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

//Arrays
    var question = ["Which company's motto is 'Skate Or Die' ?",
    "Which one of these did Daewon Song ride for in 2003?", "Who invented the ollie?", "Who was Ed Templeton riding for in 2002?", "Finish this Skate film title: Dog town and _________?",
    "Who invented the Kickflip?", "Which comedian is also a pro skateboarder?", "Which skateboarder was not born in the United States?"];
    var answer = ["Zero", "Speed Demons", "Alan Gelfand", "Toy Machine", "The Z-Boys", "Rodney Mullen", "Tom Green", "Bucky Lasek"];
    var firstChoice = ["Black Label", "Element", "Alan Gelfand", "Toy Machine", "The P-Boys", "Tony Alva", "Adam Sandler", "Bucky Lasek"];
    var secondChoice = ["Flip", "Speed Demons", "Tony Alva", "Birdhouse", "The Nutty Bunch", "Rodney Mullen", "Geoff Rowley", "Pierre-Luc Gagnon"];
    var thirdChoice = ["Toy Machine", "Birdhouse", "Tony Hawk", "Organic", "The X-Boys", "Steve Caballero ", "Chris Rock", "Andy Macdonald"];
    var fourthChoice = ["Zero", "Blind", "Rodney Mullen", "World industries", "The Z-Boys", "Alan Gelfand", "Tom Green", "Rodney Mullen"];



    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Answer/Rules
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }


    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();


    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html();
        }
    }

 //Results
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Press Start to Try Again!");
    }

// Reset
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }


  $(".start").on("click", function() {
    startGame();
  });
});
