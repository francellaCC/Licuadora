var statusBlender = "off";
var blender = document.getElementById("blender");
var sounDBlender= document.getElementById("blender-sound");
var soundButton = document.getElementById("blender-button-sound");

function blenderControl(){
    if(statusBlender == "off"){
        statusBlender = "on"
        soundBlender();
        blender.classList.add("active");
    }else{
        statusBlender = "off";
        soundBlender();
        blender.classList.remove("active");
    }
}

function soundBlender(){
    if(sounDBlender.paused){
        sounDBlender.play();
        soundButton.play();

    }else{
        soundButton.play();
        sounDBlender.pause();
        sounDBlender.currentTime = 0;
    }
}