const Joystick = require('./lib/joystick');
const ansi = require('ansi-escapes');
const joystick = new Joystick(0, 0, 350);

function axisUpdate (axis) {
  console.log(ansi.cursorTo(0, axis.number));
  console.log(`${ansi.eraseEndLine}Axis ${axis.number}: ${printBar(axis.value)}`);
  // console.log(ansi.cursorTo(0,0));
}

function printBar(n) {
  var width = 60;
  n = n/100 * width;
  let output = '[';
  let i = -width;
  for (; i < n; i++ ) output += '-';
  output += '0';
  i++;
  for (; i <= width; i++) output += '-';
  output += ']';
  return output;
}

const parse = {};

parse.button = b => {
  if (b.value) console.log(`Button number ${b.number} pressed`);
};

parse.axis = a => {
  a.value = Math.floor(a.value / 327.67);
  axisUpdate(a);
};
console.log(ansi.eraseScreen);
// joystick.on('button', parse.button);
joystick.on('axis', parse.axis);
