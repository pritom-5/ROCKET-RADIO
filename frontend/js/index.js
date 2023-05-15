import {
	pickRandomSong,
	togglePlayPauseInput,
	incrementDurationPlayed,
	pickRandomPic,
} from "./util.js";
import {
	playBtn,
	aboutDialog,
	showAboutDialog,
	closeAboutDialog,
} from "./selector.js";

pickRandomSong();
pickRandomPic();

playBtn.addEventListener("click", () => {
	togglePlayPauseInput();
	incrementDurationPlayed();
});

showAboutDialog.addEventListener("click", () => {
	aboutDialog.showModal();
});

closeAboutDialog.addEventListener("click", () => {
	aboutDialog.close();
});
