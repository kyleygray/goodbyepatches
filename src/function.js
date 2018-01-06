var countDownDate = new Date("Apr 6, 2018 10:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  var dayEl = "<span class='dnum'> " + days + "</span><span class='dchar'>d</span>";
  var hourEl = "<span class='hnum'> " + hours + "</span><span class='hchar'>h</span>";
  var minEl = "<span class='mnum'> " + minutes + "</span><span class='mchar'>m</span>";
  var secEl = "<span class='snum'> " + seconds + "</span><span class='schar'>s</span>";

  document.getElementById("countdown").innerHTML= dayEl + hourEl + minEl + secEl;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "FINALLY WE ARE FREE!";
  }
}, 1000);
