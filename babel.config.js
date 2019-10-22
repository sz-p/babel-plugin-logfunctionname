module.exports = function (api) {
  api.cache(true);
  const presets = ["@babel/preset-env"];
  const plugins = ['./lib/index'];
  return {
    presets,
    plugins
  };
} 