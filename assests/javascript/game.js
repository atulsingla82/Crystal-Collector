$(document).ready(function() {


    var randomNum = null;
    var red = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    function newGame() {

        // Generate a random number 
        randomNum = Math.floor(Math.random() * 120) + 19;
        $(".randomnum").html(randomNum);
        // console.log (randomnum);

        // Random number generated when each gem is clicked

        $('.red').on('click', function() {
            totalScore += red;
            $("#score").html(totalScore);

            checkWin();
        });



        $('.blue').on('click', function() {
            totalScore += blue;
            $("#score").html(totalScore);
            checkWin();
        });


        $('.yellow').on('click', function() {
            totalScore += yellow;
            $("#score").html(totalScore);
            checkWin();
        });


        $('.green').on('click', function() {
            totalScore += green;
            $("#score").html(totalScore);

            checkWin();
        });


    }
    newGame();


    function checkWin() {


        if (totalScore == randomNum) {
            wins++;
            $("#wins").html('Wins: ' + wins);
            restart();
            newGame();

        }
        if (totalScore > randomNum) {
            losses++;
            $("#losses").html('Losses: ' + losses);
            restart();
            newGame();

        }


    }




    function restart() {
        randomnum = 0;
        red = 0;
        blue = 0;
        green = 0;
        yellow = 0;
        totalScore = 0;
        restart();
        newGame();

    }


});
