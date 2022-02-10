/*
 * calculate the maximum length's array of strings.
 *
 * @param {Object} obj, the array of strings.
 * @returns {string} max, the maximum string.
 * */
function findMax(obj: Array<string>): string {
  let max = obj[0]
  for (let i = 1; i < obj.length; i++) {
    max = max.length > obj[i].length ? max : obj[i]
  }

  return max
}

export { findMax }
