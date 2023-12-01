// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)
// Remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs']
module.exports = config
