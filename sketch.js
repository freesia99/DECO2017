

// vedio
let bgma;
let bgmb;
let toggleBgm = false;
let isClick = false


///////////////////////////////////////////
// preload FUNCTION
///////////////////////////////////////////

function preload() {
	// preload() runs once

	bgma = loadSound('1.mp3');
	bgmb = loadSound('2.mp3');



}


///////////////////////////////////////////
// SETUP FUNCTION
///////////////////////////////////////////
function setup() {
	/////////////////////////////////////////////
	// FIXED SECION - START: DO NOT CHANGE IT
	/////////////////////////////////////////////
	// createCanvas(windowWidth, windowHeight);


}



///////////////////////////////////////////
// DRAW FUNCTION
///////////////////////////////////////////
function draw() {

	if (bgma.isPlaying() == false && isClick != true) {
		bgma.play()
	}




	// }
	// console.log('mouseX==' + mouseX)
	// console.log('mousey==' + mouseY)

}

function mousePressed() {
	isClick = true

	if (mouseX > 447 && mouseX < 463 && mouseY > -997 && mouseY < -982) {
		if (toggleBgm) {
			if (bgmb.isPlaying()) {
				bgmb.pause()
			} else {
				bgmb.play()

			}
		} else {
			if (bgma.isPlaying() == false) {
				bgma.play()
			} else {
				bgma.pause()

			}
		}
	}

	// qiege
	if (mouseX > 648 && mouseX < 658 && mouseY > -997 && mouseY < -982) {
		toggleBgm = !toggleBgm;
		if (toggleBgm) {
			if (bgmb.isPlaying() == false) {
				bgmb.play()
				bgma.pause()

			}
		} else {
			if (bgma.isPlaying() == false) {
				bgma.play()
				bgmb.pause()

			}
		}
	}
}

const pause = document.querySelector('.pause')
const goend = document.querySelector('.goend')
console.log(pause)

pause.addEventListener('click',()=>{
    isClick = true

	
		if (toggleBgm) {
			if (bgmb.isPlaying()) {
				bgmb.pause()
			} else {
				bgmb.play()

			}
		} else {
			if (bgma.isPlaying() == false) {
				bgma.play()
			} else {
				bgma.pause()

			}
		}
		console.log('pause==' )
	
})


goend.addEventListener('click',()=>{
    isClick = true

	// qiege
	
		toggleBgm = !toggleBgm;
		if (toggleBgm) {
			if (bgmb.isPlaying() == false) {
				bgmb.play()
				bgma.pause()

			}
		} else {
			if (bgma.isPlaying() == false) {
				bgma.play()
				bgmb.pause()

			}
		}
	console.log('goend==' )
	
})