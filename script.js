
(function (window) {
  var ass4names = {};
  ass4names.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
for (var i=0 ; i < ass4names.names.length; i++){
  var str = ass4names.names[i];
  var firstLetter = str.charAt(0);
  var res = firstLetter.toLowerCase();
  if (res == "j"){
  byeSpeaker.speak(ass4names.names[i]);
  }else{
  helloSpeaker.speak(ass4names.names[i]); 
  }
}
})(window);


