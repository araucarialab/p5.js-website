/*
 * @name Coordinates
 * @description Todas as formas geométricas desenhadas na tela possuem uma posição que
 * que é especificada como uma coordenada. Todas as coordenas são medidas como a distâncias da
 * da origem (origin) em unidades de pixels. A origem [0, 0] é a coordenada do
 * canto superior esquerdo da janela, e a coordenada no canto inferior direito é [width-1
 * height-1].
 */
function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  // Define a tela para ter 720 pixels de largura e 400 pixels de altura
  createCanvas(720, 400);
}

function draw() {
  // Define o fundo para ser preto e desabilita o preenchimento de cor
  background(0);
  noFill();

  // Os dois parâmetros do método point(), cada um especifica as coordenadas.
  // O primeiro parâmetro é a coordenada X e o segundo é o Y
  stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);

  // Coordenadas são usadas para desenhas todas as formas geométricas, não apenas pontos.
  // Parâmetros para diferentes funções são usadas para diferentes
  // proposito. Por exemplo, os primeiros dois parâmetros para line()
  // especificam as coordenadas do primeiro ponto de extremidade e os segundos
  // dois parâmetros especificam o segundo ponto de extremidade
  stroke(0, 153, 255);
  line(0, height * 0.33, width, height * 0.33);

  // Por padrão, os primeiros dois parâmetros de rect() são as
  // coordenadas do canta superior esquerdo, e o segundo par
  // é a largura e a altura
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
}
