/**
 * 实现构造函数
 */
var Promise = function () {
    this.value = ''
    this.reason = ''
    this.status = 'pending'
    // 存储状态
    this.resolves = []
    this.rejects = []
}
/**
 * 原型上定义方法
 */
Promise.prototype.then = function (onFulfilled, onRejected) {

}

Promise.prototype.catch = function (onRejected) {

}

Promise.prototype.finally = function () {

}

/**
 * 直接在构造函数上定义
 */
Promise.all = function () {

}

Promise.race = function () {

}

Promise.reject = function () {

}

Promise.resolve = function () {
    
}