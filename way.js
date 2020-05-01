const omiMouth = document.getElementById('omi-mouth');


document.getElementById('wee').addEventListener('click', function () {
  const wee = new Audio('https://omi-soundbytes.s3.amazonaws.com/Wee.m4a');
  talk(wee);
  wee.play();

});

document.getElementById('way').addEventListener('click', function () {
  const way = new Audio('https://omi-soundbytes.s3.amazonaws.com/Way.m4a');
  talk(way);
  way.play();
});

document.getElementById('say-way').addEventListener('click', function () {
  const sayWay = new Audio('https://omi-soundbytes.s3.amazonaws.com/Say+way.m4a');
  talk(sayWay);
  sayWay.play();
});

document.getElementById('say-wee').addEventListener('click', function () {
  const sayWee = new Audio('https://omi-soundbytes.s3.amazonaws.com/Say+wee.m4a');
  talk(sayWee);
  sayWee.play();
});

document.getElementById('suht').addEventListener('click', function () {
  const suht = new Audio('https://omi-soundbytes.s3.amazonaws.com/Suht.m4a');
  talk(suht);
  suht.play();
});

document.getElementById('way-yat').addEventListener('click', function () {
  const wayYat = new Audio('https://omi-soundbytes.s3.amazonaws.com/Way-yat!.m4a');
  talk(wayYat);
  wayYat.play();
});

const talk = function (audio) {
  omiMouth.style.transitionDuration = '0.3s';
  omiMouth.style.transform = 'translateY(15px)';
  header.style.transitionDuration = "0.1s";
  header.style.textShadow = "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00";
  console.log("talk");
  audio.onended = function () {
    omiMouth.style.transform = 'translateY(-0px)';
    header.style.textShadow = "none";
  }
}