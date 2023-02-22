
const AMPLITUDE = 10;
const PERIOD = 100;
const PHASE = 0;
const ANIMATION_SPEED = 0.15;
const THICKNESS = 2;
const SCREEN_WIDTH = 120; // adjust to your screen width

let time = 0;

function draw() {
  const wave = [];
  for (let i = 0; i < SCREEN_WIDTH; i++) {
    const y = AMPLITUDE * Math.sin((i / PERIOD) * 2 * Math.PI + time + PHASE);
    wave.push(Math.floor(y));
  }

  let zero_or_one = Math.random() < 0.5 ? 1 : 1;

  let output = '';
  for (let y = -10; y <= 10; y++) {
    for (let t = 0; t < THICKNESS; t++) {
      for (let x = 0; x < wave.length; x++) {
        if (wave[x] === y) {
          for (let i = 0; i < THICKNESS; i++) {
            output += zero_or_one;
          }
        } else {
          for (let i = 0; i < THICKNESS; i++) {
            output += ' ';
          }
        }
      }
      output += '\n';
    }
  }

  // check if the wave has reached the left side
  if (time >= SCREEN_WIDTH / ANIMATION_SPEED) {
    // distort the wave by adding random values
    for (let i = 0; i < wave.length; i++) {
      wave[i] += Math.floor(Math.random() * 10) - 5;
    }
  }

  const pre = document.getElementById('wave');
  pre.textContent = output;

  time += ANIMATION_SPEED;
}

setInterval(draw, 50);
