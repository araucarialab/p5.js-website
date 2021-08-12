/*
 * @name Loop
 * @description O código dentro da função draw() executa continuamento do topo
 * até o fundo, até que o programa seja parado.
*/
let y = 100;

// As instruções na função setup()
// executam uma vez quando o programa é iniciado
function setup() {
  createCanvas(720, 400); // Tamanho deve ser a primeira instrução
  stroke(255); // Define o cor da linha a ser desenhada como branco
  frameRate(30);
}
// As instruções dentro de draw() são executadas até que
// o programa seja parado. Cada instrução é executada em
// sequência e depois que a última linha é lida, a primeira
// linha é executada novamente.
function draw() {
  background(0); // Define a cor do fundo como preto
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
