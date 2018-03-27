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
    question: "Great Britian is the world's ______ largest island",
    AnswerA: "6th",
    AnswerB: "7th",
    AnswerC: "8th",
    AnswerD: "9th",
    correct: "9th"
},
 {
    question: "Hawaii became a state in________.",
    AnswerA: "1959",
    AnswerB: "1969",
    AnswerC: "1949",
    AnswerD: "1939",
    correct: "1959"
},
{
    question: "There are ___ islands in Hawaii",
    AnswerA: "7",
    AnswerB: "8",
    AnswerC: "9",
    AnswerD: "10",
    correct: "8"
},
{
    question: "Bora Bora is a part of which country?",
    AnswerA: "Polynesia",
    AnswerB: "France",
    AnswerC: "The Netherlands",
    AnswerD: "New Zealand",
    correct: "France"
},
 {
    question: "St. Maartin is split between which two countries?",
    AnswerA: "France and Germany",
    AnswerB: "Germany and England",
    AnswerC: "France and The Netherlands",
    AnswerD: "The Netherlands and Belgium",
    correct: "France and The Netherlands"
},
{
    question: "Jamaica is home to how many different species of Orchids?",
    AnswerA: "200",
    AnswerB: "300",
    AnswerC: "400",
    AnswerD: "500",
    correct: "200"
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