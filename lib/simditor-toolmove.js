(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-toolmove', ["jquery","simple-module","simditor"], function (a0,b1,c2) {
      return (root['ToolMove'] = factory(a0,b1,c2));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simple-module"),require("simditor"));
  } else {
    root['ToolMove'] = factory(jQuery,SimpleModule,Simditor);
  }
}(this, function ($, SimpleModule, Simditor) {

var ToolMove,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ToolMove = (function(superClass) {
  extend(ToolMove, superClass);

  function ToolMove() {
    return ToolMove.__super__.constructor.apply(this, arguments);
  }

  ToolMove.pluginName = 'ToolMove';

  ToolMove.prototype.opts = {
    toolmove: false
  };

  ToolMove.prototype._init = function() {
    this.editor = this._module;
    if (!this.opts.toolmove) {
      return;
    }
    return this.editor.wrapper.find('.simditor-toolbar').appendTo($(this.opts.toolmove));
  };

  return ToolMove;

})(SimpleModule);

Simditor.connect(ToolMove);

return ToolMove;

}));
