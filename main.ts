namespace SpriteKind {
    export const stronger_enemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.stronger_enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Ducky, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(20)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Sharky: Sprite = null
let Batty: Sprite = null
let projectile: Sprite = null
let Ducky: Sprite = null
Ducky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
Ducky.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
scene.setBackgroundColor(8)
controller.moveSprite(Ducky)
game.onUpdateInterval(2000, function () {
    Batty = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.stronger_enemy)
    Batty.setVelocity(-100, 0)
    Batty.setPosition(180, randint(0, 120))
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    Sharky = sprites.create(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, SpriteKind.Enemy)
    Sharky.setVelocity(-100, 0)
    Sharky.setPosition(180, randint(0, 120))
})
