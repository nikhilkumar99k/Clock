// var popupsound = document.getElementById("music");
// window.addEventListener('DOMContentLoaded', handler());
// function handler() {
//    popupsound.play(); //play the audio file
// }
//


setInterval(function() {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

  if (htime < 10)
    htime = `0${htime}`;
  if (mtime < 10)
    mtime = `0${mtime}`;
  if (stime < 10)
    stime = `0${stime}`;
  document.getElementById("hh").innerHTML = htime;
  document.getElementById("mi").innerHTML = mtime;
  document.getElementById("ss").innerHTML = stime;

  t_date=d.getDate();
  t_month=d.getMonth();
  t_year=d.getFullYear();

  if (t_date < 10)
    t_date = `0${t_date}`;
  if (t_month < 10)
    t_month = `0${t_month}`;
  document.getElementById("dd").innerHTML = t_date;
  document.getElementById("mm").innerHTML = t_month;
  document.getElementById("yyyy").innerHTML =t_year;

}, 1000);
