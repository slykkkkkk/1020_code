let x = 4
let y = 4
basic.forever(function () {
	
})
basic.forever(function () {
    if (y >= 0) {
        led.plot(x, y)
        basic.pause(100)
        if (y % 2 == 0) {
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
    if (x == 0 && y == 0) {
        led.plot(0, 0)
        basic.pause(500)
        basic.clearScreen()
        x = 4
        y = 4
    }
})
