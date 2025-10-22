// total n = 32

$: sound("strudel_sounds")
  .slow(1.5)
  .postgain(.5)


$: note("[f5 f#5 f5 - f5 f#5 f5 - f5 f#5 f5 - f5 f#5 f5 - a#5 - a#5@2 a#5 - g#5@2 f5 f#5 f5 - f5@4] / 8")
  .sound("piano")
  .transpose(-3)
  .cpm(80)
  ._punchcard()

$: note("[a#4@3 g#4@3 g#4@3 -!7 a#4 -!2 g#4@3 -!10] / 8")
  .sound("piano")
  .transpose(-3)
  .cpm(80)
  ._punchcard()

$: note("[f#4@3 -!6 f4 f#4 f4 -!4 f#4@3 -!6 f4 f#4 f4 -!4] / 8")
  .sound("piano")
  .transpose(-3)
  .cpm(80)
  ._punchcard()

$: note("[-!3 c#4@3 -!3 c#4@7 -!3 c#4@3 d#4@3 -!7] / 8")
  .sound("piano")
  .transpose(-3)
  .cpm(80)
  ._punchcard()
