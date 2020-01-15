// let video = document.querySelector("video");
// let btn = document.querySelector("button");
// let playBtn = document.querySelector(".playBtn")
// let reloadBtn = document.querySelector(".reloadBtn")
// playBtn.addEventListener("click",videoPlay);
// reloadBtn.addEventListener("click",videoReload);
// function videoPlay(){
// let src = this.getAttribute("src")
// console.log(src)
// if (src == "play.png") {
// 	playBtn.setAttribute("src","pause.png")
// 	video.play()
// } else {
// 	playBtn.setAttribute("src","play.png")
// 	video.pause()
// }
// }
// function videoReload(){
// video.load()
// playBtn.setAttribute("src","play.png")
// }
// let car = "Volvo"
let videoPlayer = {
	video:document.querySelector("video"),
	playBtn:document.querySelector(".playBtn"),
	reloadBtn:document.querySelector(".reloadBtn"),
	init:function(){
		videoPlayer.playBtn.addEventListener("click",videoPlayer.play)
		videoPlayer.reloadBtn.addEventListener("click",videoPlayer.reload)
	},
	play:function(){
		let src = videoPlayer.playBtn.getAttribute("src")
		console.log(src)
		if (src == "play.png") {
			videoPlayer.playBtn.setAttribute("src","pause.png")
			videoPlayer.video.play()
		} else {
			videoPlayer.playBtn.setAttribute("src","play.png")
			videoPlayer.video.pause()
		}
	},
	reload:function(){
		videoPlayer.video.load()
		videoPlayer.playBtn.setAttribute("src","play.png")
	}
}
videoPlayer.init()