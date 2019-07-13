


$(document).ready(function () {
    console.log("ready");


    // Declared global variables 
    var timer = 0;
    
    //Initializing  while declaring
    //creates and array of objects    
    var trivia = [
        {
            question: "Why do JavaScript and Java have similar names?",
            answer1: 'JavaScript is a stripped-down version of Java',
            answer2: 'JavaScript’s syntax is loosely based on Java’s',
            answer3: 'They both originated on the island of Java',
            answer4: 'None of the above',
            correct: "JavaScript’s syntax is loosely based on Java’s"

        },
        {
            question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
            answer1: 'The User’s machine running a Web browser',
            answer2: 'The Web server',
            answer3: 'A central machine deep within Netscape’s corporate offices',
            answer4: 'None of the above',
            correct: "The User’s machine running a Web browser"

        },
        {
            question: "	______ JavaScript is also called client-side JavaScript",
            answer1: 'Microsoft',
            answer2: 'Navigator',
            answer3: 'LiveWire',
            answer4: 'Native',
            correct: "Navigator"

        },
        {
            question: " __________ JavaScript is also called server-side JavaScript.",
            answer1: 'Microsoft',
            answer2: 'Navigator',
            answer3: 'LiveWire',
            answer4: 'Native',
            correct: "LiveWire"

        },
        {
            question: "What are variables used for in JavaScript Programs?",
            answer1: 'Storing numbers, dates, or other values',
            answer2: 'Varying randomly',
            answer3: 'Causing high-school algebra flashbacks',
            answer4: 'None of the above',
            correct: "Storing numbers, dates, or other values"

        },
        {
            question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
            answer1: 'Client-side',
            answer2: 'Server-side',
            answer3: ' Local',
            answer4: ' Native',
            correct: "Client-side"

        },
        {
            question: "Which of the following is not considered a JavaScript operator?",
            answer1: 'new',
            answer2: 'this',
            answer3: 'delete',
            answer4: 'typeof',
            correct: "this"

        }, {
            question: "Choose the client-side JavaScript object?",
            answer1: 'Database',
            answer2: 'Cursor',
            answer3: 'Client',
            answer4: 'FileUpLoad',
            correct: "FileUpLoad"

        },
        {
            question: "JavaScript entities start with _______ and end with _________.",
            answer1: 'Semicolon, colon',
            answer2: 'Semicolon, Ampersand',
            answer3: 'Ampersand, colon',
            answer4: 'Ampersand, semicolon',
            correct: "Ampersand, semicolon'"

        },
        {
            question: "To set up the window to capture all Click events, we use which of the following statement?",
            answer1: 'window.captureEvents(Event.CLICK);',
            answer2: 'window.handleEvents (Event.CLICK);',
            answer3: 'window.routeEvents(Event.CLICK );',
            answer4: 'window.raiseEvents(Event.CLICK );',
            correct: "window.captureEvents(Event.CLICK);"
        },
    ];

    //Declaring global variables
    //assigned trivia[0] to var show to questions and answers in html.
    var show = trivia[0];
    var index = 0;
    var gotRight = 0;
    var gotWrong = 0;
    console.log(trivia);

    $('#gotCorrect').html(gotRight);
    $('#gotWrong').html(gotWrong);

    //Declared a function to call to show questions and answers to update html elements.
    function displayQuestion() {
        $('#question').html(show.question);
        $('#answer1').html(show.answer1);
        $('#answer2').html(show.answer2);
        $('#answer3').html(show.answer3);
        $('#answer4').html(show.answer4);
        startGame();
    };

    // Declared a on click function to invoke the checkAnswer function when answer is selected.
    $('#answer1').on('click', function () {
        console.log('a');
        checkAnswer(show.answer1);

    });
    $('#answer2').on('click', function () {
        console.log('b');
        checkAnswer(show.answer2);


    });
    $('#answer3').on('click', function () {
        console.log('c');
        checkAnswer(show.answer3);

    });
    $('#answer4').on('click', function () {
        console.log('d');
        checkAnswer(show.answer4);

    });

    //Declared a nextQuestion function to display next question after answer is selected.
    function nextQuestion() {
        index++
        if (index < trivia.length) {
            show = trivia[index];
            displayQuestion();
        } else {
            $("#quiz-container").hide();
            $("#scoreContainer").show();
            clearInterval(intervalID);
            // $("#restart").show();
        }

    };

    //Declared a checkAnswer function to check  if answer selected is correct or wrong
    // aconditionals when answer is selected.
    //Invokes the nextQuestion function
    function checkAnswer(answer) {
        if (answer === show.correct) {
            gotRight++;
            $('#gotCorrect').html(gotRight);
            console.log('Got ' + gotRight + 'Right!');
            // alert('Winner!');
            nextQuestion()

        }
        else {
            gotWrong++;
            $('#gotWrong').html(gotWrong);
            console.log('Got ' + gotWrong + 'Wrong!');
            // alert('Lose!!');
            nextQuestion()
        }
    }

    //Declared a on click function assigned to the start button.
    //Invokes the startGame function 
    $('#start').on('click', function () {
        $(this).hide();
        $("#start-quiz").hide();
        $("#quiz-container").show();
        startGame();
    });

    // Declared a global variable intervalID
    var intervalID;
    //Declared funciton cl
    function startGame() {
        timer = 10;
        clearInterval(intervalID);
        intervalID = setInterval(function () {
            
            timer--;
            $('#timer').html('Time remaining: ' + timer + ' seconds');
            if (timer === 0) {
                gotWrong++;
                $('#gotWrong').html(gotWrong);
                clearInterval(intervalID);
                
                nextQuestion();
            }
        }, 1000);
    }
    
    
    //TROUBLESHOOT RESTART BUTTON - Questions do not start from index 0
    // index stats from 9 the goes to 1 skipping 0. 
    
    // $('#restart').on('click', function (){
    //     $(this).hide();
    //      show = trivia[0];
    //      index=0;
    //      gotRight = 0;
    //      gotWrong = 0;
         
    //     $('#start').show();
    //     $("#start-quiz").show();
    //     $("#quiz-container").hide();
    //     $("#scoreContainer").hide();
    //     $('#timer').hide();
    //     //  clearInterval(intervalID);
    //     $('#gotCorrect').html(gotRight);
    //     $('#gotWrong').html(gotWrong);
    //     // nextQuestion();
    // })
    
    //function is called to display questions and answers on the browser window.
    
    displayQuestion();


});