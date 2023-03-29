var navelements = document.getElementsByClassName("navelement");
for (var i = 0; i < navelements.length; i++) {
    navelements[i].addEventListener('click', playclick);
}
function playclick(){
    keypress.currentTime = 0;
    keypress.volume=0.25;
    keypress.play();
}

function startterm(){
powerswitch.volume= "0.2";
hum.volume= "0.3";
darkness.style.opacity = "0";
darkness.style.pointerEvents = "none";
powerswitch.play();
hum.play();
}