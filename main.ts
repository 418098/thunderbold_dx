let y = 0
let x = 2
let dx = 1
let a = 0
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        for (let a = 0; a <= 4; a++) {
            led.plotBrightness(x - dx * a, y, 225 - a * 50)
        }
        y += 1
    }
    basic.pause(200)
})
