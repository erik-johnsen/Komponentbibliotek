//sidebar

const sidebarButtons = document.querySelectorAll(".overview_button")
const components = document.querySelectorAll(".component")

sidebarButtons.forEach(button => {
	function ShowComponents(event) {

		const button = event.currentTarget
		const componentToDisplay = button.dataset.component
	
		sidebarButtons.forEach(button => {
			button.classList.remove("sidebar-active")
			
			if(button.dataset.component === componentToDisplay) {
				button.classList.add("sidebar-active")
			}
		})

		components.forEach(component => {
			component.classList.remove("component-visible")
	
			if (component.dataset.id === componentToDisplay) {
				component.classList.add("component-visible")
			}
		})
	

	
	}

	button.addEventListener("click", ShowComponents)
})

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

switchComponent.addEventListener("click", () => {
	switchComponent.classList.toggle("component-toggle-switch-active")
})

//tabs

const tabButtons = document.querySelectorAll(".tablinks")

tabButtons.forEach(button => {
	if(button.classList.contains("tab1")) {
		button.classList.add("tab-active")
	}
	button.addEventListener("click", () => {
		tabButtons.forEach(button => button.classList.remove("tab-active"))
		button.classList.add("tab-active")
	})
})

//toast

const toastTriggers = document.querySelectorAll(".toast-button")

toastTriggers.forEach(toastTrigger => {

	const triggerState = (event) => {
		const button = event.currentTarget
		const stateToTest = button.dataset.toastTest

		const createToastTest = (message, type) => {
			const toastContainer = document.createElement("div")

			toastContainer.className = "toast" + " toast-" + type + " toast-popup"
			toastContainer.textContent = message

			return toastContainer
		}
		if(stateToTest === "normal") {
			const toastTest = createToastTest("Hello Governor", "normal")
			document.body.appendChild(toastTest)
		} else if(stateToTest === "warning") {
			const toastTest = createToastTest("Be Warned!", "warning")
			document.body.appendChild(toastTest)
		} else {
			const toastTest = createToastTest("Must have been an error!", "error")
			document.body.appendChild(toastTest)
		}
	}

	toastTrigger.addEventListener("click", triggerState)
})