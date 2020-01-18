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
// let videoPlayer = {
// 	video:document.querySelector("video"),
// 	playBtn:document.querySelector(".playBtn"),
// 	reloadBtn:document.querySelector(".reloadBtn"),
// 	init:function(){
// 		videoPlayer.playBtn.addEventListener("click",videoPlayer.play)
// 		videoPlayer.reloadBtn.addEventListener("click",videoPlayer.reload)
// 	},
// 	play:function(){
// 		let src = videoPlayer.playBtn.getAttribute("src")
// 		console.log(src)
// 		if (src == "play.png") {
// 			videoPlayer.playBtn.setAttribute("src","pause.png")
// 			videoPlayer.video.play()
// 		} else {
// 			videoPlayer.playBtn.setAttribute("src","play.png")
// 			videoPlayer.video.pause()
// 		}
// 	},
// 	reload:function(){
// 		videoPlayer.video.load()
// 		videoPlayer.playBtn.setAttribute("src","play.png")
// 	}
// }
// videoPlayer.init()
// function solja(){
// 	// let xxx = {}
// 	// xxx.color = "white";
// 	// xxx.size = "small";
// 	// return xxx;
// 	// let this = {}
// 	this.color = "white";
// 	this.size = "small";
// 	// return this
// }
//  let s = new solja()
//  console.log(s)
let allIds = document.querySelectorAll("[id]")
console.log(allIds)
for (var i = 0; i < allIds.length; i++) {
	new VideoPlayer("#"+allIds[i].id).init()
	// console.log(allIds[i].id)
}
function VideoPlayer(id){
	let self = this;
	this.holder = document.querySelector(id)
	this.video = this.holder.querySelector("video")
	this.playBtn = this.holder.querySelector(".playBtn");
	this.reloadBtn = this.holder.querySelector(".reloadBtn");
	this.init = function(){
		this.playBtn.addEventListener("click",this.play)
		this.reloadBtn.addEventListener("click",this.reload)
	};
	this.play = function(){
		let src = this.getAttribute("src")
		if (src == "play.png") {
			this.setAttribute("src","pause.png")
			self.video.play()
		} else {
			this.setAttribute("src","play.png")
			self.video.pause()
		}
	};
	this.reload = function(){
		self.video.load();
		self.playBtn.setAttribute("src","play.png")
	}

}
// let vp1 = new VideoPlayer("#one");
// let vp2 = new VideoPlayer("#two");
// // console.log(vp2)
// vp1.init()
// vp2.init()
