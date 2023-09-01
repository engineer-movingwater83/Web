'use strict'; // let's assume that this is mandatory

let testVar = 0; // let's use keyword 'let' instead of using 'var'

//jQuery Class Code
$(document).ready(function(){ //start of jQuery
    $('div').html('This div tag is written by jQuery');
    $('#testId').html('This testId is written by jQuery');
    
    $('.testClass').html('This testClass is written by jQuery'); // in case of access html class
    $('.testClass').css('color', 'red');
    $('.testBtn').on('click', function() {
        alert("Btn Clicked " + testVar);
    });
    //JavaScript Code
    setInterval( () => 
        {
            testVar++;

            //jQuery 
            $('.testBtn').html('Button '+testVar);
        }, 
        2000
    );
 });