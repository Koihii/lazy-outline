import { IConfig } from './lazyOutline'

export interface IProcessedConfig {
  marginTop: number
  marginRight: number
  marginBottom: number
  marginLeft: number
  paddingTop: number
  paddingRight: number
  paddingBottom: number
  paddingLeft: number
}

/*
 * this function handle the maximum value from configuration.
 *
 * @param {Objec} config, the given configuration for outline.
 * @returns {Object} handledConfig, the after reduced configuration.
 * */
function onReducingConfig(config: IConfig): IConfig {
  if (config?.margin) {
    for (let i = 0; i < config.margin.length; i++) {
      if (config.margin[i] > 4) {
        config.margin[i] = 4
      }
    }
  }

  if (config?.padding) {
    for (let i = 0; i < config.padding.length; i++) {
      if (config.padding[i] > 4) {
        config.padding[i] = 4
      }
    }
  }

  config.marginTop = config.marginTop
    ? config.marginTop > 4
      ? 4
      : config.marginTop
    : 0
  config.marginLeft = config.marginLeft
    ? config.marginLeft > 4
      ? 4
      : config.marginLeft
    : 0
  config.marginBottom = config.marginBottom
    ? config.marginBottom > 4
      ? 4
      : config.marginBottom
    : 0
  config.marginRight = config.marginRight
    ? config.marginRight > 4
      ? 4
      : config.marginRight
    : 0

  return config
}

/*
 * this function handle the item in configuration.
 *
 * @param {Object} config, the given configuration for outline.
 * @returns {Object} handledConfig, the after handled configuration.
 * */
function onHandlingConfig(config: IConfig): IProcessedConfig {
  // initiate the default config.
  const defaultConfig: IProcessedConfig = {
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
  }

  // on handling configuration.
  if (config.margin) {
    if (config.margin.length === 1) {
      defaultConfig.marginTop = config.margin[0]
      defaultConfig.marginLeft = config.margin[0]
      defaultConfig.marginBottom = config.margin[0]
      defaultConfig.marginRight = config.margin[0]
    } else if (config.margin.length === 2) {
      defaultConfig.marginTop = config.margin[0]
      defaultConfig.marginLeft = config.margin[1]
      defaultConfig.marginBottom = config.margin[0]
      defaultConfig.marginRight = config.margin[1]
    } else if (config.margin.length === 3) {
      defaultConfig.marginTop = config.margin[0]
      defaultConfig.marginLeft = config.margin[1]
      defaultConfig.marginBottom = config.margin[2]
      defaultConfig.marginRight = config.margin[1]
    } else {
      defaultConfig.marginTop = config.margin[0]
      defaultConfig.marginLeft = config.margin[1]
      defaultConfig.marginBottom = config.margin[2]
      defaultConfig.marginRight = config.margin[3]
    }

    // process the extend configuration.
    defaultConfig.marginTop = config.marginTop
      ? config.marginTop
      : defaultConfig.marginTop
    defaultConfig.marginLeft = config.marginLeft
      ? config.marginLeft
      : defaultConfig.marginLeft
    defaultConfig.marginBottom = config.marginBottom
      ? config.marginBottom
      : defaultConfig.marginBottom
    defaultConfig.marginRight = config.marginRight
      ? config.marginRight
      : defaultConfig.marginRight
  } else {
    defaultConfig.marginTop = config.marginTop ? config.marginTop : 0
    defaultConfig.marginLeft = config.marginLeft ? config.marginLeft : 0
    defaultConfig.marginBottom = config.marginBottom ? config.marginBottom : 0
    defaultConfig.marginRight = config.marginRight ? config.marginRight : 0
  }

  if (config.padding) {
    if (config.padding.length === 1) {
      defaultConfig.paddingTop = config.padding[0]
      defaultConfig.paddingLeft = config.padding[0]
      defaultConfig.paddingBottom = config.padding[0]
      defaultConfig.paddingRight = config.padding[0]
    } else if (config.padding.length === 2) {
      defaultConfig.paddingTop = config.padding[0]
      defaultConfig.paddingBottom = config.padding[0]
      defaultConfig.paddingLeft = config.padding[1]
      defaultConfig.paddingRight = config.padding[1]
    } else if (config.padding.length === 3) {
      defaultConfig.paddingTop = config.padding[0]
      defaultConfig.paddingLeft = config.padding[1]
      defaultConfig.paddingBottom = config.padding[2]
      defaultConfig.paddingRight = config.padding[1]
    } else {
      defaultConfig.paddingTop = config.padding[0]
      defaultConfig.paddingLeft = config.padding[1]
      defaultConfig.paddingBottom = config.padding[2]
      defaultConfig.paddingRight = config.padding[3]
    }

    // extend configuration.
    defaultConfig.paddingTop = config.paddingTop
      ? config.paddingTop
      : defaultConfig.paddingTop
    defaultConfig.paddingLeft = config.paddingLeft
      ? config.paddingLeft
      : defaultConfig.paddingLeft
    defaultConfig.paddingBottom = config.paddingBottom
      ? config.paddingBottom
      : defaultConfig.paddingBottom
    defaultConfig.paddingRight = config.paddingRight
      ? config.paddingRight
      : defaultConfig.paddingRight
  } else {
    defaultConfig.paddingTop = config.paddingTop ? config.paddingTop : 0
    defaultConfig.paddingLeft = config.paddingLeft ? config.paddingLeft : 0
    defaultConfig.paddingBottom = config.paddingBottom
      ? config.paddingBottom
      : 0
    defaultConfig.paddingRight = config.paddingRight ? config.paddingRight : 0
  }

  return defaultConfig
}

/*
 * this function's responsible for processing config values.
 *
 * @param {Object} config, the given configuration for outline.
 * @returns {Object} processedConfig, the after processed configuration.
 * */
function onProcessingConfig(config: IConfig): IProcessedConfig {
  /* [WARNING] add validation later. */

  /* */
  // first: check the maximum value.
  // second: process the configuration.
  return onHandlingConfig(onReducingConfig(config))
}

export { onProcessingConfig }
