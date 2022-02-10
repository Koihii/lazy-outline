const lazyOutline = require('../build/index')

const TEST_CASE = {
  case1: [
    'This is the first message',
    'This is the second message',
    'This is also the third message',
  ],
  case2: [
    'This is the test message',
    '  This line is 2 space ahead.',
    'This line is not space.',
  ],
  case3: [
    'This is the third message:',
    ' This line is 2 space ahead.',
    ' This line is also 2 space ahead.',
  ],
  case4: [
    'This is the fourth message:',
    '  This is the first line.',
    '  This is the second line.',
    '  This is the third line.',
    '  This is the fourth line.',
    '  This is the fifth line.',
    '  This is the sixth line.',
    '  This is the seventh line.',
    '  This is the eighth line.',
    '  This is the nineth line.',
    '  This is the tenth line.',
  ],
}

for (const key of Object.keys(TEST_CASE)) {
  lazyOutline(TEST_CASE[key])
}
