/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
 * entre valores do conjunto que resultem na soma do número alvo.
 * 
 * Observações:
 * 
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *  
 *  combinate([2, 3, 5], 8) retornando
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]  
 *       [3,5]
 *       [5,3]
 *   ]
 * 
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 * 
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 * 
 * 
 * Seguem mais alguns exemplos do retorno esperado:
 * 
 *  combinate([2, 3, 5], 8) deve retornar
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
*
*    outro exemplo: 
*
*    combinate([2, 3, 6, 7], 7) retorna
*
*    [
*       [2, 2, 3],
*       [7]
*    ]
 */
/**
 * 
 * @param {number[]} set 
 * @param {number} target 
 * @return {number[][]}
 */
const combinate = (set, target) => {
  if (target < 0) {
    throw new Error(`{target} should be a positive number`);
  }
  if (set.some(n => n < 0)) {
    throw new Error(`numbers inside the {set} array should be positive`);
  }
  // Problem found at https://leetcode.com/problems/combination-sum/

  // Sort the array
  set = set.sort((a, b) => a - b);
  // Remove duplicates
  set = [...new Set(set)];

  const finalCombination = [];

  // Create a function to do recursive backtracking
  /**
   * 
   * @param {number[]} tmpArray 
   * @param {number} index 
   */
  const combine = (tmpArray, index) => {
    for (let i = index; i < set.length; i++) {
      tmpArray.push(set[i]);
      const sumArr = tmpArray.reduce((acc, val) => acc + val);

      if (sumArr === target) finalCombination.push(tmpArray.map(n => n));
      // Until the sumArr is less then the target execute the function again
      if (sumArr < target) combine(tmpArray, i);

      tmpArray.pop();
    }
  };

  // Execute the function the first time
  combine([], 0);
  return finalCombination;
}

module.exports = combinate;
