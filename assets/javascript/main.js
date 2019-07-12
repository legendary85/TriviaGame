

// variable set to update the innerHTML of elements
const start = document.getElementById("start-quiz");

const quiz = document.getElementById("quiz-container");

const question = document.getElementById("question");

const answer1 = document.getElementById("answer1");

const answer2 = document.getElementById("answer2");

const answer3 = document.getElementById("answer3");

const answer4 = document.getElementById("answer4");

const timer = document.getElementById("timer");

//questions are inside of an array
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
        
    },{
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


var lastQuestionIndex = o.question.length - 1;
var runningQuestionIndex = 0;

function renderQ

// $('#answer1').on('click',function(){
//     console.log('a');
//     checkAnswer(show.answer1);
// });
// $('#answer2').on('click',function(){
//     console.log('b');
//     checkAnswer(show.answer2);
// });
// $('#answer3').on('click',function(){
//     console.log('c');
//     checkAnswer(show.answer3);
// });
// $('#answer4').on('click',function(){
//     console.log('d');
//     checkAnswer(show.answer4);
// });


//set function to display next question after answer is selected.
function nextQuestion(){
    index++;
    show= trivia[index];
    displayQuestion();
};




//set a function to check conditionals when answer is selected.
function checkAnswer(answer){
    if(answer===show.correct){
        gotRight++;
        console.log('Got ' + gotRight + 'Right!');
        alert('Winner!');
        nextQuestion()
    }
    else{
        gotWrong++;
        console.log('Got ' + gotWrong + 'Wrong!');
        alert('Lose!!');
        nextQuestion()
    }
}
