/*
* 对数组进行封装
* @param capacity 数组的大小
* */
class Arrays {
    constructor(capacity) {
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

    // 在所有元素后面添加新元素
    addLast(e) {
        this.add(this.size, e);
    }

    // 在数组首部插入元素
    addFirst(e) {
        this.add(0, e);
    }

    // 在 index 位置插入 新元素 e
    add(index, e) {
        if (this.size === this.data.length) {
            throw 'Add failed. Array is full';
        }
        if (index < 0 || index > this.size) {
            throw 'Add failed. Index should >= 0 and <= size';
        }
        for(let i = this.size - 1; i >= index; i--) {
            this.data[i+1] = this.data[i];
        }
        this.data[index] = e;
        this.size++;
    }

    // 删除位于 index 的元素
    remove(index) {
        if (index < 0 || index > this.size) {
            throw 'Delete failed. Index is illegal';
        }
        let e = this.data[index];
        for(let i = index; i < this.size; i++) {
            this.data[i] = this.data[i+1];
        }
        this.size--;
        return e;
    }

    // 删除第一个元素
    removeFirst() {
        this.remove(0);
    }

    //删除最后一个元素
    removeLast() {
        this.remove(this.size-1);
    }

    // 获取 index 索引位置的元素
    get(index) {
        if (index < 0 || index >= this.size) {
            throw 'Get failed. Index is illegal';
        }
        return this.data[index];
    }

    // 设置 index 索引位置的元素
    set(index, e) {
        if (index < 0 || index >= this.size) {
            throw 'Get failed. Index is illegal';
        }
        this.data[index] = e;
    }

    // 查找数值是否在数组中
    contains(e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return true;
            }
        }
        return false;
    }

    // 查找数组数组中的某个元素
    find(e) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === e) {
                return i;
            }
        }
        return -1;
    }

    // 重新 toString 方法
    to_String() {
        let res = new String;
        for (let i = 0; i < this.size; i++) {
            res += this.data[i];
            if (i !== this.size - 1) {
                res += ',';
            }
        }
        return res;
    }
}

let arr = new Arrays(20);
for(let i = 0; i < 3; i++) {
    arr.addLast(i);
}
arr.addFirst(100);

console.log(arr.delete(1));
console.log(arr);
