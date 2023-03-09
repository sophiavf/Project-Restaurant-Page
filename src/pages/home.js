import setActiveButton from "../utils/activeButton";
import headlineImage from "../images/chris-liverani-unsplash.jpg";
import createDomElement from "../utils/createElement";

function loadHomePage() {
	let mainContainer = document.querySelector("main");
	mainContainer.innerHTML = "";
	setActiveButton("homeButton");

	const headlineContainer = createDomElement("div", "headlineContainer");
	const imageContainer = createDomElement("div", "imageContainer");
	const image = createDomElement("img", "headlineImage");
	image.src = headlineImage;
	imageContainer.append(image);

	const rightContainer = createDomElement("div", "rightContainer");

	rightContainer.append(
		createDomElement(
			"H2",
			"headlineHeader",
			undefined,
			"An aromatic taste experience"
		),
		createDomElement(
			"p",
			"headlineDescription",
			undefined,
			"Restaurant experience takes shape long before you arrive, which is why we acknowledge the origins of cuisine and the produce"
		),
		createDomElement("button", "cta", undefined, "Review our menu")
	);

	headlineContainer.append(imageContainer, rightContainer);
	mainContainer.appendChild(headlineContainer);
}

export default loadHomePage;
