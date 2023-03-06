import "./style.css";

import contactPage from "./contact";
import headerImage from "./chris-liverani-unsplash.jpg";
console.log("Hello");

function component() {
	const element = document.createElement("div");

	// use your function!
	element.textContent = myName("Cody");
	return element;
}

document.body.appendChild(component());
