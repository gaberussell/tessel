var tessel = require('tessel');

var ambientlib = require('ambient-attx4');
var ambient = ambientlib.use(tessel.port['B']);

var Neopixels = require('neopixels');
var neopixels = new Neopixels();

// prebuild the buffer because this isn't fast
tracerBuffer = Buffer.concat(tracer(56))

// attach the animate function to the sound trigger
ambient.on('ready', function(){
  console.log('Ready');
  ambient.setSoundTrigger(0.07);
  ambient.on('sound-trigger', function(data){
    console.log('sound trigger');
    neopixels.animate(56, tracerBuffer);
    ambient.clearSoundTrigger();
    setTimeout(function(){
      ambient.setSoundTrigger(0.07);
    },50);
  });
});

// build the tracer buffer
function tracer(numLEDs) {
  console.log('building tracer');
  var trail = 5;
  var arr = new Array(numLEDs);
  // for each LED
  for (var i = 0; i < numLEDs; i++) {
    // create a buffer for 3 RGB hex values ?
    var buf = new Buffer(numLEDs * 3);
    buf.fill(0);

    // for each RGB value ?
    for (var col = 0; col < 3; col++){
      // for each pixel in the "trail"?
      for (var k = 0; k < trail; k++) {
        // barf
        buf[(3*(i+numLEDs*col/3)+col+1 +3*k)] = 0xFF*(trail-k)/trail;
      }
    }
    arr[i] = buf;
  }
  console.log('returning tracer');
  return arr;
}
