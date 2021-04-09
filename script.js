var currentHour = moment().format('hh');
$('#currentDay')





function updateClock() {
    var day = moment().format("MMM Do YY");
    $("#currentTime").text(day);
  
}
updateClock();

var nineAM = $('#9amInput').val();

$("#9btn").on("click", function(){
    var nineAM = $("#9amInput").val();
    alert(nineAM);
});

var tenAM = $('#10amInput').val();

$("#10btn").on("click", function(){
    var nineAM = $("#10amInput").val();
    alert(tenAM);
});

var elevenAM = $('#11amInput').val();

$("#11btn").on("click", function(){
    var nineAM = $("#11amInput").val();
    alert(elevenAM);
});

var twelvePM = $('#12pmInput').val();

$("#12btn").on("click", function(){
    var twelvePM = $("#12pmInput").val();
    alert(twelvePM);
});

var onePM = $('#1pmInput').val();

$("#1btn").on("click", function(){
    var onePM = $("#1pmInput").val();
    alert(onePM);
});

var twoPM = $('#2pmInput').val();

$("#2btn").on("click", function(){
    var twoPM = $("#2pmInput").val();
    alert(twoPM);
});

var threePM = $('#3pmInput').val();

$("#3btn").on("click", function(){
    var nineAM = $("#3pmInput").val();
    alert(threePM);
});

var fourPM = $('#4pmInput').val();

$("#4btn").on("click", function(){
    var fourPM = $("#4pmInput").val();
    alert(fourPM);
});

var fivePM = $('#5pmInput').val();

$("#5btn").on("click", function(){
    var fivePM = $("#5pmInput").val();
    alert(fivePM);
});
// Need function to store saved "to-dos" in local storage:
// localStorage.getItem("count"); 
// local storage.setItem ??? 

// need a for loop to change time-slot BG color as day progresses 


// need event listener for save button 



// then, will store in local storage