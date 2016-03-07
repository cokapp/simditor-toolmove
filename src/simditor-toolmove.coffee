class ToolMove extends SimpleModule

  @pluginName: 'ToolMove'

  opts:
    toolmove: false

  _init: () ->
    @editor = @_module
    return unless @opts.toolmove

    @editor.wrapper.find('.simditor-toolbar').appendTo($(@opts.toolmove))

Simditor.connect ToolMove