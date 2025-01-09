motion.drive(25, 35)

def on_every_interval():
    pass
loops.every_interval(500, on_every_interval)

def on_forever():
    led.plot(0, 0)
    if sonar.is_sonar(Comparison.CLOSER, 25):
        motion.stop()
    else:
        pass
basic.forever(on_forever)
