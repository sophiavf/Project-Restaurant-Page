import setActiveButton from "../utils/activeButton";
import createDomElement from "../utils/createElement";

function loadAboutPage() {
	let container = document.querySelector("main");
	container.innerHTML = "";
	setActiveButton("aboutButton");

	const aboutText = createDomElement("div", "aboutText");
	aboutText.innerHTML =
		"Woking Town by Tom specializes in asian fusion. In the center of Munich, Germany. <br> We love serving authentic and spicy meals - nothing german mild.";

	container.appendChild(aboutText);
}

export default loadAboutPage;
