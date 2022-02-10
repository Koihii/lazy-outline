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
}

for (const key of Object.keys(TEST_CASE)) {
  lazyOutline(TEST_CASE[key])
}
