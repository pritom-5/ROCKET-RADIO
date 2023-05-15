import { assignNewColor } from "./randomColor.js";

let durationPlayed = 0;
let isPlaying = false;
let interval;

const TOTAL_SONGS = 4;
const TOTAL_PICS = 2;

import {
	playBtn,
	volumeBtn,
	durationSlider,
	durationPlayedDisplay,
	audioSlider,
	audio,
	artwork,
} from "./selector.js";

function pickRandomPic() {
	artwork.src = `https://picsum.photos/200/200`;
}

function pickRandomSong() {
	// fetch a song
	const randomIndex = Math.ceil(Math.random() * TOTAL_SONGS);
	audio.src = `https://res.cloudinary.com/dgum47g32/video/upload/v1684122133/radio_app/${randomIndex}.mp3`;
	assignNewColor();
	pickRandomPic();
}

function resetFn() {
	isPlaying = false;
	durationPlayed = 0;
	pickRandomSong();
	togglePlayPauseInput();
}

function togglePlayPauseInput() {
	if (isPlaying) {
		audio.pause();
		playBtn.innerHTML = '<i class="fa fa-play"></i>';
		artwork.classList.remove("animate_artwork");
	} else {
		audio.play();
		playBtn.innerHTML = '<i class="fa fa-pause"></i>';
		artwork.classList.add("animate_artwork");
	}
	isPlaying = !isPlaying;
}

function convertDurationPlayedFormat() {
	if (typeof durationPlayed !== "number") {
		durationPlayed = +durationPlayed;
	}
	if (!durationPlayed) return;

	const min = Math.floor(durationPlayed / 60);
	const seconds = durationPlayed % 60;

	const minStr = min < 10 ? `0${min}` : `${min}`;
	const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

	const durationPlayedStr = `${minStr}:${secondsStr}`;
	// update durationPlayed to mm:ss
	durationPlayedDisplay.innerHTML = durationPlayedStr;
}

function incrementDurationSlider() {
	// conver the percentage
	const percentage = (durationPlayed / audio.duration) * 100;
	// set attribute
	durationSlider.setAttribute("value", String(percentage));
}

function incrementDurationPlayed() {
	clearInterval(interval);

	interval = setInterval(() => {
		if (audio.duration <= durationPlayed) {
			resetFn(audio);
		}
		if (!isPlaying) {
			clearInterval(interval);
			return;
		}
		durationPlayed += 1;
		//TODO: if totalSongDuration <== number reset and add new song

		incrementDurationSlider();
		convertDurationPlayedFormat();
	}, 20);
	/// chnage to 1000
}

export {
	pickRandomPic,
	pickRandomSong,
	togglePlayPauseInput,
	incrementDurationPlayed,
};
