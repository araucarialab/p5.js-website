/*
 * @name No Loop
 * @description A função noLoop() provoca que a função draw() seja executada apenas uma vez.
 * Sem chamar noLoop(), o código dentro de draw() é executado continuamente.
 */
let y;

// As instruções na função setup()
// executam uma vez quando o programa é iniciado
function setup() {
  // createCavnas deve ser a primeira instrução
  createCanvas(720, 400);
  stroke(255); // Define o cor da linha a ser desenhada como branco
  noLoop();

  y = height * 0.5;
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
