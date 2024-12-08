const path = require('path');

function resolvePath(basePath, relativePath) {
  if (!basePath || !relativePath) {
    return process.cwd();
  }
  return path.resolve(basePath, relativePath);
}

function getProjectRoot() {
  return process.cwd();
}

function sanitizePath(inputPath) {
  if (!inputPath) {
    return getProjectRoot();
  }
  return path.normalize(inputPath);
}

module.exports = {
  resolvePath,
  getProjectRoot,
  sanitizePath
};