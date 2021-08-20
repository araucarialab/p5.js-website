/*
 * @name Create Graphics
 * @description Cria e retorna um novo objeto p5.Renderer. Use esta
 * classe caso você precise desenhar em um buffer gráfico desvínculado da tela. Os dois parâmetros
 * definem a largura e altura em pixels.
 */

let pg;

function setup() {
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  //Desenha o buffer gráfico desvínculado da tela com image()
  image(pg, 150, 75);
}
