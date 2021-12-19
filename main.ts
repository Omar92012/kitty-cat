let setting = 0
let hunger = 0
music.setBuiltInSpeakerEnabled(true)
soundExpression.hello.play()
let health = 100
basic.showNumber(health)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    `)
basic.forever(function () {
    if (input.logoIsPressed()) {
        setting = 1
    }
})
basic.forever(function () {
    if (!(input.logoIsPressed())) {
        setting = 0
    }
})
basic.forever(function () {
    if (setting == 1) {
        servos.P0.setAngle(45)
        basic.pause(100)
        servos.P0.setAngle(135)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (setting == 1) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
        health += 1
    }
})
basic.forever(function () {
    if (hunger == 10) {
        health += -1
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (setting == 2) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
        health += 5
    }
})
basic.forever(function () {
    hunger += 1
    basic.pause(10000)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        hunger += -1
        basic.pause(500)
    }
})
basic.forever(function () {
    if (setting == 0) {
        if (health == 100) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . # . #
                . # . # .
                `)
        }
        if (health == 50) {
            basic.showNumber(health)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                `)
        }
        if (health == 30) {
            basic.showNumber(health)
            basic.showLeds(`
                . . . . .
                # # . # #
                . . . . .
                . # . # .
                # . # . #
                `)
        }
        if (health == 15) {
            basic.showNumber(health)
            basic.showLeds(`
                # . # . #
                . # . # .
                . . . . .
                . # . # .
                # . # . #
                `)
        }
        if (health == 0) {
            basic.showNumber(health)
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                . # # # .
                . # # # .
                `)
            soundExpression.sad.play()
        }
    }
})
basic.forever(function () {
	
})
loops.everyInterval(randint(0, 10000), function () {
    setting = 2
    basic.pause(randint(0, 5000))
    setting = 0
})
