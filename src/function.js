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

$("#board").click(function(e) {
  console.log("clicked");

  var voice = new Audio('img/patches.ogg');
  voice.volume = 0.6;
  voice.play();

  $("#clickhere").remove();

  var x = e.pageX;
  var y = e.pageY;

  var patches = createPatches();
  $("#hook").append(patches);
  $(patches).animate({
    left: x + "px",
    top: y + "px",
  }, 500).animate({
    left: "51%",
    top: "17%",
  }, 300, function() {
    console.log(this);
    $(patches).remove();
    var boom = new Audio('img/explosion.ogg');
    boom.play();
    boom.volume = 0.4;
    var explosion = createExplosion();
    explosion.classList.add("explosion");
    $("#hook").append(explosion);
    setTimeout(function(){
      explosion.remove();
    }, 1000);
  });
});

function createPatches() {
  var patches = document.createElement("div");
  patches.classList.add("patches");
  var img = document.createElement("img");
  img.src = "img/patches.png";
  patches.appendChild(img);

  return patches;
}

function createExplosion() {
  var explosion = document.createElement("img");
  explosion.src = "img/explosion.gif?x=" + Math.round(Math.random()*1000);

  return explosion;
}
