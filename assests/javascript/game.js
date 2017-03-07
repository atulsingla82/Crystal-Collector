$(document).ready(function() {

    var randomNum = null;
    var red = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;
    var score = 0;
    var wins = 0;
    var losses = 0;


    function newGame() {
        // Generate a random number 
        randomNum = Math.floor(Math.random() * 120) + 19;
        $("#randomnum").html(randomNum);
        // console.log (randomnum);

        // Random number generated when each gem is clicked
        $('.red').on('click', function() {
            score = score + red;
            $("#score").html(score);

            checkWin();
        });



        $('.blue').on('click', function() {
            score = score + blue;
            $("#score").html(score);
            checkWin();
        });


        $('.yellow').on('click', function() {
            score = score + yellow;
            $("#score").html(score);
            checkWin();
        });


        $('.green').on('click', function() {
            score = score + green;
            $("#score").html(score);

            checkWin();
        });

    }
    newGame();


    function checkWin() {


        if (score == randomNum) {
            wins++;
            $("#wins").html('Wins: ' + wins);
            restart();
        }
        if (score > randomNum) {
            losses++;
            $("#losses").html('Losses: ' + losses);
            restart();

        }


    }




    function restart() {
        randomnum = null;
        red = 0;
        blue = 0;
        green = 0;
        yellow = 0;
        score = null;
        newGame();

    }


});
