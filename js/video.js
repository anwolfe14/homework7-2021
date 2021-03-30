var video = document.getElementById("player1");
//var video = document.querySelector("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video")
	 video.play();
	 var volume = document.getElementById("volume");
	 volume.innerHTML = video.volume * 100 + "%";
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage")
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal")
	video.classList.remove("oldSchool");
});
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this)
	var slider = this.value;
	video.volume = slider / 100;
	volume.innerHTML = video.volume * 100 + "%";
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Go Faster")
	video.playbackRate /=.95; //fix, use divison
	console.log(video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	if(video.currentTime < video.duration - 15) {
	video.currentTime +=15; //fix, use divison
	console.log(video.playbackRate)
	}
	else {
		video.currentTime = 0;
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muting")
    if(video.muted == true) {
		this.innerHTML = "Mute";
		video.muted = false;
	}
	else {
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

//use this https://www.w3schools.com/tags/ref_av_dom.asp