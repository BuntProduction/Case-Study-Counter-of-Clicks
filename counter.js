var counter = 0;
var timer;
var sec = 0;
var isLauched = false;
function start(){
  isLauched = true;
    timer = setInterval(()=>{
      document.getElementById("timer").innerHTML = +sec;
      sec ++;
    });
    document.getElementById("startButton").disabled = true;
  
}

function counterFunction(){

  if(counter < 20 && isLauched){
      document.getElementById("counterOfClicks").innerHTML = ++counter;
      counter = counter;
  }
  else{
    clearInterval(timer);
  }
}

function pause(){
    isLauched = false;
    clearInterval(timer); // to check if the clear interval works
  
}

function reload(){
  window.location.reload();
}
