const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context: ctx, width, height }) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = width * 0.01;

    // square dimensions from [basic-canvas]
    // canvas = 600 x 600
    // width = height = 60, gap = 20
    // initial x = initial y = 100
    // we turn it into % for this example of canvas dim 1080x1080

    // square dimensions
    const squareW = width * 0.1;
    const squareH = height * 0.1;
    const squareGap = width * 0.03;
    const ix = width * 0.17; // initial x
    const iy = height * 0.17; // initial y

    const offset = width * 0.02; /* offset for inner square */
    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = 100 + (squareW + squareGap) * i;
        y = 100 + (squareH + squareGap) * j;

        ctx.beginPath();
        ctx.rect(x, y, squareW, squareH);
        ctx.stroke();

        // random inner squares
        if (Math.random() > 0.5) {
          ctx.beginPath();
          ctx.rect(
            x + offset / 2,
            y + offset / 2,
            squareW - offset,
            squareH - offset
          );
          ctx.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
