import { IProcessedConfig } from './helpers'
import { findMax } from './algorithms'

/*
 * calculate the rest length.
 *
 * @param {number} length1, the first length of target string.
 * @param {number} length2, the max length.
 * @returns {Array<string>} the return array of strings.
 * */
function calculateLength(length1: number, length2: number): number {
  return length2 - length1
}

/*
 * crafting the string.
 *
 * @parma {Object} config, the configuration.
 * @param {number} restLength, the number to be added.
 * */
function onCraftingString(
  config: IProcessedConfig,
  restLength: number,
  target: string,
) {
  return `${' '.repeat(config.marginLeft)}|${' '.repeat(
    config.paddingLeft,
  )}${target}${' '.repeat(restLength)}|`
}

/*
 * engine for outlineArray function.
 *
 * @param {Object} obj, the object with Array type.
 * @param {number} max, the maximum character's length.
 * */
function engineOutlineArray(
  obj: Array<string>,
  array: Array<string>,
  maxLength: number,
  config: IProcessedConfig,
): void {
  if (config.marginTop) {
    for (let i = 0; i < config.marginBottom; i++) {
      array.push('')
    }
  }

  array.push(
    `${
      ' '.repeat(config.marginLeft) +
      '-'.repeat(maxLength + config.paddingLeft + 2)
    }`,
  )

  if (config.paddingTop) {
    for (let i = 0; i < config.paddingTop; i++) {
      array.push(
        `${
          ' '.repeat(config.marginLeft) +
          '|' +
          ' '.repeat(maxLength + config.paddingLeft) +
          '|'
        }`,
      )
    }
  }

  for (let i = 0; i < obj.length; i++) {
    const restLength = calculateLength(obj[i].length, maxLength)

    array.push(onCraftingString(config, restLength, obj[i]))
  }

  if (config.paddingBottom) {
    for (let i = 0; i < config.paddingBottom; i++) {
      array.push(
        `${
          ' '.repeat(config.marginLeft) +
          '|' +
          ' '.repeat(maxLength + config.paddingLeft) +
          '|'
        }`,
      )
    }
  }

  array.push(
    `${
      ' '.repeat(config.marginLeft) +
      '-'.repeat(maxLength + config.paddingLeft + 2)
    }`,
  )

  if (config.marginBottom) {
    for (let i = 0; i < config.marginBottom; i++) {
      array.push('')
    }
  }
}

/*
 * function for Array object.
 *
 * @param {Object} obj, the object with Array type.
 * @param {Object} config, the config object for outline.
 * @return {Object} array, the formatted array.
 * */
function outlineArray(
  obj: Array<string>,
  config: IProcessedConfig,
): Array<string> {
  const array: Array<string> = []

  // find item with max length.
  const max = findMax(obj)
  const maxLength = max.length + config.paddingRight

  // on pushing stuffs.
  engineOutlineArray(obj, array, maxLength, config)

  return array
}

export { outlineArray }
