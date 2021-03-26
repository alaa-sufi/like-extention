var time =0;
var interval = setInterval(function() { 
    if (time  <20) {
       console.log(time+1,"lolo");
       time++;
    }
    else { 
       clearInterval(interval);
        console.log("done lolo");
    }
 }, 2000);