var secret = "38384040373937396665";
var input = "";
var timer;
var mode = false;
var audio = new Audio('contra.mp3');

$(document).keyup(function(e) {
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 800);
    
    check_input();
});

function check_input() {
    if(input == secret) {
        audio.play(); }
    }