const synth = note("c4 f4 c5@2 d5@2 a4 f4@2 d4 d5@2 a4 f4@2 d4")

const hive = synth
  .sound("gm_brass_section")
  .adsr("0:.2:.2:.1")
  .gain(2)
  .distort(4.5)
  .transpose(6)

const noise = synth
  .sound("white")
  .gain(.3)

const hihats = sound("ace_hh")
  .struct("x -!3 x - x - x - x - x - x - x - x - x - x - x - x - x - x -")

const anvil = sound("bossdr220_rd")
  .struct("x -!3 x -!3 x -!3 x -!3")
  .adsr("0:.1:.6:.2")
  .gain(5)
  .lpf(8000)

const bass = stack(
  sound("rolandtr808_bd")
    .struct("x@5 - x@19 - x@6")
    .slow(2)
    .adsr("0:.05:.5:.1")
    .gain(128)
    .distort(2.8)
    .transpose(-12)
    .hpf(30)
    .lpf(400),

  sound("sine")
    .struct("x@5 - x@19 - x@6")
    .slow(2)
    .gain(4)
)

main: cat(
  hive,
  ...Array(8).fill(stack(
    hive,
    noise,
    hihats,
    anvil,
    anvil.sound("sp12_cr").gain(1),
    bass,
  ))
).cpm(25)
 ._pianoroll()

