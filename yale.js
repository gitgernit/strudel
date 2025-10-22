const sawtooth =
  note(`
  g#5@12 f5@12 c5@6 -!2, f3@12 c3@6 c#3@6 d#3@6 -!2
  `)
  .sound("sawtooth")
  .hpf(300)

const smoothSawtooth =
  note("-!11 c5@6 c#5@6 d#5@7 -!2")
  .sound("sawtooth")
  .adsr(".4:0:1:.4")
  .room(.5)
  .lpf(2000)

const tempo = 60 / 3.38

main: stack(
  sawtooth,
  smoothSawtooth,
).cpm(tempo)
