$(document).ready(function() {


    // Declare the variables
    var randomNum = 0;
    var red = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var audio = document.createElement("audio");
    audio.setAttribute('src', "assests/audio/audio.m4a");

    newGame();

    //Start new game
    function newGame() {

        audio.play();
        // Generate a random number 
        // alert("new game");
        randomNum = Math.floor(Math.random() * 120) + 19;
        $(".randomnum").html(randomNum);
        // console.log(randomNum);


        // Random number generated when each gem is clicked
        //  Total score goes up with each click

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

    // Function to check a win or loss 
    function checkWin() {


        if (totalScore === randomNum) {

            wins++;
            $("#wins").html('Wins: ' + wins);
            restart();
            newGame();


        } else if (totalScore > randomNum) {


            losses++;


            $("#losses").html('Losses: ' + losses);

            $(".tryagain").show();

            restart();
            newGame();
        }



        // Restart function at the end of each game 
        function restart() {
            randomnum = Math.floor(Math.random() * 120) + 19;
            $(".randomnum").html(randomNum);
            red = Math.floor(Math.random() * 12) + 1;
            blue = Math.floor(Math.random() * 12) + 1;
            green = Math.floor(Math.random() * 12) + 1;
            yellow = Math.floor(Math.random() * 12) + 1;
            totalScore = 0;
            $("#score").html(totalScore);

            // newGame();

        }

    }

});
