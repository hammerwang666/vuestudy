/**
 * Vue.js教程 (2) : 指令 Directives
 */
'use strict';
var template = require('ejs'),
  tpl = {
    main: __inline('test2.tpl')
  },

  page = {},
  $root;


page.show = function () {
  this.load();
  $root.show();

};

page.load = function () {
  $root = $(template.render(tpl.main)).appendTo(document.body);
  Vue.directive('disable', function (value) {
    this.el.disabled = !!value
  })
  var demo = new Vue({
    el: '#demo',
    data: {
      disabled: false
    }
  })
};

module.exports = page;