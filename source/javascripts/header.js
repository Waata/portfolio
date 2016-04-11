var timer, fullText, currentOffset, onComplete, wordSet;

function Speak(person, text, callback) {
    $("#name").html(person);
    fullText = text;
    wordSet = text.split(" ");
    currentOffset = 0;
    onComplete = callback;
    timer = setInterval(onTick, 400);
}

function onTick() {
    currentOffset++;
    if (currentOffset == wordSet.length) {
        complete();
        return;
    }
    var text = "";
    for(var i = 0; i < currentOffset; i++){
     text += wordSet[i] + " ";   
    }
    text.trim();
    $("#message").html(text);
}

function complete() {
    clearInterval(timer);
    timer = null;
    $("#message").html(fullText);
    if (onComplete) onComplete();
}

$(".card").click(function () {
    complete();
});

Speak("Kompier",
     "<h3>How can I help you become the best on the web?!</h3>",

function () {
    setTimeout(function () {
        Speak("");
    }, 10);
});



