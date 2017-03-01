var arr = [1,2,3]

arr.__proto__ = {
    addClass: function () {
        console.log('this is addClass')
    },
    concat: Array.prototype.concat,
    push: Array.prototype.push
}

arr.push(4)