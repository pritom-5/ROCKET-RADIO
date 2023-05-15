function generateRandomColor() {
	const red = Math.floor(Math.random() * 123) % 255;
	const blue = Math.floor(Math.random() * 456) % 255;
	const green = Math.floor(Math.random() * 789) % 255;

	return `rgb(${red}, ${blue}, ${green})`;
}

const bgColor = document.querySelector("#bg_color");

function assignNewColor() {
	const rgbaColor1 = generateRandomColor();
	const rgbaColor2 = generateRandomColor();
	bgColor.style = `background-image: linear-gradient( 45deg ,${rgbaColor1}, ${rgbaColor2})`;
}

export { assignNewColor };
