export const Time = () => {
  return new Date().getTime();
}

function text2voice(message) {
  var speech = new SpeechSynthesisUtterance();
 
  //设置朗读内容和属性
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
 
  window.speechSynthesis.speak(speech);
}
