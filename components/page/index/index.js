/**
 * 反馈页
 */
'use strict';
var template = require('ejs'),
  tpl = {
    main: __inline('index.tpl')
  },

  page = {},
  $root,
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
  $root && $root.remove();
  $root = $(template.render(tpl.main)).appendTo('body');
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