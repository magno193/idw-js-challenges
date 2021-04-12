/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
  if (htmlTemplate === '') {
    return { width: 0, height: 0 }
  }

  const regex = /height:\s\d+|width:\s\d+/g;
  let matchedString = htmlTemplate.match(regex);
  let toReturn = {}
  matchedString.forEach((str, index) => {
    const res = str.split(': ');
    str.height
    str = { [res[0]]: Number(res[1]) };
    // Assign only the first 2
    if (!(index === 2)) {
      Object.assign(toReturn, str);
    }
  });
  return toReturn;
}

module.exports = extractSize;


