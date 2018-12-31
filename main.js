let getHour = document.querySelector("#hours");
let getMin = document.querySelector("#minutes");
let getSec = document.querySelector("#seconds");

let sourceDate = new Date();
let todayDate = sourceDate.getDate();
let yearDate = sourceDate.getFullYear();
let hourDate = sourceDate.getHours();
let minDate = sourceDate.getMinutes();
let secDate = sourceDate.getSeconds();

let timerHour = 23 - hourDate;
let timerMin = 59 - minDate;
let timerSec = 60 - secDate;
if(timerHour < 10){
  timerHour = "0" + timerHour;
}
if(timerMin < 10){
  timerMin = "0" + timerMin;
}
if(timerSec < 10){
  timerSec = "0" + timerSec;
}
getHour.innerHTML = timerHour;
getMin.innerHTML = timerMin;
getSec.innerHTML = timerSec;
setInterval(function(){
  sourceDate = new Date();
  yearDate = sourceDate.getFullYear();
  minDate = sourceDate.getMinutes();
  hourDate = sourceDate.getHours();
  minDate = sourceDate.getMinutes();
  secDate = sourceDate.getSeconds();
  
  timerHour = 23 - hourDate;
  timerMin = 59 - minDate;
  timerSec = 60 - secDate;
  if(timerHour < 10){
    timerHour = "0" + timerHour;
  }
  if(timerMin < 10){
    timerMin = "0" + timerMin;
  }
  if(timerSec < 10){
    timerSec = "0" + timerSec;
  }
  if (yearDate == 2019) {

  }else{
      getHour.innerHTML = timerHour;
       getMin.innerHTML = timerMin;
       getSec.innerHTML = timerSec;
  }


}, 1000);
