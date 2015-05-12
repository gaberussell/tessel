var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['B']);
ambient.pollingFrequency = 50;

ambient.on('ready', function() {
  var d = new Date();
  var curTime = d.getTime();

  ambient.on('light', function(lightData){
    var d = new Date();
    var newTime = d.getTime();
    var startTime = curTime;
    var range = newTime - startTime;
    var step = range / 10;

    console.log("New batch reading, step is ", step);

    for (var i = 0; i < 10; i++) {
      sampleTime = startTime + step * i;
      console.log('sampleTime = ', sampleTime, "lightReading = ", lightData[i]);
    }

    //console.log('Light data, buffer method: ' + lightData);

    curTime = newTime;
  });

});
  /*
  setInterval(function(){
    ambient.getLightLevel(function(err, ldata){
      if(err) throw err;
      console.log("Light level:", ldata.toFixed(8));
      ambient.getSoundLevel(function(err, sdata) {
        if(err) throw err;
        //console.log("Light level:", ldata.toFixed(8), " ", "Sound Level:", sdata.toFixed(8));
      });
    });
  }, 50);

  ambient.on('sound', function(soundData){
    console.log('sound data, buffer method: ' + soundData);
  });


  ambient.setLightTrigger(0.02);

  ambient.on('light-trigger', function(data){
      console.log('Light trigger hit: ', data);
      ambient.clearLightTrigger();
      setTimeout(function() {
        ambient.setLightTrigger(0.5);
      },1500);
  });

  ambient.setSoundTrigger(0.05);

  ambient.on('sound-trigger', function(data){
    console.log('Sound trigger hit: ', data);
    ambient.clearSoundTrigger();
    setTimeout(function(){
      ambient.setSoundTrigger(0.1);
    },500);
  });



ambient.on('error', function(err) {
  console.log(err);
})
*/
