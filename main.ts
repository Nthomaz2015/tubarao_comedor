namespace SpriteKind {
    export const decoracao = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.coolRadial, 200)
    info.changeScoreBy(1)
})
let peixinho: Sprite = null
let algamarinha: Sprite = null
info.setScore(0)
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ........................555.....................................................................................................................................
    .......................75557....................................................................................................................................
    .......................75557...............................................................................................777..................................
    .......................77777...............................................................................................777..................................
    .......................77777.....................................................................77777.....................777..................................
    .......................77777.....................................................................77777.....................77777................................
    ..................7777777777.....................................................................77777.....................77777................................
    ..................7777777777.........77777......................77777............................77777.....................77777................................
    ..................7777777777.........77777......................75557777.........................77777.....................777....................777...........
    ..................7777777777.........77777......................755577777..................................................7777...................777...........
    ..................7777777777.........77777.......................55577777..........................77777...................777777.................777...........
    ...............77777.................77777...........................77777.........................77777....................77777.................777...........
    ...............77777..............................................77777777.........................77777..................777.777.................777...........
    ...............77777............................................7777777777.........................77777..................777.....................777...........
    ...............777777777..................77777.................777777777..........................77777..................555.....................7777..........
    ...............777777777..................77777.................77777..........................77777......................555.....................7777..........
    ...................77777..................77777.................7777.........................7555777.................77777555777...................777..........
    ...................77777..................77777.................77777........................7555777.................77777777777.7.................555..........
    ..............7777777777...............77777777..................77777.......................7555777.................77777777777777...............7555..........
    ..............77777....................77777......................77777......................7555777......................77777.77777............77555..........
    777777........77777....................75557......................77777......................75557..77777.................77777.77777..........7777777..........
    7777777.....7777777777777777777777.....75557.......................77777............................77777.......................77777........77777777...........
    77777777777777777777777777777777777777.75557......................7777777777777777.....77777........77777.......................77777........777777.............
    77777777777777777777777777777777777777777777...............7777777777777777777777777777777777777777777777777777.....7777777.....77777........777777.....77777...
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77dddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77ddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ddddddddddddddddddddd......dddddddddddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777dd7777777777777777777777777777777777777
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777dddddddddddddddd7777777777777777777777777777777
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777ddddddddddddddddddddddddddddddddddd7777777777777777
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777d
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777.dddddddddddddddddddddddddddddddddddd.dddd
    `)
let tubarao = sprites.create(img`
    ..........fffcc...fffffff...........
    ..........fbbbbcffbbbbbbbf..........
    ...........fbffbbbbb111bbf..........
    ...........ffbbbbff11111bf..........
    .........ffcbbbbbff1cccc1f..........
    ........fcccbcbcbb1c1c1cff..........
    ccccc..fcccbcbcbbb1333ccf...........
    cbbddcfccccbcbcbbb1c333c............
    .ccbddcccccbbbbbbb1c333c............
    ..ccbbccccccbbbbb11c333c............
    ..fccbfccccccbbbb11c133cc...........
    ..fccfcbbcccccbbbc11c31cc...........
    .fcbbf.cdddddfbbbc111111c...........
    .fbbf...cdddfbbdbf1111cc............
    fbbf.....ccfbbdbfffccc..............
    fff........fffff....................
    `, SpriteKind.Player)
controller.moveSprite(tubarao, 0, 100)
tubarao.setPosition(49, 51)
animation.runImageAnimation(
tubarao,
[img`
    ..............fffcc.................
    ..............fbbddc................
    ...............fbbddc...............
    ccc............fcbbccf..............
    cbbcc.........ffccccccffffff........
    .cbbdc.....fffcbbbbbbbbbbbbbff......
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff....
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf....
    ..fcbbbcccccccbbbcbcb1ff1111bbbf....
    ..fccbcccccccccbbbbbb11111111bf.....
    .fcbbfffccccccccbbbb11cc33cccf......
    .fbbf...cbdbcccccbbb111c131cf.......
    fbbf.....ccdddddfbbbc111c33f........
    fff........ccddfbbdbf1111ff.........
    .............cfbbdbfccccc...........
    ..............fffff.................
    `,img`
    ..............fffcc.................
    ..............fbbddc................
    ...............fbbddc...............
    ...............fcbbccffffff.........
    ..............ffcccbbbbbbbbfff......
    ccccc......fffcbbbbbbbbbbbbbbbf.....
    cbbbdc...ffcccbbbbcbcbffbbbbbcb.....
    .cbbddcffcccccbbbcbcbbff1111bbb.....
    ..fbbdbcccccccbbbcbcb11111111bf.....
    ..fcbbcccccccccbbbbbb11c33cccf......
    ..fccbffccccccccbbbb11cc131cf.......
    .fcbbf..cbdbcccccbbb1111c33f........
    .fbbf....ccdddddfbbbc1111ff.........
    fbbf.......ccddfbbdbf1ccc...........
    fff..........cfbbdbfcc..............
    ..............fffff.................
    `,img`
    .............fffcc..................
    .............fbbddc.................
    ..............fbbddfffffffff........
    ..............fcbcfbbbbbbbbbf.......
    ...........ffffccbbffb111cbbf.......
    ccccc....ffcccbbbbbff111111bf.......
    cbbbdc..fccccbbcbcbb1133cc1f........
    .cbbddcfcccccbcbcbbb1c131ccf........
    ..fbbdbccccccbcbcbbb111111f.........
    ..fcbbccccccccbbbbb1111111f.........
    ..fccbffcccccccbbbb111111f..........
    .fcbbf.cbdbcccccbbbc1111c...........
    .fbbf...cddddddfbbbc11cc............
    fbbf.....ccdddfbbdbffc..............
    fff........ccfbbdbf.................
    .............fffff..................
    `,img`
    ...........fffcc....................
    ...........fbbbbcfffffffff..........
    ............fbfffbbbbbbbbbf.........
    ............ffbbbbffb111bbf.........
    ..........ffcbbbbbff11111bf.........
    .........fcccbcbcbb11cccc1f.........
    ccccc...fcccbcbcbbb1c1c1cf..........
    cbbddccfccccbcbcbbb1333c............
    .ccbddbcccccbbbbbbb1c333c...........
    ..ccbbcccccccbbbbb11c133c...........
    ..fccbffccccccbbbb111c31cc..........
    ..fccf.cbbcccccbbbc111111c..........
    .fcbbf..cdddddfbbbc1111cc...........
    .fbbf....cdddfbbdbffccc.............
    fbbf......ccfbbdbf..................
    fff.........fffff...................
    `,img`
    ..........fffcc...fffffff...........
    ..........fbbbbcffbbbbbbbf..........
    ...........fbffbbbbb111bbf..........
    ...........ffbbbbff11111bf..........
    .........ffcbbbbbff1cccc1f..........
    ........fcccbcbcbb1c1c1cff..........
    ccccc..fcccbcbcbbb1333ccf...........
    cbbddcfccccbcbcbbb1c333c............
    .ccbddcccccbbbbbbb1c333c............
    ..ccbbccccccbbbbb11c333c............
    ..fccbfccccccbbbb11c133cc...........
    ..fccfcbbcccccbbbc11c31cc...........
    .fcbbf.cdddddfbbbc111111c...........
    .fbbf...cdddfbbdbf1111cc............
    fbbf.....ccfbbdbfffccc..............
    fff........fffff....................
    `,img`
    ....................................
    ....................................
    ....................................
    ...............ffffcc...............
    ...............fbbbddc..............
    ................fbbbddcffffff.......
    ccccc.......fffcbbbbbbbbbbbbbff.....
    cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
    .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
    ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
    ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
    ..fccbffcbcccccccbbbbcbbfff1111bbff.
    .fcbbf..ccbbbccccccbbbb111111111ff..
    fbbff.....cccbddfbbbdb111ccccccc....
    fff..........ccfbbbdbfcccccc........
    ...............ffffff...............
    `],
500,
true
)
for (let index = 0; index < 4; index++) {
    algamarinha = sprites.create(img`
        . . 6 7 7 8 . . 
        . 6 7 7 8 . . . 
        . 8 7 8 . . 6 8 
        . 8 7 8 . 6 6 8 
        . . 8 6 8 8 8 . 
        . . . 8 6 8 . . 
        6 6 . . 8 7 8 . 
        8 6 6 8 7 7 8 . 
        . 8 8 7 7 8 . . 
        . 8 7 7 8 . . . 
        . 8 7 8 . 8 6 . 
        . 8 7 8 . 8 6 6 
        . . 8 6 8 . 8 8 
        . . . 8 6 8 . . 
        . . . . 8 7 8 . 
        . . . 6 7 7 8 . 
        `, SpriteKind.decoracao)
    algamarinha.setPosition(randint(0, 200), 107)
}
info.startCountdown(15)
game.onUpdateInterval(500, function () {
    peixinho = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Enemy)
    peixinho.ax = -30
    peixinho.setPosition(170, randint(0, 120))
})
