const clickMe = document.querySelector(".reveal")
const text = document.querySelector(".text")

clickMe.addEventListener("click", () => {
    displayText()
    clickMe.style.display = "none"
})

function displayText() {

    text.classList.add("scale-in-center")
    text.addEventListener("animationend", () => {
        text.classList.add("color-change-2x")
    })
    text.style.display = "block"
}