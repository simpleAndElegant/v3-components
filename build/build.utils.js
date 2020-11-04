const path = require('path');
const fs = require('fs');

const resolve = (dir) => path.join(__dirname, '../', dir);
const WebpackMerge = require('webpack-merge');
const webpack = require('webpack');

const packageJson = require('../package');

const { join } = path;

function camelCase(name) {
  const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
  const MOZ_HACK_REGEXP = /^moz([A-Z])/;
  return name
    .replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => (offset ? letter.toUpperCase() : letter))
    .replace(MOZ_HACK_REGEXP, 'Moz$1');
}

module.exports = {
  path,
  fs,
  camelCase,
  isProduction: process.env.NODE_ENV === 'production', // 当前是否为生产模式
  packageName: packageJson.name, // 包名
  version: packageJson.version, // 版本
  webpack,
  WebpackMerge,
  resolve,
  join,
};
