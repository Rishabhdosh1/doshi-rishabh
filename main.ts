let inithead = 0;
let offset = 0;
inithead = input.compassHeading();
input.onButtonPressed(Button.A, function() {
    inithead = input.compassHeading();
    basic.showNumber(inithead);
})



basic.forever(function on_forever() {
    if (sonar.isSonar(Comparison.CLOSER, 25) && sonar.checkSonar() != 0) {
        motion.stop()
    }
    else {
        motion.drive(25, 35)
        led.plot(2, 0)


    }

    /* offset = input.compassHeading() - inithead
   
    
    if (sonar.isSonar(Comparison.CLOSER, 25) && sonar.checkSonar() != 0) {
        motion.stop()
    } 
    else {
        if (offset < -10) {
        motion.drive (70,10)
        led.plot(0, 0)
        

        }
        else if (offset > 10){
            motion.drive (10,70)

            led.plot(4, 0)
        }

    else {
            motion.drive(25, 35)
            led.plot(2, 0)
        }
        
        
    } 
    */
    
})
