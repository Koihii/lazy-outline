import { outlineArray } from './engines'
import { onProcessingConfig } from './helpers'

export interface IConfig {
  margin?: Array<number>
  marginRight?: number
  marginLeft?: number
  marginTop?: number
  marginBottom?: number
  padding?: Array<number>
  paddingRight?: number
  paddingLeft?: number
  paddingTop?: number
  paddingBottom?: number
}

/*
 * Main function for lazyOutline.
 *
 * @param {Object} obj, the given object of user.
 * @param {Object} config, the config setting for outline.
 * */
function lazyOutline(
  obj: any,
  config: IConfig = { margin: [2, 2], padding: [1, 2] },
) {
  const processedConfig = onProcessingConfig(config)

  const result = outlineArray(obj, processedConfig)

  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
}

export default lazyOutline
