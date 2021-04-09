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


// Need function to store saved "to-dos" in local storage:
// localStorage.getItem("count"); 
// local storage.setItem ??? 