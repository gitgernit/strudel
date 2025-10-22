/*
i be yelling out gang gang
are you gang bang
shut the fuc up
Nope
*/

const notes = [
  "-!4 a#5 -!7 a#5 -!7 a#5 -!15 c#6 b5 a#5 -!17 b5 - a#5 -!5",
  "f#5@4 f#5 - f#5@2 f#5@4 -!2 f#5@2 -!4 f#5 f5 f#5@2 -!8 f5@4 -!4 f5 - f#5@3 f#5@3 f#5@4 -!3 f#5!2 - f#5 - f#5 f#5@3",
  "-!8 e5@4 e5!2 e5@2 d#5@6 d#5@2 d5@4 -!20 d#5@4 -!4 d#5 - d#5 - d#5 d#5@3",
  "c#5@4 c#5!2 c#5@2 c#5@4 c#5 -!11 b4@4 c#5 b4@3 c#5@4 -!4 c#5 - c#5@3 c#5@3 b4@4 -!8 b4 b4@3",
  "a#4@8 a#4@8 a#4@8 -!8 a#4@4 -!6 a#4@3 a#4@3 -!16",
  "f#4@8 e4@8 f#4@2 - f#4@5 f#4@4 -!2 f#4 - f4@4 -!28",
  "-!3 c#4 -!7 c#4 -!4 b3@8 b3@4 -!3 d4 a#3@4 -!3 d#4!2 - d#4@3 d#4@3 g#3@4 -!8 c#4 c#4@3",
  "f#3@8 f#3@8 -!24 d#3 - d#3@3 d#3@3 -!3 d#3 -!12",
  "-!48 g#2@4 g#2 a#2 b2 c3 c#3 - c#3 - c#3 c#3@3"
].map((pattern) => note(pattern).sound("piano"))

const tempo = 60 / 11.3
const intro = sound("infinity_stones")

main: arrange(
  [1, intro],
  [18, stack(
    ...notes
  ).cpm(tempo)]
).gain(16)
  ._punchcard()
