const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

document.querySelector(".btn").addEventListener("click", () => {
    let hexNum = "#"

    for (var i = 0; i < 6; i++) {
        hexNum += hex[Math.floor(Math.random() * hex.length)]
    }

    // console.log(hexNum)

    document.querySelector(".color-name").textContent = hexNum
    document.querySelector(".body").style.backgroundColor = hexNum
})
