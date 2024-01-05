joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        joystickbit.Vibration_Motor(500)
    } else {
        game.gameOver()
        joystickbit.Vibration_Motor(100)
    }
})
let sprite: game.LedSprite = null
joystickbit.initJoystickBit()
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
})
