let x = 0
let y = 0
while (y >= 0) {
    led.plot(x, y)
    basic.pause(500)
    if (y / 2 == "0") {
        if (x > 0) {
            x += -1
        } else {
            y += -1
        }
    } else {
        if (x < 4) {
            x += 1
        } else {
            y += -1
        }
    }
}
basic.forever(function () {
    x = 4
    y = 4
})
