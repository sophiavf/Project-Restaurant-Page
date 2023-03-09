import setActiveButton from "../utils/activeButton";
import createDomElement from "../utils/createElement";
import createMenuItem from "../utils/createMenuItem";
import menu1 from "../images/charlesdeluvio-D-vDQMTfAAU-unsplash-min.jpg";
import menu2 from "../images/george-zheng-0Kbjfwunink-unsplash-min.jpg";
import menu3 from "../images/jennifer-schmidt-zOlQ7lF-3vs-unsplash-min.jpg";
import menu4 from "../images/michele-blackwell-rAyCBQTH7ws-unsplash-min.jpg";

function loadMenuPage() {
	let container = document.querySelector("main");
	container.innerHTML = "";
	setActiveButton("menuButton");
	const menuGrid = createDomElement("div", 'menuGridContainer');
	const menuItem1 = createMenuItem(
		menu1,
		"Dumplings",
		"menu1",
		"Tasty pork and chives dumplings"
	);
	const menuItem2 = createMenuItem(
		menu2,
		"Tangy soy chicken bites",
		"menu2",
		"Tasty chicken nibbles in a sweet and tangy soy sauce"
	);
	const menuItem3 = createMenuItem(
		menu3,
		"Vegetable pho",
		"menu3",
		"A spicy pho noodle soup with fresh vegetables and mushrooms"
	);
	const menuItem4 = createMenuItem(
		menu4,
		"Prawn ramen",
		"menu4",
		"A spicy prawn ramen with a boiled egg and fresh beans"
	);
	menuGrid.append(menuItem1, menuItem2, menuItem3, menuItem4);
	container.appendChild(menuGrid);
}

export default loadMenuPage;
