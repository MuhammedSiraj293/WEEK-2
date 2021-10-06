//Set global variable that would contain the position, velocity and the html element "ball"
var velocity=50;
var positionx=0;
var positiony=0;
var reverse=true;
var ball = document.getElementById('ball');
//write a function that can change the position of the html element "ball"
function moveBall() {
  var xmin=0;
  var xmax=500;
if (reverse===true){
  positionx=positionx+velocity;
  ball.style.left=positionx+'px';
  positiony=positiony+velocity;
  ball.style.top=positionx+'px';
  if (positionx>=xmax)
  {
    reverse=false;
  }
  }

    else{
      positionx=positionx-velocity;
      ball.style.left=positionx+'px';
      positiony=positiony-velocity;
      ball.style.top=positionx+'px';
       if (positionx===xmin)
        {
         reverse=true;
         }
}

}

  // two fixed x-axis coordinates (you will use these variable in step 3)
  
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
