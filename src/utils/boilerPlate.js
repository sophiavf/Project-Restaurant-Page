import restaurantIcon from "../images/ramen_dining.svg";
import createNewElement from "./createElement";

const mainContainer = createNewElement("main", "mainContainer"); //Page contents (i.e. home, menu etc.) will be appended to this container

const bodyTag = document.querySelector("body");

function loadHeader() {
	const header = createNewElement("header", "header");
	const brandingContainer = createNewElement("div", "brandingContainer");
	const restaurantName = createNewElement(
		"h1",
		"restaurantName",
		undefined,
		"Woking Town by Tom"
	);
	const headerIcon = createNewElement("img", "restaurantIcon");
	const iconContainer = createNewElement("div", "iconContainer");
	headerIcon.src = restaurantIcon;
	iconContainer.appendChild(headerIcon);

	brandingContainer.appendChild(iconContainer);
	brandingContainer.appendChild(restaurantName);

	const buttonContainer = createNewElement("div", "navigation");

	const homeButton = createNewElement(
		"button",
		"homeButton",
		"navigationButton",
		"Home"
	);
	const menuButton = createNewElement(
		"button",
		"menuButton",
		"navigationButton",
		"Menu"
	);
	const contactButton = createNewElement(
		"button",
		"contactButton",
		"navigationButton",
		"Contact"
	);
	const aboutButton = createNewElement(
		"button",
		"aboutButton",
		"navigationButton",
		"About"
	);

	buttonContainer.append(homeButton, menuButton, contactButton, aboutButton);

	header.appendChild(brandingContainer);
	header.appendChild(buttonContainer);

	bodyTag.appendChild(header);
	bodyTag.appendChild(mainContainer);
}

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer = createNewElement("footer", "footer");
	const footerContent = createNewElement("div", undefined, undefined);
	footerContent.innerHTML = `Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy ${currentYear}`;	
	footer.appendChild(footerContent);
	bodyTag.append(footer);
}

function loadBoilerPlate() {
	loadHeader();
	loadFooter();
}

export default loadBoilerPlate;
