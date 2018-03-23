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
    $("#winner").hide();
    $("#loser").hide();
        
$("#start-button").on("click", function() {
    $("#start-button").hide();
    $("#questionAnswer").show();


var question1 = {
    question: "Question1",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}

var question2 = {
    question: "Question2",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
var question3 = {
    question: "Question3",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
var question4 = {
    question: "Question4",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
var question5 = {
    question: "Question5",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
var question6 = {
    question: "Question6",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
var question7 = {
    question: "Question7",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
var question8 = {
    question: "Question8",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}
    var question = question1.question;
    var optionA = question1.AnswerA;
    var optionB = question1.AnswerB;
    var optionC = question1.AnswerC;
    var optionD = question1.AnswerD;
    var number = 30;
    
    $("#display").html(number);  
    $("#question").html(question);  
    $("#optionA").html(optionA);  
    $("#optionB").html(optionB);
    $("#optionC").html(optionC);
    $("#optionD").html(optionD);

    intervalID  = setInterval (decrement, 1000);
    function decrement (){
        number--;
        console.log(number);
        $("#display").html(number);  
        $("#question").html(question);  
        $("#optionA").html(optionA);  
        $("#optionB").html(optionB);
        $("#optionC").html(optionC);
        $("#optionD").html(optionD);
            }
    $("#optionA").on("click", function () {
        $("#questionAnswer").hide();
        $("#winner").show();
        
    })        
    
    
    
        })
    
    
})


/* End Javascript*/