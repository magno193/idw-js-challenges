/*
 * Calcular o MDC
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que calcula e retorna o MDC
 * (máximo divisor comum) entre dois números.
 * Para isso você pode usar as seguintes informações:
 *
 * 1. O MDC de um número N com 0 é o próprio N.
 *
 * 2. O MDC entre dois números M e N, onde M > N é
 * igual ao MDC de N e do resto da divisão de M por N.
 *
 * Você pode considerar que nas entradas dos testes
 * a > b sempre.
 */

const MDC = (m, n) => {
  if (m === 0)
    return n;
  if (n === 0)
    return m;

  while (n !== 0) {
    let remnant = m % n;
    m = n;
    n = remnant;
  }
  return m;
};

module.exports = MDC
