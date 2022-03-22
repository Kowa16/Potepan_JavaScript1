 
let display = document.getElementById('display');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
  
let startTime;
let millisecond = 0;
let second = 0;
let tensecond = 0;
let hundred = 0;
//リスタート機能の追加
function timer(){
    millisecond++;

	if (millisecond / 10 == 1){
		second++;
		millisecond = 0;
		 　　if(second / 10 == 1){
            　　tensecond++;
				second = 0;
				　　if(tensecond / 10 == 1){
					 　hundred++;
					 　tensecond 	= 0;
				 　　}
		 　　}
	 }
 display.innerHTML= hundred + ":" + tensecond + ":" + second + ":" + millisecond;
};


//スタートボタン
document.getElementById('start').onclick = function startButton(button){
  startTime = setInterval(timer,100);
	document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = true;
};

//ストップボタン
document.getElementById('stop').onclick = function stopButton(button){
  clearInterval(startTime);
	document.getElementById('stop').onclick
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = false;
};

//リセットボタン
document.getElementById('reset').onclick = function buttonC(buttton){
	millisecond = 0;
    second = 0;
    tensecond = 0;
    hundred = 0;
	display.innerHTML= hundred + ":" + tensecond + ":" + second + ":" + millisecond;
	document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("reset").disabled = true;
}
