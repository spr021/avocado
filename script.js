function profileView(){
    document.getElementById("chat-text").scrollBy(0, -100000)
    var user = document.getElementById('user-info-border')
    document.getElementById("chating").style.display = 'none'
    document.getElementById('user-info-border').className = 'user-info-border-flex'
}
function closeProfile(){
        document.getElementById('user-info-border').className = 'user-info-border-none'
        document.getElementById("chating").style.display = 'block'
}
function send(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("send-pm").click()
       }
  }

function chat() { 
    var massage = document.getElementById("my-talk")
    massage.value.trim()
        if (massage.value == "") {
        return false
        }
        else{
            var chatBox = document.createElement('div')
            chatBox.className  = 'msg-me'
            chatBox.innerHTML = '<div class="talk-img"><img src="img/avatar/boy.png" /></div><div class="talk-msg">' + massage.value + '</div>'
            document.getElementById("chating").appendChild(chatBox)
            massage.value = ""
            document.getElementById("chat-text").scrollBy(0, 100000)
        }
    }
