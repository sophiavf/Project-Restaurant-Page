import setActiveButton from "../utils/activeButton";
import createDomElement from "../utils/createElement";
import { Loader } from "@googlemaps/js-api-loader";

function LoadContactPage() {
	let container = document.querySelector("main");
	container.innerHTML = "";
	setActiveButton("contactButton");

	const contactDetailsContainer = createDomElement(
		"div",
		"contactDetailsContainer"
	);
	const phoneNumber = createDomElement("div", "phoneNumber");
	phoneNumber.innerHTML =
		'Phone number: <a href="tel:123-456-7890">123-456-7890</a>';
	const email = createDomElement("div", "email");
	email.innerHTML =
		'Email: <a href= "mailto:abc@example.com">abc@example.com</a>';
	const mapContainer = createDomElement("div", "map");

	const loader = new Loader({ apiKey: "" });
	loader.load().then(() => {
		const map = new google.maps.Map(mapContainer, {
			zoom: 4,
			center: { lat: 48.12817474899798, lng: 11.515313563680794 },
		});
	});

	contactDetailsContainer.append(phoneNumber, email, mapContainer);
	container.appendChild(contactDetailsContainer);
}

export default LoadContactPage;
