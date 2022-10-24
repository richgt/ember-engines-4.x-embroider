const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'child2',
  lazyLoading: {
    enabled: true,
  },
});
