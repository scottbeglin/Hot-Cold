$(document).ready(function () {

    // Function to generate the random number for user to pick
    function secretNum(min, max) {
        var secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return secretNumber;
    }

    var secretNumber = secretNum(1, 100);
    console.log("Secret Number: " + secretNumber);

    var oldGuess = 0;

    // Set the maximum number of guesses
    var counter = 20;
    $('#count').text(counter);

    // Function to start new game
    function newGame() {
        $('.new').click(newGame);
        document.new.reload;
    }

    // Function to let user know if they are hot or cold
    function guessFeedback(secretNumber, guessedNumber) {
        var difference = Math.abs(secretNumber - guessedNumber);
        if (difference >= 50) {
            $('#feedback').text('Brrrrr I am freezing!');
        } else if (difference >= 30 && difference <= 49) {
            $('#feedback').text('It is cold in here, but not freezing!');
        } else if (difference >= 20 && difference <= 29) {
            $('#feedback').text('You are at an ambient room temperature.');
        } else if (difference >= 10 && difference <= 19) {
            $('#feedback').text('Now it is getting hot in here!');
        } else if (difference >= 1 && difference <= 9) {
            $('#feedback').text('I am burning up, you are so close!');
        } else {
            $('#feedback').text('You Won!! I am so proud of you!! Want to play again?');
        }
    }


    // Function to countdown number of guesses
    function guessCounter(counter) {
        $('#count').text(counter);
    }

    // Function to list the guesses
    function guessHistory() {
        $('#guessList').append('<li>' + parseInt($('#userGuess').val(), 10) + '</li>');
    }


    // Function to validate users input
    function validation(guessedNumber) {
        console.log("Guessed Number: " + guessedNumber)
        if (guessedNumber % 1 !== 0) {
            alert('You must enter a number!!');
            $('#userGuess').val('');
            return false;
        } else if (guessedNumber < 1 || guessedNumber > 100) {
            alert('Please guess a number between 1 to 100!!');
            $('#userGuess').val('');
            return false;
        } else {
            guessFeedback(secretNumber, guessedNumber);
        }

        if (guessedNumber !== '' && guessedNumber <= 100) {
            guessFeedback(secretNumber, guessedNumber);
            counter--;
            guessHistory();
            $('#userGuess').val('');
        } else {
            alert('Please guess a number between 1 to 100!!');
            $('#userGuess').val('');
        }
        guessCounter(counter);
    }

    $('#guessButton').on('click', function () {
        var guessedNumber = parseInt($('#userGuess').val(), 10);
        var newGuess = parseInt(guessedNumber);

        validation(guessedNumber);
    });

    // Display information modal box
    $('.what').click(function () {
        $('.overlay').fadeIn(1000);
    });

    // Hide information modal box
    $('a.close').click(function () {
        $('.overlay').fadeOut(1000);
    });

});