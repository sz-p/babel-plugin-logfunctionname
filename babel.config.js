module.exports = function (api) {
  api.cache(true);
  const presets = ["@babel/preset-env"];
  const plugins = [['./lib/index', {
    // enable: false,
    // functionWorkingHint: 'functionWorking: ',
    excludeFunctionsName: ['doNotLogThis', /^excludeByRegExp/],
    excludeFilesName: ['subCode', /node_modules/]
  }]];
  return {
    presets,
    plugins
  };
} 