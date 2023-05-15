import { audio } from "./selector.js";

const volumeBtn = document.querySelector("#volume_btn");
const volumeIcon = document.querySelector("#volume_icon");
const audioSlider = document.querySelector("#audio_slider");

let audioValue = 0.6;

function setAudioSliderValue() {
	audioSlider.value = audioValue;
}
setAudioSliderValue();

function setAudioVolume(mute = false) {
	if (mute) {
		audio.volume = 0;
	} else {
		audio.volume = audioValue;
	}
}
setAudioVolume();

volumeBtn.addEventListener("click", () => {
	if (volumeIcon.classList[1] === "fa-volume-high") {
		volumeIcon.classList.remove("fa-volume-high");
		volumeIcon.classList.add("fa-volume-xmark");
		audioSlider.disabled = "true";

		// force mute
		setAudioVolume(true);
	} else {
		volumeIcon.classList.remove("fa-volume-xmark");
		volumeIcon.classList.add("fa-volume-high");
		// remove mute
		setAudioVolume();
		audioSlider.removeAttribute("disabled");
	}
});

audioSlider.addEventListener("input", (e) => {
	audioValue = e.target.value;
	setAudioSliderValue();
	setAudioVolume();
});
