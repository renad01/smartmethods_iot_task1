// get output div reference
var output = document.getElementById("output");
 // get action element reference
 var start = document.getElementById("start");
 var stop = document.getElementById("stop");
 var language_Rec = document.getElementById("language_Rec");
  // new speech recognition object
 var speechRecognition = speechRecognition || webkitSpeechRecognition;
 var recognizer = new speechRecognition();
//Language
 recognizer.lang = 'ar';

 language_Rec.onchange = function() {
     recognizer.lang = language_Rec.value;
 }

// Start&Stop recognition
 start.onclick = function() {
     recognizer.start();
 }
 stop.onclick = function() {
     recognizer.stop();
 }
 recognizer.onspeechend = function() {
     stop.click();
 }
 // This runs when the speech recognition service returns result
 recognizer.onresult = function(event) {
     var Textbox = event.results[0][0].transcript;
     output.value = Textbox;
 }
