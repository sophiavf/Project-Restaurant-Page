function createDomElement(tagName, id, className, textContent) {
	const newElement = document.createElement(`${tagName}`);
	if (id !== undefined) newElement.setAttribute("id", `${id}`);
	if (className !== undefined) newElement.classList.add(`${className}`);
	if (textContent !== undefined) newElement.textContent = `${textContent}`;
	return newElement;
}

export default createDomElement;
