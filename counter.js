var counter = 0;
var timer;
var sec = 0;
var isLaunched = false;

function start(){
  isLaunched = true;
    timer = setInterval(()=>{
      document.getElementById("timer").innerHTML = +sec;
      sec ++;
    });
    document.getElementById("startButton").disabled = true;
  
}

function counterFunction(){

  if(counter < 20 && isLaunched){
      document.getElementById("counterOfClicks").innerHTML = ++counter;
      counter = counter;
  }
  else{
    clearInterval(timer);
  }
}

function pause(){
    isLaunched = false;
    clearInterval(timer); // to check if the clear interval works
  
}

function reload(){
  window.location.reload();
}
