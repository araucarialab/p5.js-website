/*
 * @name Width and Height
 * @description As variáveis 'width' e 'height' contem a
 * largura e a altura da janela de exibição como definida na função createCanvas().
 */
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(127);
  noStroke();
  for (let i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}
