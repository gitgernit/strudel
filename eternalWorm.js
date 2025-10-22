const intro =
  note(`
  -!28 b6@8 c#7@34 -!2,
  c#6@34 -!2 c#6@34 -!2,
  -!28 b5@8 -!36,
  a5@34 -!38,
  f#5@34 -!38,
  d5@34 -!11.2 c#5@26.8,
  -!9 a4@26 -!36,
  -!9 f#4@26 -!9 e4@27,
  -!9 a3@27 a3@36,
  d3@27 -!45
  `)
  .sound("piano")

const firstPart =
  note(`
  d5@3 f#5@3 a5@3 c#6@3 a5@3 f#5@3 d5@3 f#5@3 a5@3 c#6@3 a5@3 f#5@3 d5@3 f#5@3 a5@3 c#6@3 a5@3 f#5@3 d5@3 f#5@3 e6@3 a5@3 c#6@3 a5@3,
  -!3 a4@3 e5@3 f#5@3 e5@3 c#5@3 -!3 a4@3 e5@3 f#5@3 e5@3 c#5@3 -!3 a4@3 e5@3 f#5@3 e5@3 c#5@3 -!3 a4@3 e5@3 f#5@3 e5@3 c#5@3,
  f#4@18 f#4@18 f#4@18 f#4@18,
  d4@18 d4@18 d4@18 d4@18
  `)
  .sound("piano")

const secondPart =
  note(`
  c#5@3 e5@3 g#5@3 c#6@3 g#5@3 e5@3 c#5@3 e5@3 g#5@3 c#6@3 g#5@3 e5@3 c#5@3 e5@3 g#5@3 c#6@3 g#5@3 e5@3 f5@3 g#5@3 d6@3 f5@3 g#5@3 d6@3,
  a4@18 a4@18 a4@18 -!3 f4@3 g#4@3 a4@3 g#4@3 f4@3,
  -!9 a4@3 -!15 a4@3 -!15 a4@3 -!24,
  -!3 e4@3 g#4@3 -!3 g#4@3 e4@3 -!3 e4@3 g#4@3 -!3 g#4@3 e4@3 -!3 e4@3 g#4@3 -!3 g#4@3 e4@3 -!18,
  c4@18 c4@18 c4@18 c4@18
  `)
  .sound("piano")

const tempo = 60 / 9.6

main: arrange(
    [1, intro],
    [1, firstPart],
    [1, secondPart],
    [1, firstPart],
    [1, secondPart],
  ).cpm(tempo)
   .adsr(".1:0:1:.5")
   .transpose(-12)
   .gain(2)
