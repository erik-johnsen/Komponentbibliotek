//sidebar

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



//accordion

const accordionExpanded = document.querySelector(".component-accordion-expanded__content")
const accordionButton = document.querySelector(".component-accordion-expanded")

accordionButton.addEventListener("click", () => {
	accordionExpanded.classList.toggle("component-visible")
})

//button

const buttonComponent = document.querySelector(".component-button-working")

buttonComponent.addEventListener("click", () => {
	buttonComponent.classList.toggle("component-button-active")
})

//switch

const switchComponent = document.querySelector(".component-switch-working")
const switchBallComponent = document.querySelector(".component-switch-working-ball")

//switchComponent.addEventListener("mouseover", () => {
//	if(switchComponent.style.flexDirection === "row-reverse" ) {
//		switchComponent.style.backgroundColor = "#1E81D8"
//	} else {
//		switchComponent.style.backgroundColor = "#A5BEE3"
//	}
//})

switchComponent.addEventListener("click", () => {
	switchComponent.classList.toggle("switchBallRight")

})
