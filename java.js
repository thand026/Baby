function showYes() {
}

document.getElementById("yesButton").onclick = function() {
    var audio = document.getElementById("song");
    audio.play();
    document.getElementById("yesAlert").style.display = "flex";
    
    alert("Dear Future Mrs Bhembe. Please take into consideration that words may not be my strong suite as you know, so bare with me. Thank you and enjoy.");
}

function closeYes() {
    document.getElementById("yesAlert").style.display = "none";
}

function showNo(){
    document.getElementById("noAlert").style.display = "flex"
}

function closeNo() {
    document.getElementById("noAlert").style.display = "none";
}




