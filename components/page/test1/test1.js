/**
 * 教程1 超简单的mvvm
 */
'use strict';
var template = require('ejs'),
  tpl = {
    main: __inline('test1.tpl')
  },

  page = {},
  $root,
  data = {
    message: 'Hello Vue.js!'
  },
  _state;


page.show = function (state) {
  this.load();
  $root.show();

};

page.hide = function () {
  unbindEvent();
  $root.hide();
  this.unload();
};

page.load = function () {
  $root = $(template.render(tpl.main)).appendTo(document.body);
  var demo = new Vue({
    el: '#demo',
    data: data
  })
};

page.unload = function () {
  $root && $root.remove();
  $root = null;
};

function bindEvent() {
}

function unbindEvent() {
}


module.exports = page;