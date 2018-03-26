// press start button 
// mc question appears on screen with 30 second timer 
// no user input makes it move to next question (behind the scenes timer)

// function on start opens first question and begins countdown
// on hover the buttons look like start button 
// on click if its correct move on and say correct
// on click if its incorrect move on and say incorrect
// if timer runs out say timer ran out and move on 
// make the questions nested objects? 

/* Start Javascript*/

$(document).ready(function(){
    $("#questionAnswer").hide();
    $(".button").hide();
    $("#winner").hide();
    $("#loser").hide();

var questions = [{
    question: "What is the world's largest island?",
    AnswerA: "Greenland",
    AnswerB: "Jamaica",
    AnswerC: "Australia",
    AnswerD: "Cuba",
    correct: "Greenland"
},
 {
    question: "What is the main industry of Fiji?",
    AnswerA: "Farming",
    AnswerB: "Finance",
    AnswerC: "Sugar Cane Processing",
    AnswerD: "Surfing",
    correct: "Sugar Cane Processing"
},
{
    question: "Question3",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
    correct: "AnswerD"
},
 {
    question: "Question4",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
    correct: "AnswerA"
},
{
    question: "Question5",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
    correct: "AnswerB"
},
{
    question: "Question6",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
    correct: "AnswerB"
},
 {
    question: "Question7",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
    correct: "AnswerD"
},
{
    question: "Question8",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
    correct: "AnswerA"
}];

var number = 30;

$("#start-button").on("click", function() {
    $("#start-button").hide();
    $("#questionAnswer").show();
    $(".button").show();

    intervalID  = setInterval (decrement, 1000);
    function decrement (){
        number--;
     console.log(number);
     $("#display").html( "Time Remaining:" + number);  
    }


       var i = Math.floor(Math.random () * 8);


     console.log(i);
function questionText () {
    $("#display").html( "Time Remaining:" + number);  
    $("#question").text(questions[i].question);  
    $("#optionA").text(questions[i].AnswerA);  
    $("#optionB").text(questions[i].AnswerB);
    $("#optionC").text(questions[i].AnswerC);
    $("#optionD").text(questions[i].AnswerD);
}

questionText (i);

$("button").on("click", function () {  
 
    if(this.innerHTML === questions[i].correct){
            $("#questionAnswer").hide();
            $(".button").hide();
            $("#question").hide();
            $("#winner").show();
            setTimeout (nextQuestion, 3000);
            function nextQuestion () {
                i = Math.floor(Math.random () * 8);
                console.log(i);
                questionText (i);
                number = 30;
                $("#winner").hide();
                $("#loser").hide();
                $("#questionAnswer").show();
            $(".button").show();
            $("#question").show();
            }
    
        } else if (this.innerHTML !== questions[i].correct){
            $("#questionAnswer").hide();
            $(".button").hide();
            $("#question").hide();
            $("#loser").show();
            setTimeout (nextQuestion, 3000);
            function nextQuestion () {
                i = Math.floor(Math.random () * 8);
                console.log(i);
                questionText (i);
                number = 30;
                $("#winner").hide();
                $("#loser").hide();
                $("#questionAnswer").show();
            $(".button").show();
            $("#question").show();
            }
        }


})

// }


})

})

    

      
  


/* End Javascript*/