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
const toastsContainer = document.querySelector(".toasts-container")

toastTriggers.forEach(toastTrigger => {

	const triggerState = (event) => {
		const button = event.currentTarget
		const stateToTest = button.dataset.toastTest
		let toastTest

		const createToastTest = (message, type) => {
			const toastContainer = document.createElement("div")

			toastContainer.className = "toast" + " toast-" + type
			toastContainer.textContent = message
			return toastContainer
		}

		if (stateToTest === "normal") {
			toastTest = createToastTest("Hello Governor", "normal")
			toastsContainer.appendChild(toastTest)
		} else if(stateToTest === "warning") {
			toastTest = createToastTest("Be Warned!", "warning")
			toastsContainer.appendChild(toastTest)
		} else {
			toastTest = createToastTest("Must have been an error!", "error")
			toastsContainer.appendChild(toastTest)
		}

		toastsContainer.classList.add("fade-in-out")

		setTimeout(() => {
			toastsContainer.classList.remove("fade-in-out")
			toastsContainer.removeChild(toastTest)
		}, 3000)

	}

	toastTrigger.addEventListener("click", triggerState)
})

//slider

//slider Square
const sliderSquare = document.getElementById("range-square")
const outputValueSquare = document.getElementById("outputValue-square")
outputValueSquare.innerHTML = sliderSquare.value

sliderSquare.oninput = function() {
	outputValueSquare.innerHTML = this.value
}

//slider Round
const sliderRound = document.getElementById("range-round")
const outputValueRound = document.getElementById("outputValue-round")
outputValueRound.innerHTML = sliderRound.value

sliderRound.oninput = function() {
	outputValueRound.innerHTML = this.value
}