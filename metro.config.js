// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

// Настраиваем для поддержки SVG файлов
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

// Иcключаем SVG из assetExts и добавляем в sourceExts
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== 'svg'
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'svg',
];

// Оставляем поддержку cjs
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;