const identity = function (input) {
    return input
};

const first = function (arr, n) {
    let temp = []

    if (n === undefined) {
        return arr[0]
    } else if (arr.length < n) {
        return arr
    }
    for (let i = 0; i < n; i++) {

        temp.push(arr[i])

    }

    return temp

};

const last = function () {

};

const each = function () {

};

const indexOf = function () {

};

const map = function () {

}

const filter = (collection, callback) => {
    let result = []
    for (let item of collection) {
        if (callback(item)) {
            result.push(item)
        }
    }
    return result
}

const reject = (collection, callback) => {
    let result = []
    for (let item of collection) {
        if (!callback(item)) {
            result.push(item)
        }
    }
    return result
}

const uniq = (collection) => {
    let result = []
    for (let item of collection) {
        if (result.indexOf(item) === -1) {
            result.push(item)
        }
    }
    return result
}

const reduce = (collection, callback, initialVal) => {
    let accumulator = initialVal
    for (let key in collection) {
        if (accumulator === undefined) {
            accumulator = collection[key]
        }
        accumulator = callback(accumulator, collection[key])
    }
    return accumulator
}

module.exports = {
    identity,
    first,
    last,
    each,
    indexOf,
    map,
    filter,
    reject,
    uniq,
    reduce
};