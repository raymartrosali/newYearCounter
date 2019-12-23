let getDays = document.querySelector("#days");
let getHour = document.querySelector("#hours");
let getMin = document.querySelector("#minutes");
let getSec = document.querySelector("#seconds");

let sourceDate = new Date();
let todayDate = sourceDate.getDate();
let yearDate = sourceDate.getFullYear();
let hourDate = sourceDate.getHours();
let minDate = sourceDate.getMinutes();
let secDate = sourceDate.getSeconds();

let timerDays = 31 - todayDate;
let timerHour = 23 - hourDate;
let timerMin = 59 - minDate;
let timerSec = 60 - secDate;
if(timerDays < 10){
  timerDays = "0" + timerDays;
}
if(timerHour < 10){
  timerHour = "0" + timerHour;
}
if(timerMin < 10){
  timerMin = "0" + timerMin;
}
if(timerSec < 10){
  timerSec = "0" + timerSec;
}
if (yearDate == 2020) {
    getDays.innerHTML = "00";
    getHour.innerHTML = "00";
    getMin.innerHTML = "00";
    getSec.innerHTML = "00";
}else{
    getDays.innerHTML = timerDays; 
    getHour.innerHTML = timerHour;
    getMin.innerHTML = timerMin;
    getSec.innerHTML = timerSec;
}
setInterval(function(){
  sourceDate = new Date();
  todayDate = sourceDate.getDate();
  yearDate = sourceDate.getFullYear();
  minDate = sourceDate.getMinutes();
  hourDate = sourceDate.getHours();
  minDate = sourceDate.getMinutes();
  secDate = sourceDate.getSeconds();
  
  timerDays = 31 - todayDate;
  timerHour = 23 - hourDate;
  timerMin = 59 - minDate;
  timerSec = 60 - secDate;
  if(timerDays < 10){
    timerDays = "0" + timerDays;
  }
  if(timerHour < 10){
    timerHour = "0" + timerHour;
  }
  if(timerMin < 10){
    timerMin = "0" + timerMin;
  }
  if(timerSec < 10){
    timerSec = "0" + timerSec;
  }
  if (yearDate == 2020) {

  }else{
       getDays.innerHTML = timerDays; 
       getHour.innerHTML = timerHour;
       getMin.innerHTML = timerMin;
       getSec.innerHTML = timerSec;
  }


}, 1000);
