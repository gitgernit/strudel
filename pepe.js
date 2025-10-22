const _smoothSynth =
  note(`
  g#4@104 c5@24 g4@64 -!64,
  f4@104 f4@24 f4@64 f4@48 -!16,
  c4@104 c4@24 c4@64 c4@48 -!16,
  g#3@104 -!24 g#3@64 g#3@48 g#3@16,
  f3@104 d#3@24 f3@64 f3@48 f3@16,
  c#3@104 -!152
  `)
  .sound("sawtooth")
  .room(.5)
  .adsr(".1:0:1:.1")
  .lpf(3000)

const smoothSynth = _smoothSynth

const _square =
  note(`
  g#5@2 g5@2 d#5@2 a#4@2  g#5@2 g5@2 d#5@2 a#4@2  g#5@2 g5@2 d#5@2 a#4@2  g#5@2 g5@2 d#5@2 a#4@2 
  g#6 g6 d#6 a#5  g#6 g6 d#6 a#5  g#6 g6 d#6 a#5  g#6 g6 d#6 a#5
  a#5@2 d#6@2 g6@2 g#6@2  a#5@2 d#6@2 g6@2 g#6@2 
  `)
  .sound("square")
  .crush(6)

const square = seq(...Array(4).fill(_square))

const _flute =
  note(`
  c#6@12 c6@12 g#5@12 f5@20 a#5@8
  c#6@12 c6@12 g#5@12 f5@28
  `)
  .sound("gm_flute:3")
  .transpose(-12)
  .adsr(".05:0:1:.15")
  .gain(2)

const flute = seq(...Array(2).fill(_flute))

const _popSynth =
  note(`
  c6@12 d#6@12 c6@12 g#6@12 c6@12 -!4
  `)
  .sound("sawtooth")
  .lpf(6000)
  .gain(3)

const popSynth = seq(...Array(4).fill(_popSynth))

const _hihats = sound("ace_hh").struct("x@4")
const _kicks = sound("ace_bd").struct("x@4 -!24 x@4 -!8 x@4 -!8 x@4 -!8 x@4 -!24 x@4 -!20 x@4 -!8").gain(4)
const _claps = sound("clap:0").struct("-!16 x@4 -!28 x@4 -!28 x@4 -!28 x@4 -!12").adsr(".1:0:1:.1")

const drums = stack(
  seq(...Array(4).fill(
    seq(...Array(16).fill(_hihats))
  )),
  seq(...Array(2).fill(_kicks)),
  seq(...Array(2).fill(_claps)),
)

const _rawSawtooth = note("c#2@104 d#2@24 f2@112 g#2@16")

const rawSawtooth = _rawSawtooth

const tempo = 60 / 11.7

main: arrange(
  [1, smoothSynth],
  [1, stack(smoothSynth, square)],
  [1, stack(smoothSynth, flute, drums, rawSawtooth)],
  [1, stack(smoothSynth, popSynth, square, drums, rawSawtooth)],
).cpm(tempo)
