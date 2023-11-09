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
