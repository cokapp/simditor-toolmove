simditor-toolmove
=================

[Simditor](http://simditor.tower.im/) 扩展，将工具栏移到别处【目前会导致toolbarFloat失效】。

### 如何使用

在 Simditor 的基础上额外引用 simditor-toolmove 的脚本。

```html
<script src="/assets/javascripts/simditor-toolmove.js"></script>
```

**配置**

在 Simditor 初始化时，直接写入配置信息中，其中onClick执行上下文为`当前按钮`
```javascript
    new Simditor({
        textarea: textareaElement,
        ...
        toolmove: '.cok-editor-toolbar'
    })
```
