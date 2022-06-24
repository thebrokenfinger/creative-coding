let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

/* ctx.fillStyle = "papayawhip";
ctx.fillRect(100, 100, 400, 400); */

// explicit instructions
ctx.lineWidth = 4;
ctx.beginPath();
ctx.rect(100, 100, 400, 400);
ctx.stroke();

ctx.beginPath();
ctx.arc(300, 300, 100, 0, 2 * Math.PI);
ctx.stroke();
