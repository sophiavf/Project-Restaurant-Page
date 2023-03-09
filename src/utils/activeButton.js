function setActiveButton(buttonId) {
	const selectedButton = document.getElementById(buttonId);
	const allNavigationButtons = document.querySelectorAll(".navigationButton");
	if (!selectedButton.classList.contains("activeButton")) {
		allNavigationButtons.forEach((buttonId) => {
			buttonId.classList.remove("activeButton");
		});
		selectedButton.classList.add("activeButton");
	}
}

export default setActiveButton;
