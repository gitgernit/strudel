const claps = sound("clap:4")
  .struct("x - x - x  - x!3  - x - x!4")

const bass = stack(
  sound("bd").bank("ace_bd").struct("x!2 x@2 x!2"),
  sound("sine").struct("x!2 x@2 x!2")
).adsr("0:.1:.5:0").room(1).gain(8)

main: stack(claps, bass)
// fuckass beat
