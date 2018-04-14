$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 101) + 19;
    var countingNumber = 0;
    var wins = 0;
    var losses = 0;
    var redCrystal = Math.floor(Math.random() * 11) + 1;
    var blueCrystal = Math.floor(Math.random() * 11) + 1;
    var greenCrystal = Math.floor(Math.random() * 11) + 1;
    var yellowCrystal = Math.floor(Math.random() * 11) + 1;

    $("#randomNumber").html(targetNumber);
    $("#added-numbers").html(countingNumber);
    $("#win-count").html(wins);
    $("#loss-count").html(losses);

    console.log(wins);
    console.log(losses);


    function reset() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        countingNumber = 0;
        redCrystal = Math.floor(Math.random() * 11) + 1;
        blueCrystal = Math.floor(Math.random() * 11) + 1;
        greenCrystal = Math.floor(Math.random() * 11) + 1;
        yellowCrystal = Math.floor(Math.random() * 11) + 1;
        $("#randomNumber").html(targetNumber);
        $("#added-numbers").html(countingNumber);
    };

    function winner() {
        wins++;
        $("#win-count").html(wins);
        reset();

    }

    function loser() {
        losses++;
        $("#loss-count").html(losses);
        reset();

    }


    $("#red-crystal").click(function () {
        countingNumber = countingNumber + redCrystal;
        $("#added-numbers").html(countingNumber);
        if (countingNumber === targetNumber) {
            winner();
        } else if (countingNumber > targetNumber) {
            loser();
        }
        //console.log(countingNumber);

    });

    $("#blue-crystal").click(function () {
        countingNumber = countingNumber + blueCrystal;
        $("#added-numbers").html(countingNumber);
        if (countingNumber === targetNumber) {
            winner();
        } else if (countingNumber > targetNumber) {
            loser();
        }

        //console.log(countingNumber);

    });


    $("#green-crystal").click(function () {
        countingNumber = countingNumber + greenCrystal;
        $("#added-numbers").html(countingNumber);
        if (countingNumber === targetNumber) {
            winner();
        } else if (countingNumber > targetNumber) {
            loser();
        }

        ///console.log(countingNumber);

    });


    $("#yellow-crystal").click(function () {
        countingNumber = countingNumber + yellowCrystal;
        $("#added-numbers").html(countingNumber);
        if (countingNumber === targetNumber) {
            winner();
        } else if (countingNumber > targetNumber) {
            loser();
        }

        //console.log(countingNumber);

    });







    //psudocoding

    //generate random number between 19 and 120
    //create an on.click function for each image and give it a random number
    //make the random numbers add to each other after every click 
    //make the added number show up on the screen live
    //if the added number is greater than the randomly generated number, then add 1 loss to the counter and reset game
    //if the added number equals the randomly generated number, then add 1 win to the counter and reset game

    //maybe try to make the crystals numbers not to equal each other?




});
