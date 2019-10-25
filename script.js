
function chat() { 
    var massage = document.getElementById("my-talk")
    massage.value.trim()
    console.log(massage)
        if (massage.value == "") {
        return false;
        }
        else{
            var chatBox = document.createElement('div')
            chatBox.className  = 'msg-me'
            chatBox.innerHTML = '<div class="talk-img"><img src="img/avatar/boy.png" /></div><div class="talk-msg">' + massage.value + '</div>'
            document.getElementById("chat-text").appendChild(chatBox)
            massage.value = ""
            document.getElementById("chat-text").scrollBy(0, 1000)
        }
}