const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

document.querySelector(".btn").addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * colors.length)
    document.querySelector(".color-name").textContent = colors[randomNumber]
    document.querySelector(".body").style.backgroundColor = colors[randomNumber]
})
