import { create } from "lodash";
import createDomElement from "./createElement";

function createMenuItem(image, title, id, description) {
	const menuItem = createDomElement("div", "menuItem", `${id}`);
	const imageContainer = createDomElement("div", )
	const imageElement = createDomElement("img", "itemImage");
	imageElement.src = image;
	imageContainer.appendChild(imageElement)
	menuItem.append(imageContainer);
	menuItem.append(createDomElement("h2", "itemTitle", undefined, `${title}`));
	menuItem.append(
		createDomElement("div", "itemDescription", undefined, `${description}`)
	);
	return menuItem;
}

export default createMenuItem;
