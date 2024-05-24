let ichbinan = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ichbinan == 1) {
        ichbinan = 0
    } else {
        ichbinan = 1
    }
})
basic.forever(function () {
    if (ichbinan == 1) {
    	
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
