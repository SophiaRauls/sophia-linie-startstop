let ichbinan = 0
let L = 0
let R = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ichbinan == 1) {
        ichbinan = 0
    } else {
        ichbinan = 1
    }
})
basic.forever(function () {
    if (ichbinan == 1) {
        L = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
        R = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
        if (R == 0 && 0 == L) {
            basic.setLedColors(0x000000, 0xffffff, 0x000000)
        } else if (R == 0 && 0 != L) {
            basic.setLedColors(0x000000, 0x000000, 0xff00ff)
        } else if (R != 0 && 0 == L) {
            basic.setLedColors(0x00ff00, 0x000000, 0x000000)
        } else {
            basic.setLedColors(0x00ffff, 0x00ffff, 0x00ffff)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
