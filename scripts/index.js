const time = document.getElementById('time');
const date = document.getElementById('date');

const months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
}

function getTime() {
  let today = new Date();

  let hours = ('0' + today.getHours()).slice(-2);
  let minutes = ('0' + today.getMinutes()).slice(-2);
  let seconds = ('0' + today.getSeconds()).slice(-2);

  let month = (months[today.getMonth()]);
  let day = (today.getDate());
  let year = today.getFullYear();

  console.log(month)
  console.log(day)
  console.log(year)
  time.innerText = hours + ':' + minutes + ':' + seconds;
  date.innerText = month + ' ' + day + ' ' + year;
}


getTime()
setInterval(getTime, 1000);