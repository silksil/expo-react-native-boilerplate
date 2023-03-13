// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('@expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

// To assure that the Firebase JS SDK is bundled correctly.
defaultConfig.resolver.assetExts.push('cjs')

module.exports = defaultConfig
