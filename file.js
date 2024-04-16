function myFunction() {
  window.onbeforeunload  = function() {return "Dude, are you sure you want to leave? Think of the kittens!";}
  console.log('myFunction');
}

function disposeMyFunction() {
  window.onbeforeunload  = function() {return null;}
  console.log('disposeMyFunction');
}