(function(){
  
  let timer = document.getElementById('timer');
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let reset = document.getElementById('reset');
  
  let startTime;
  
  let elapsedTime = 0;
  
  let timerId;
  
  let timeToadd = 0 ;
  
function updateTimeText(){

  let minutes = Math.floor(elapsedTime / 60000);
  
  let second = Math.floor(elapsedTime % 60000 / 1000);
  
  let milliSecond = Math.floor(elapsedTime % 1000);
  
  minutes = ('0'+ minutes).slice(-2);
  second = ('0' + second).slice(-2);
  milliSecond = ('0' + milliSecond).slice(-2)

  timer.textContent = minutes + ':' + second + ':' + milliSecond;
  
}
  
function countUp(){

  timerId = setTimeout(function(){
    
    elapsedTime = Date.now() - startTime + timeToadd;
    updateTimeText()
    
    countUp();
  },10);  
}

document.getElementById("start").disabled = false;
document.getElementById("stop").disabled = true;
document.getElementById("reset").disabled = true;

document.getElementById('start').onclick = function(){
  startTime = Date.now();
  countUp();
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = true;
};

document.getElementById('stop').onclick = function(){
  clearTimeout(timerId);
  timeToadd += Date.now() + startTime;
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = false;
};

document.getElementById('reset').onclick = function(){
  elapsedTime = 0;
  timeToadd = 0;
  updateTimeText();
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = true;
};

})();