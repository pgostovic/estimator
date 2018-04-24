/**
 * This is used by jest to allow it to basically ignore certain files.
 */

module.exports = {
  process() {
    return 'module.exports = {};';
  },
};
