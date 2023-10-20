







const accordionExpanded = document.querySelector(".component-accordion-expanded__content")
const accordionButton = document.querySelector(".component-accordion-expanded")

accordionButton.addEventListener("click", () => {
	accordionExpanded.classList.toggle("component-visible")
})
