var file;
function preload(){
    file = loadSound("light.mp3");

}

function setup(){
    file.play;
}

function toggleSong(){
    if(!file.isPlaying()){ 

    file.play();

}else{ 

    file.pause();
}
}