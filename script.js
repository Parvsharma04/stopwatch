const container = document.getElementById('container');
const timeSpan = document.createElement('span');

const hours = document.createElement('span');
const minutes = document.createElement('span');
const seconds = document.createElement('span');

hours.className = "hours"
minutes.className = "minutes"
seconds.className = "seconds"

const buttons =  document.createElement('div');
const start =  document.createElement('button');
const stop =  document.createElement('button');
const reset =  document.createElement('button');

start.className = "start"
stop.className = "stop"
reset.className = "reset"

start.innerText = "Start";
stop.innerText = "Stop";
reset.innerText = "Reset";

buttons.append(start)
buttons.append(stop)
buttons.append(reset)

let interval;
let state = false

function startTime(e){
  state = true;
  let ref = e.target.parentNode.parentNode.childNodes[1].childNodes;
  let hrsRef = ref[0];
  let minsRef = ref[2];
  let secsRef = ref[4];

  let hrs = hrsRef.innerText;
  let mins = minsRef.innerText;
  let secs = secsRef.innerText;

  interval = setInterval(()=>{
    if(secs == 59){
      secs = 0;
      mins++;
      minsRef.innerText = (mins < 10) ? "0" + mins : mins;
    }
    if(mins == 59){
      mins = 0;
      hrs++;
      minsRef.innerText = (mins < 10) ? "0" + mins : mins;
      hrsRef.innerText = (hrs < 10) ? "0" + hrs : hrs;
    }
    secsRef.innerText = (++secs < 10) ? "0" + secs : secs;
  }, 10)
}

function stopTime(){
  state = false;
  clearInterval(interval);
}

function resetTime(e){
  state ? stopTime() : state; 
  state = false
  let ref = e.target.parentNode.parentNode.childNodes[1].childNodes;
  let hrsRef = ref[0];
  let minsRef = ref[2];
  let secsRef = ref[4];  
  
  hrsRef.innerText = "00"
  minsRef.innerText = "00"
  secsRef.innerText = "00"
}

function render(){
  hours.innerText = "00"
  minutes.innerText = "00"
  seconds.innerText = "00"

  timeSpan.append(hours);
  timeSpan.innerHTML += " : ";
  timeSpan.append(minutes);
  timeSpan.innerHTML += " : ";
  timeSpan.append(seconds);
  
  start.addEventListener("click", startTime)
  stop.addEventListener("click", stopTime)
  reset.addEventListener("click", resetTime)

  container.append(timeSpan)
  container.append(buttons)
}
 
render()
