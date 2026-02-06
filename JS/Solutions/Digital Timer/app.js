"use strict";

// DIGITAL TIMER
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function clock() {
  let now = new Date();
  let Year = now.getFullYear();
  let Month = now.getMonth();
  let Day = now.getDay();
  let Dates = now.getDate();
  let Hour = now.getHours();
  let Minute = now.getMinutes();
  let Second = now.getSeconds();

  year.innerHTML = Year;
  month.innerHTML = Month;
  day.innerHTML = Day;
  date.innerHTML = Dates;
  hour.innerHTML = Hour;
  minute.innerHTML = Minute;
  second.innerHTML = Second;

  switch (Month) {
    case 0:
      month.innerHTML = "January";
      break;
    case 1:
      month.innerHTML = "Februay";
      break;
    case 2:
      month.innerHTML = "March";
      break;
    case 3:
      month.innerHTML = "April";
      break;
    case 4:
      month.innerHTML = "May";
      break;
    case 5:
      month.innerHTML = "June";
      break;
    case 6:
      month.innerHTML = "July";
      break;
    case 7:
      month.innerHTML = "August";
      break;
    case 8:
      month.innerHTML = "September";
      break;
    case 9:
      month.innerHTML = "October";
      break;
    case 10:
      month.innerHTML = "November";
      break;
    case 11:
      month.innerHTML = "December";
      break;

    default:
      break;
  }

  switch (Day) {
    case 0:
      day.innerHTML = "Sunday";
      break;
    case 1:
      day.innerHTML = "Monday";
      break;
    case 2:
      day.innerHTML = "Tuesday";
      break;
    case 3:
      day.innerHTML = "Wednesday";
      break;
    case 4:
      day.innerHTML = "Thursday";
      break;
    case 5:
      day.innerHTML = "Friday";
      break;
    case 6:
      day.innerHTML = "Saturday";
      break;

    default:
      break;
  }
}

setInterval(clock, 1000);
