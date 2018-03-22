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
        
$("#start-button").on("click", function() {
    $("#start-button").hide();
    $("#questionAnswer").show();
    
    var question = "FartButt";
    var optionA = 1;
    var optionB = 2;
    var optionC = 3;
    var optionD = 4;
    var number = 30;

    var questionHTML =
            "<h2>Time Remaining:" + number + "<h2>" +
            "<h1>" + question + "<h1>" +
            "<p>" + optionA + "<p>" +
            "<p>" + optionB + "<p>" +
            "<p>" + optionC + "<p>" +
            "<p>" + optionD + "<p>";
            $("#questionAnswer").html(questionHTML);  

// $("#start-button").on("click", number.start);
// function start () {
// clearInterval(intervalID);
// intervalID = setInterval(decrement, 1000);
// }
// function decrement () {
//     number--;

// questionHTML;
// console.log(number);
// }
    
    
    
    
})
})
    // function run() {

    //     clearInterval(intervalId);
    //     intervalId = setInterval(number.decrement, 1000);
    
    // function decrement (){
    //     number--;

//     var questionHTML =
//             "<h2>Time Remaining:" + number.run(); + "<h2>" +
//             "<h1>" + question + "<h1>" +
//             "<p>" + optionA + "<p>" +
//             "<p>" + optionB + "<p>" +
//             "<p>" + optionC + "<p>" +
//             "<p>" + optionD + "<p>";
//             $("#questionAnswer").html(questionHTML);  
// console.log(number);
        // }
        // }





/* End Javascript*/