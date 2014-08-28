__inline('lib/scrat.js');

require.config(__FRAMEWORK_CONFIG__);
require.async([
  'page'
], function (page) {
  page.start('index');
});