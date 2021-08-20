/*
 * @name Redraw
 * @description A função redraw() faz o draw executar uma vez. Neste exemplo,
 * draw() é executada toda vez que o mouse é clicado.
 */

let y;

// As instruções na função setup()
// executam uma vez quando o programa inicia
function setup() {
  createCanvas(720, 400);
  stroke(255);
  noLoop();
  y = height * 0.5;
}

// As instruções em draw() são executadas até que
// o programa seja parado. Cada instrução é executada em
// sequência e depois que a última linha é lida, a primeira
// linha é executada novamente.
function draw() {
  background(0);
  y = y - 4;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed() {
  redraw();
}
