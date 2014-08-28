/**
 * Vue.js 教程 (4) : 侦听事件
 */
'use strict';
var template = require('ejs'),
  tpl = {
    main: __inline('test4.tpl')
  },

  page = {},
  $root;


page.show = function () {
  this.load();
  $root.show();

};

page.load = function () {
  $root = $(template.render(tpl.main)).appendTo(document.body);
  new Vue({
    el: '#demo',
    data: {
      n: 1
    },
    methods: {
      onClick: function (e) {
        // e是原生的DOM事件对象
        // this 指向该ViewModel实例
        this.n++
      }
    }
  })
};

module.exports = page;