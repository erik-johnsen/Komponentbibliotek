
const sidebarButtons = document.querySelectorAll(".overview_button")
const components = document.querySelectorAll(".component")

sidebarButtons.forEach(button => {

	button.addEventListener("click", ShowComponents)
})

function ShowComponents(event) {

	const button = event.currentTarget
	const componentToDisplay = button.dataset.component

	components.forEach(component => {
		component.classList.remove("component-visible")

		if (component.dataset.id === componentToDisplay) {
			component.classList.add("component-visible")
		}
	})

	sidebarButtons.forEach(button => {
		button.classList.remove("sidebar-active")
		
		if(button.dataset.id === componentToDisplay) {
			button.classList.add("sidebar-active")
		}
	})

}





const accordionExpanded = document.querySelector(".component-accordion-expanded__content")
const accordionButton = document.querySelector(".component-accordion-expanded")

accordionButton.addEventListener("click", () => {
	accordionExpanded.classList.toggle("component-visible")
})

const buttonComponent = document.querySelector(".component-button-working")

buttonComponent.addEventListener("click", () => {
	buttonComponent.classList.toggle("component-button-active")
})