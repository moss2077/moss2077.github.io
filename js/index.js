var pages = document.querySelector('.pages');
var locale = window.navigator.language || 'en-us';

var date = new Date();
var dayNum = date.getDate();
var month = date.getMonth();
var dayName = date.toLocaleString(locale, { weekday: 'long' });
var monthName = date.toLocaleString(locale, { month: 'long' });
var year = date.getFullYear();

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getNewDate() {
  if (dayNum < daysInMonth(month, year)) {
    dayNum++;
  } else {
    dayNum = 1;
  }
  if (dayNum === 1 && month < 11) {
    month++;
  } else if (dayNum === 1 && month === 11) {
    month = 0;
  }
  if (dayNum === 1 && month === 0) {
    year++;
  }
  var newDate = new Date(year, month, dayNum);
  dayName = newDate.toLocaleString('en-us', { weekday: 'long' });
  monthName = newDate.toLocaleString('en-us', { month: 'long' });
}

function handleClick(e) {
  getNewDate();
  updateCalendar(e.target);
}

function updateCalendar(target) {
  if (target && target.classList.contains('page')) {
    target.classList.add('tear');
    setTimeout(function () {
      pages.removeChild(target);
    }, 800);
  } else {
    return;
  }
  renderPage();
}

function renderPage() {
  var newPage = document.createElement('div');
  newPage.classList.add('page');
  newPage.innerHTML = '\n    <p class="month">' +
  monthName + '</p>\n    <p class="day">' +
  dayNum + '</p>\n    <p class="day-name">' +
  dayName + '</p>\n    <p class="year">' +
  year + '</p>\n  ';

  pages.appendChild(newPage);
}

renderPage();

pages.addEventListener('click', handleClick);