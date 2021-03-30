input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # # # # #
        . . # . #
        . . # # #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
