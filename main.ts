let ichbinan = 0
let L = 0
let R = 0
let Merk = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ichbinan == 1) {
        ichbinan = 0
    } else {
        ichbinan = 1
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
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
        if (R != 0 && 0 != L) {
            Merk = 0
            basic.setLedColors(0x000000, 0xffffff, 0x000000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 49)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 49)
        } else if (R != 0 && 0 == L) {
            Merk = 1
            basic.setLedColors(0x000000, 0x000000, 0xff00ff)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 21)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 32)
        } else if (R == 0 && 0 != L) {
            Merk = -1
            basic.setLedColors(0x00ff00, 0x000000, 0x000000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 32)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 23)
        } else {
            if (Merk < 0) {
                basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 64)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 23)
            } else {
                basic.setLedColors(0xff00ff, 0xff00ff, 0xff00ff)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 22)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
})
