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
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
