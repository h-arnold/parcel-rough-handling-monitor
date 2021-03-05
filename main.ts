// If the parcel is shaken, then an angry face will be shown and a sound effect will be played four times.
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    for (let index = 0; index < 4; index++) {
        soundExpression.giggle.playUntilDone()
    }
})
// When an acceleration of 3g or higher is detected, a sad face and an alarm sound will be played four times.
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Sad)
    for (let index = 0; index < 4; index++) {
        soundExpression.slide.playUntilDone()
    }
})
// By default, a smile is shown to show that the parcel has been handled carefully.
basic.showIcon(IconNames.Happy)
// Setting maximum volume as we want the sound to be loud
music.setVolume(127)
