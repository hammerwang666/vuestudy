/**
 * 反馈页
 */
'use strict';
var template = require('ejs'),
  tpl = {
    main: __inline('test1.tpl')
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
  var Person = ripple(template.render(tpl.main)).attr('name',{
    required:true,
    type:'string'
  });
  var person = new Person({
    name:'tom'
  });
 // $root && $root.remove();
  person.appendTo(document.body);
  person.name = "jack";
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