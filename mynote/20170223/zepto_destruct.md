# Zepto destruct

### 1. 核心概念准备

1. constructor 与 instanceof
2. prototype 与 __proto__ 区别

### 2. zepto 最外层结构

```js
var Zepto = (function(){
    var $,
        zepto = {}
    // .....

    zepto.init = function(selector, context) {
        // function content
    }

    $ = function(selector, context) {
        return zepto.init(selector, context)
    }
    // .....

    return $
})()

window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto)

```

> #### 如何解构zepto.js？
> 1. 按函数来，从外到里，从主到次
> 2. 将你想结构的函数自己开始写，然后想想看为什么这里要用到这个方法，能帮助完成什么功能，进行实验，发现一些新奇的东西。

> #### 解构成果展示，将函数仿照 jQuery Destructor 仿一个出来！