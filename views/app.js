__inline('lib/scrat.js');
__inline('lib/ripple.js');
__inline('lib/wave.js');

require.config(__FRAMEWORK_CONFIG__);
require.async([
  'page'
], function (page) {
  page.start('index');
});