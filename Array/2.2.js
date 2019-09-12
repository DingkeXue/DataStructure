/*
* 对数组进行封装
* @param capacity 数组的大小
* */
class Array {
    constructor(capacity=10) {
        this.data = new Array(capacity);
        this.size = 0;
    }

    // 获取数组长度
    getSize() {
        return this.size;
    }

    // 获取数组的容量
    getCapacity() {
        return this.data.length;
    }

    // 判断数组是否为空
    isEmpty() {
        return this.size = 0;
    }
}
