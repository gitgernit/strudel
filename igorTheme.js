const piano =
  note(`
  f5@8 f5@8 e5@8 e5@4 e5@4 -!2 f5@6 - f5@7 e5@8 -!2 e5@6,
  d5@8 d5@8 -!8 d5@4 d5@4 -!2 d5@6 - d5@7 -!10 d5@6,
  c5@8 c5@8 c5@8 c5@4 c5@4 -!2 c5@6 - c5@7 c5@8 -!8,
  -!16 b4@8 a#4@4 a#4@4 -!16 b4@8 -!2 a#4@6,
  a4@8 g#4@8 g4@8 g4@4 g4@4 -!9 g#4@7 g4@8 -!2 g4@6,
  d3@4 d4@2 g3@2 a#2@4 a#3@4 a2@4 a2@3 d3 - c3@3 c4@4 d4@2 d4@6
  a#3 -!3 a#3@2 g#3@2 a3@8 c3@2 -!3 c3@3,
  -!32 d3@2 -!6 a#2 -!23
  `)
  .sound("gm_piano:2")
  .transpose(-12)

const openHihats =
  sound("akaimpc60_oh")
  .struct("x x -!28 x -!15 x -!17")

const closedHihats =
  sound("alesissr16_hh")
  .struct(`
  -!2 x - x - x - x - x - x - x - x - x - x - x - x - x - x
  -!5 x - x - x - x - x - x -!3 x - x - x - x - x - x - x - x -
  `)

const rimShots =
  sound("rolandd110_rim")
  .struct(`
  -!4 x -!2 x -!5 x -!6 x -!2 x -!3 x -!2 x -!5 x -!2 x -!3 x -!2 x -!6 x -!10
  `)

const kicks =
  sound("akaimpc60_bd")
  .struct(`
  x!2 -!7 x!2 -!4 x!2 - x -!6 x!2 -!2 x -!2 x -!8 x!2 -!2 x -!2 x - x -!4 x!9
  `)

const drums = stack(
  openHihats,
  closedHihats,
  rimShots,
  kicks,
)

const tempo = 60 / 12

main: stack(
  piano.gain(12),
  drums.gain(10)
).cpm(tempo)
 ._pianoroll()
/*
____   __________________________________
\   \ /   /\_____  \__    ___/\_   _____/
 \   Y   /  /   |   \|    |    |    __)_
  \     /  /    |    \    |    |        \
   \___/   \_______  /____|   /_______  /
                   \/                 \/
   .___  ________ ________ __________
   |   |/  _____/ \_____  \\______   \
   |   /   \  ___  /   |   \|       _/
   |   \    \_\  \/    |    \    |   \
   |___|\______  /\_______  /____|_  /
               \/         \/       \/
*/
