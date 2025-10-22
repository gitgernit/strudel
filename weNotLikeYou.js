const melodies = [
  note(`[
    f5 f#5 f5 - f5 f#5 f5 - f5 f#5 f5 - f5 f#5 f5 - 
    a#5 - a#5@2 a#5 - g#5@2 f5 f#5 f5 - -!4
  ] / 8`)
  .transpose(-32)
  .speed(.5)
  .sound("strudel_sounds"),

  note("[a#4@3 g#4@3 g#4@3 -!7 a#4 -!2 g#4@3 -!10] / 8")
  .sound("piano"),

  note("[f#4@3 -!6 f4 f#4 f4 -!4 f#4@3 -!6 f4 f#4 f4 -!4] / 8")
  .sound("piano"),

  note("[-!3 c#4@3 -!3 c#4@7 -!3 c#4@3 d#4@3 -!7] / 8")
  .sound("piano"),

  note("[-!6 b3@3 -!7 a#3 -!15] / 8")
  .sound("piano"),

  note("[-!28 f5@4] / 8")
  .sound("strudel_sounds")
  .transpose(-32)
  .gain(2)
  .postgain(.8)
  .speed(.3)
]

$vox: sound("strudel_sounds")
  .speed(sine.range(1, .8))
  .slow(1.5)
  .postgain(.9)
  .hush()

main$: stack(
  ...melodies
)
  .transpose("-3")
  .cpm("80")
  ._punchcard()
  ._scope()

/*
 .'/,-Y"     "~-.
 l.Y             ^.
 /\               _\_      "п си хо те ра пе вт
i            ___/"   "\     инс т ру ме нт ка к
|          /"   "\   o !    на р ко ди ле р le le le"
l         ]     o !__./
 \ _  _    \.___./    "~\
  X \/ \            ___./
 ( \ ___.   _..--~~"   ~`-.
  ` Z,--   /               \
    \__.  (   /       ______)
      \   l  /-----~~" /      -petya
       Y   \          /
       |    "x______.^
       |           \
       j            Y
*/
