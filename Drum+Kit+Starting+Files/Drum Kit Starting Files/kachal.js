// function add(num1, num2){
//   return num1 + num2;
// }
// function multiply(num1, num2){
//   return num1 * num2;
// }
// function divide(num1, num2){
//   return num1 / num2;
// }
// function subtract(num1, num2){
//   return num1 - num2;
// }
// function calculator(num1, num2, operator){
//   return operator(num1, num2);
// }

function anotherAddEventListener(typeOfEvent, callback) {
  // Detect the event
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener("keypress", function (event) {
  console.log(event);
});

document.addEventListener("keypress", function (event) {
  console.log(event);
});

/*...Constructive function for Audio Function...*/
// function Audio(fileLocation){
//   this.fileLocation = fileLocation;
//   this.play = function(){
//     // Tap into the audio hardware
//     // Check the file at fileLocation exists
//     // Check the file at filelocation is a sound file
//     // Play the fioe at fileLocation
//   }
// }
