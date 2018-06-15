$(document).ready(function () {

    //Variables

    var count = 0;
    var time = 31;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var selected = false;

    //Content Arrays

    var question = ["Which company's motto is 'Skate Or Die' ?", "Which one of these did Daewon Song ride for in 2003?", "Who invented the ollie?", "Who was Ed Templeton riding for in 2002?", "Finish this Skate film title: Dog town and _________?", "Who invented the Kickflip?", "Which comedian is also a pro skateboarder?", "Which skateboarder was not born in the United States?"];
    var answer = ["Zero", "Speed Demons", "Alan Gelfand", "Toy Machine", "The Z-Boys", "Rodney Mullen", "Tom Green", "Bucky Lasek"];
    var firstChoice = ["Black Label", "Element", "Alan Gelfand", "Toy Machine", "The P-Boys", "Tony Alva", "Adam Sandler", "Bucky Lasek"];
    var secondChoice = ["Flip", "Speed Demons", "Tony Alva", "Birdhouse", "The Nutty Bunch", "Rodney Mullen", "Geoff Rowley", "Pierre-Luc Gagnon"];
    var thirdChoice = ["Toy Machine", "Birdhouse", "Tony Hawk", "Organic", "The X-Boys", "Steve Caballero ", "Chris Rock", "Andy Macdonald"];
    var fourthChoice = ["Zero", "Blind", "Rodney Mullen", "World industries", "The Z-Boys", "Alan Gelfand", "Tom Green", "Rodney Mullen"];

    //Content Functions

    function choiceShow() {
        $("#question").show();
        $("#choice-1").show();
        $("#choice-2").show();
        $("#choice-3").show();
        $("#choice-4").show();
    }
    function choiceHide() {
        $("#question").hide();
        $("#choice-1").hide();
        $("#choice-2").hide();
        $("#choice-3").hide();
        $("#choice-4").hide();
    }
    function hideResults() {
        $("#correct").hide();
        $("#incorrect").hide();
        $("#unanswered").hide();
        $("#restart").hide();
    }
    function showQuestion() {
        hideResults();
        $("#answer").hide();
        $("#image").hide();
        $("#time").show();
        choiceShow();
        $("#question").html(question[count]);
        $("#choice-1").html(firstChoice[count]);
        $("#choice-2").html(secondChoice[count]);
        $("#choice-3").html(thirdChoice[count]);
        $("#choice-4").html(fourthChoice[count]);

    }
    $("#choice-1").on("click", checkAnswer)
    $("#choice-2").on("click", checkAnswer)
    $("#choice-3").on("click", checkAnswer)
    $("#choice-4").on("click", checkAnswer)

    // Answer/Rules

    function checkAnswer() {

        choiceHide();

        if ($(this).text() === answer[count]) {
            stopTime();
            selected = true;
            $("#answer").show();
            $("#answer").html("Yup! The answer is " + answer[count]);
            showGif();
            correct++;
            count++;
        }
        else {
            stopTime();
            selected = true;
            $("#answer").show();
            $("#answer").html("Nah... The answer is " + answer[count]);
            showGif();
            incorrect++;
            count++;
        }

        gameEnd();
    }


    function gameEnd() {
        if (count === question.length) {
            $("#time").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
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
        $("#time").html("Time remaining: " + time);

        if (time <= 0) {
            choiceHide();
            stopTime();
            $("#answer").show();
            $("#answer").html("Time's up! The answer is " + answer[count]);
            showGif();
            unanswered++;
            count++;
            gameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(showQuestion, 3000);
        }
    }

    resetTime();


    function showGif() {
        if (count === 0) {
            $("#image").show();
            $("#image").html('<img src="assets/images/car-giphy.gif">');
        }
        else if (count === 1) {
            $("#image").show();
            $("#image").html('<img src="assets/images/backsidebs-giphy.gif">');
        }
        else if (count === 2) {
            $("#image").show();
            $("#image").html('<img src="assets/images/84ef9aa01e11fa82865c96303bb69cb8.gif">');
        }
        else if (count === 3) {
            $("#image").show();
            $("#image").html('<img src="assets/images/97198ed4d8e1931b074fdc6c2a8eee84.gif">');
        }
        else if (count === 4) {
            $("#image").show();
            $("#image").html('<img src="assets/images/tumblr_mb1alw36xa1rydwa5o1_500.gif">');
        }
        else if (count === 5) {
            $("#image").show();
            $("#image").html('<img src="assets/images/giphy.gif">');
        }
        else if (count === 6) {
            $("#image").show();
            $("#image").html('<img src="assets/images/4tH8.gif">');
        }
        else if (count === 7) {
            $("#image").show();
            $("#image").html('<img src="assets/images/tumblr_mb1alw36xa1rydwa5o1_500.gif">');
        }
    }

    //Results

    function showResults() {
        $("#correct").show();
        $("#correct").html("Correct: " + correct);
        $("#incorrect").show();
        $("#incorrect").html("Incorrect: " + incorrect);
        $("#unanswered").show();
        $("#unanswered").html("Unanswered: " + unanswered);
        $("#restart").show();
        $("#restart").html("Press Start to Try Again!");
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
        showQuestion();
    }


    $(".start").on("click", function () {
        startGame();
    });
});
