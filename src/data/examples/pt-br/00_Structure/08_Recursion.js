/*
 *@name Recursion
 *@description Uma demonstração de recursão, que significa funções chamando a si mesmas.
 * Uma função recursiva precisa possuir uma condição terminal, sem esta condição, a função
 * vai entrar em um loop infinito. Perceba como a função drawCircle() chama a si mesma
 * no fim do seu bloco. E continua a fazer isto até que a variável "level" seja
 * igual a 1.
 */

function setup() {
  createCanvas(720, 560);
  noStroke();
  noLoop();
}

function draw() {
  drawCircle(width / 2, 280, 6);
}

function drawCircle(x, radius, level) {
  // 'level' é a variável que finaliza a recursão uma vez que chega
  // a um determinado valor (aqui, 1). Se a condição terminal não for
  // especificada, a função recursiva continua chamando a si mesma várias vezes
  // até que acabe o espaço da pilha (stack) - resultado não favorável!
  const tt = (126 * level) / 4.0;
  fill(tt);
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {  
    // 'level' decreases by 1 at every step and thus makes the terminating condition
    // 'level' diminui na razão de 1 para cada passo e assim faz com que a condição terminal
    // seja atingível
    level = level - 1;  
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}
