let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.lineWidth = 4;

// square dimensions
const width = 60;
const height = 60;
const gap = 20;

function renderCanvasSquares() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = 100 + (width + gap) * i;
      let y = 100 + (height + gap) * j;

      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();

      // random inner squares
      if (Math.random() > 0.5) {
        ctx.beginPath();
        ctx.rect(x + 8, y + 8, width - 16, height - 16);
        ctx.stroke();
      }
    }
  }
}

// uncomment the code below to watch squares rendering at random
/* setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderCanvasSquares();
}, 600); */

renderCanvasSquares();
