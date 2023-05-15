const toggleGifBtn = document.querySelector("#toggle_gif_btn");
const toggleIcon = document.querySelector("#toggle_icon");
const gif = document.querySelector("#gif");

toggleGifBtn.addEventListener("click", () => {
	gif.classList.toggle("gif");
	toggleIcon.classList.toggle("fa-eye");
	toggleIcon.classList.toggle("fa-eye-slash");
});
