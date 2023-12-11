let canvas = document.getElementById("c1")
let painter = canvas.getContext("2d")

painter.fillStyle = "#000000"
painter.fillRect(0,0,400,400)
painter.fillStyle = "#FF0000"
painter.fillRect(10, 10, 20, 20)

let canvas2 = document.getElementById("c1")
let painter2 = canvas.getContext("2d")

painter2.fillStyle = "#000000"
painter2.fillRect(0,0,400,400)
painter2.fillStyle = "#FF0000"
painter2.fillRect(10, 10, 20, 20)
let y = 10
for (let j = 0; j < 13; ++j){
let x = 10
for(let i = 0; i < 13; ++i) {
    painter.fillRect(x, y, 20, 20)
    x = x + 30
    }
    y = y + 30
}

