const synth = note(`
  -!12 f#5 - f#5 - f#5 - e5 - e5 - e5 - -!12 d5 - d5 - d5 -
  c#5 - c#5 - c#5 - a4 - a4 - a4 - a4 - a4 - a4 - a4 - a4 - a4 -
  -!6 e5 - f#5 - a5 - d5 - e5 - f#5 - d5 - c#5 - b4 - b4 - c#5 - a4 -
  `).sound("triangle")

const violin = note(`
  a5@2 d6@2 e6@2 a5@2 d6@2 e6@2 a5@2 d6@2 f#6@2 -!6 a5@2 d6@2 e6@2 a5@2 d6@2 e6@2
  a5@2 d6@2 a6@2 -!6 a5@2 d6@2 e6@2 a5@2 d6@2 e6@2 a5@2 d6@2 f#6@2 -!6
  a5@2 d6@2 e6@2 a5@2 d6@2 e6@2 a5@2 d6@2 a6@2 -!6
  `).sound("gm_violin")
  .adsr("0:.1:.6:.2")
  .lpf(2000)

const bass = note(`
  c3@9 c3@9 c3@12 d3@9 e3@9 f#3@9 f#3@9 f#3@12 f#3@9 f#3@6 a3@3
  `).sound("gm_acoustic_bass")
  .transpose(-12)
  .adsr(".1:0:1:.1")
  .lpf(800)
  .gain(.7)

const tempo = 60 / 7

main: stack(
  synth,
  violin,
  bass,
).cpm(tempo)
