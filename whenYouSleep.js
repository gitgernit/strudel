const higherSynths =
  note("a#7@4 b7@2 a#7@4 f#7@4 d#7@6 e7@2 d#7@4 b6@6 g#7@32")
  .sound("sawtooth")
  .lpf(6000)
  .lpq(.8)
  .transpose(-24)
  .gain(1.3)
  .attack(.1)
  .release(.3)

const lowerSynths = higherSynths.transpose(-12)
const bitSynths = higherSynths.sound("square").transpose(-24).crush(8)

const synths = stack(
  higherSynths,
  lowerSynths,
  bitSynths,
)

const baseGuitar =
  note(`
       d#5@4 d#5@2 d#5@4 d#5@2 -!2 f5@4 f5@2 f5@2 f5@4 f5@2 f5@2
       g#5!2 g#5@4 g#5@2 g#5@4 g#5@2 -!2 g#5@4 g#5@2 g#5@2 g#5@4 g#5@2 g#5@4
  `)
  .sound("gm_distortion_guitar:2")
  .room(1)
  .release(.5)
  .gain(1.5)

const guitar = stack(
  baseGuitar,
  baseGuitar.transpose(-4),
  baseGuitar.transpose(-9),
  baseGuitar.transpose(-16),
)

const bass =
  note(`
       b@4 b2@2 b2@4 b2@2 -!2 c#3@4 c#3@2 c#3@2 c#3@4 c#3@2 c#3@2
       e3!2 e3@4 e3@2 e3@4 e3@2 -!2 e3@4 e3@2 e3@2 e3@4 e3@2 e3@4
  `)
  .sound("gm_electric_bass_pick:3")
  .lpf(1200)

const snares =
  sound("sd")
  .struct("-!4 x -!7 x -!7 x -!7 x -!7 x -!7 x -!7 x -!11")
  .bank("9000")

const kickDrums =
  sound("bd:5")
  .struct(`
       x - x -!3 x - x - x -!3 x - x - x -!3 x - x - x -!3
       x - x - x -!3 x - x - x -!3 x - x - x -!3 x - x -!7
  `)
  .bank("alesissr16")

const lowToms1 =
  sound("lt:0")
  .struct("-!58 x!4 -!2")
  .bank("bossdr550")

const lowToms2 =
  sound("lt:1")
  .struct("-!62 x!2")
  .bank("bossdr550")

const lowToms = stack(lowToms1, lowToms2)

const rideCymbals =
  sound("rd")
  .struct(`
       x - x - x - x - x - x - x - x - x - x - x - x - x -
       x - x - x - x - x - x - x - x - x - x - x - x - x - x - x - x - -!6
  `)
  .bank("akailinn")

const drums = stack(
  snares,
  kickDrums,
  lowToms,
  rideCymbals,
)

const tempo = 60 / 7.385
const attackTime = 5.5

main: stack(
  synths,
  guitar,
  bass,
  drums,
)
  .cpm(tempo)
  .pattack(attackTime)
  .pdecay(0)
  .psustain(1)
  .penv(-4)
  .panchor(1)
  ._punchcard()
