const ElectronMainConfig = require('./webpack.main.config.js');
const ElectronRendererConfig = require('./webpack.renderer.config.js');

module.exports = [ElectronMainConfig, ElectronRendererConfig];
