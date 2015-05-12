var tessel = require('tessel');

var Npx = require('npx');
var npx = new Npx(56);


var animation = npx.newAnimation(60);

// array of random colors
colorArray = ['#890000','#003180','#6a6700','#004455', '#11be0b', '#7006c1', '#020401'];

var a = npx.newAnimation(1);
// create animation by shuffling colors
var start = new Date().getTime()
for (i = 0; i < 60; i++) {
	console.log(i);
	a.setPixel(0, '#890000');
	// animation.setAll('#890000');
	// .setAll('#890000');
  // animation.setPattern(shuffle(colorArray), i);
}
animations.forEach(function(a, index) {
	console.log(index);
	a.setAll('#890000');
});
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);

// shuffle the colors and animate the pattern
setInterval(function(){

  //animation.setPattern(shuffle(colorArray));
  npx.play(animation);
  console.log('playing');

},100)

// shuffle the array
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}