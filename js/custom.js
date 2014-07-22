$(document).ready(init);


function init() {
    var count = new Date();
 
    var timer;
    
    $( "#startbtn" ).click(function () {
  
        // Check the current style of the button
        if ( $("#startbtn").hasClass("start")) {
            count.setSeconds(0);
            count.setMinutes(25);
            timer = setTimeout(function(){cycle()}, 1000);
        } else {
            count.setSeconds(0);
            count.setMinutes(25);
            clearTimeout(timer);
            $( "#counter" ).text(count.toLocaleTimeString().slice(3));
            $( "#startbtn").text("Start again");
            $( "#startbtn" ).removeClass("btn-danger");
            $( "#startbtn" ).addClass("btn-primary");
        }
            $( "#startbtn" ).toggleClass("start");
            $( "#startbtn" ).toggleClass("running");
        
        function cycle() {
            count.setTime(count.getTime() - 1000);
            
            // display to counter
            $( "#counter" ).text(count.toLocaleTimeString().slice(3));
                        
            if (count.getMinutes() > 0 || count.getSeconds() > 0) {
                timer = setTimeout(function(){cycle()}, 1000);
                $( "#startbtn").text("Stop");
                $( "#startbtn" ).removeClass("btn-primary");   
                $( "#startbtn" ).addClass("btn-danger");   
            } else {
                clearTimeout(timer);
                $( "#startbtn").text("Start again");
                $( "#startbtn" ).removeClass("btn-danger");
                $( "#startbtn" ).addClass("btn-primary");
                $( "#startbtn" ).toggleClass("start");
                $( "#startbtn" ).toggleClass("running");
                console.log($( "#startbtn" ).hasClass("start"));
            }

        }        
    });    


}
