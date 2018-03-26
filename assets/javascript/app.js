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
},
 {
    question: "Question4",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
},
{
    question: "Question5",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
},
{
    question: "Question6",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
},
 {
    question: "Question7",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
},
{
    question: "Question8",
    AnswerA: "AnswerA",
    AnswerB: "AnswerB",
    AnswerC: "AnswerC",
    AnswerD: "AnswerD",
}];

var number = 30;

$("#start-button").on("click", function() {
    $("#start-button").hide();
    $("#questionAnswer").show();
    $(".button").show();

   

    for (var i = 0; i < questions.length; i++) {

    $("#display").html( "Time Remaining:" + number);  
    $("#question").text(questions[i].question);  
    $("#optionA").text(questions[i].AnswerA);  
    $("#optionB").text(questions[i].AnswerB);
    $("#optionC").text(questions[i].AnswerC);
    $("#optionD").text(questions[i].AnswerD);
    intervalID  = setInterval (decrement, 1000);
    function decrement (){
        number--;
     console.log(number);
     $("#display").html( "Time Remaining:" + number);  
    

}
    $("button").on("click", function () {  
    if(this.innerHTML === questions[i].correct){
            $("#questionAnswer").hide();
            $(".button").hide();
            $("#question").hide();
            $("#winner").show(); 
        } else if (this.innerHTML !== questions[i].correct){
            $("#questionAnswer").hide();
            $(".button").hide();
            $("#question").hide();
            $("#loser").show();
        } 
})

break;


}

})

})

    

      
  


/* End Javascript*/