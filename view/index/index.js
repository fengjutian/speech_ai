const shellListArr = [
    {
        id:'',
        name: '',
        value: 'Hello world',
        speech: '',
        descripe: ''
    },
    {
        id:'',
        name: '',
        value: '中国',
        speech: '',
        descripe: ''
    },
    {
        id:'',
        name: '',
        value: 'zhongguo',
        speech: '',
        descripe: ''
    }
]

function render(){
    let shellList = document.querySelector('#shell-list'); 
    shellList.innerHTML = '';

    shellListArr.forEach(item => {
        shellList.innerHTML += addShell(item);
    })
}

window.onload = () => {
    render()
}

function addShell(item) {
    let template = `

        <p>${item.value}&nbsp;<button onclick="text2voice('${item.value}')">读音</button></p>

    `
    return template
}

function text2voice(message) {
  var speech = new SpeechSynthesisUtterance();
 
  //设置朗读内容和属性
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  console.log('window.speechSynthesis', window.speechSynthesis)
 
  window.speechSynthesis.speak(speech);
}


document.querySelector('#add-btn').addEventListener('click', () => {
    shellListArr.push({
        id:'',
        name: '',
        value: new Date().getTime(),
        speech: '',
        descripe: ''
    })

    render()
})


document.querySelector('#save-voice-btn').addEventListener('click', () => {
  try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
  } catch(e) {
    console.error(e);
  }

  recognition.onstart = function() { 
    instructions.text('语音识别功能激活！请对着麦克风讲话。');
  }
   
  recognition.onspeechend = function() {
    instructions.text('长时间未说话，已自动关闭录音。');
  }
   
  recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
      instructions.text('未检测到语音，请再试一次。');  
    };
  }

  recognition.onresult = function(event) {
 
    // event 是一个SpeechRecognitionEvent 对象
    // 保存了所有历史捕获对象
    // 我们只取当前的内容
    var current = event.resultIndex;
   
    // 获取此前所说话的记录
    var transcript = event.results[current][0].transcript;
   
    // 将当前记录添加到笔记内容中
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }


    
})
