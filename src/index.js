import "./style.css";
import loadAboutPage from "./pages/about";
import loadContactPage from "./pages/contact";
import loadHomePage from "./pages/home";
import loadMenuPage from "./pages/menu";
import loadBoilerPlate from "./utils/boilerPlate";

function addButtonEvents() {
	const homeButton = document.getElementById("homeButton");
	const menuButton = document.getElementById("menuButton");
	const contactButton = document.getElementById("contactButton");
	const aboutButton = document.getElementById("aboutButton");

	homeButton.addEventListener("click", loadHomePage);
	menuButton.addEventListener("click", loadMenuPage);
	contactButton.addEventListener("click", loadContactPage);
	aboutButton.addEventListener("click", loadAboutPage);
}

function initializePage() {
	loadBoilerPlate();
	addButtonEvents();
	loadHomePage();
}
initializePage();
