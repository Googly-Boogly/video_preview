console.log("page loaded...");
var myVideo = document.getElementById("video1"); 

function over(hi) {
    myVideo.play()
    myVideo.muted = false;
}
function out(hi) {
    myVideo.pause()
    myVideo.muted = true;
}