const synth1 = note(`
e3 - b3 - g#3 - e4 - b3 - g#3 - a4 - b3 - g#3 - e4 - b3 - e3 - e4 - b3 - g#3 - g#4 - e3 - b3 - g#3 - e4 - b3 - e3 - a4 - b3 -
g#3 - e4 - b3 - e3 - g#4 - b3 - g#3 - b4 - e3 - b3 - g#3 - e4 - b3 - g#3 - a4 - b3 - g#3 - e4 - b3 - e3 - e4 - b3 - g3 - g#4 -
e3 - b3 - g#3 - e4 - b3 - e3 - a4 - b3 - g#3 - e4 - b3 - e3 - g#4 - b3 - g#3 - b4 -
`)
  .sound('sine')
  .room(.5)
  .adsr('.02:.2:.1:.6');

const synth2 = note('e2@16 e2@16 c2@16 d2@16 e2@16 e2@16 a2@16 c3@16')
  .sound('triangle')
  .lpf(400)
  .hpf(100);

const synth = stack(synth1, synth2);

const guitar = note(`
b3@32 c4@16 d4@16 e4@32 -!16 c4@16,
g#3@32 g3@16 a3@16 b3@32 a3@16 g3@16,
e3@32 e3@16 e3@16 e3@32 e3@16 e3@16,
b2@32 c3@16 d3@16 -!32 a2@16 g2@16,
-!112 c3@16
`)
  .sound('gm_distortion_guitar:0')
  .transpose(-12)
  .adsr('0:2:.4:.2')
  .gain(.3)
  .lpf(2000);

const tempo = 60 / 19.2;

main: stack(
  synth,
  guitar,
)
  .cpm(tempo)
  .gain(32)
  ._punchcard({vertical: true, fold: false});