function myEach(collection, callback) {
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    else {
        newCollection = [...collection]
    }
    for (const element of newCollection) {
        callback(element)
    }
    return collection
}


function myMap(collection, callback) {
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    else {
        newCollection = [...collection]
    }
    let returnCollection = []
    for (const element of newCollection) {
        returnCollection.push(callback(element))
    }
    return returnCollection;
}

function myReduce(collection, callback, acc) {
    
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    else {
        newCollection = [...collection]
    }

    let startingValue = 0
    if (acc) {
        startingValue = acc
        for (const element of newCollection) {
            startingValue = callback(startingValue, element, newCollection)
        }
    }
    else {
        startingValue = newCollection[0]
        for (let i=1; i<newCollection.length; i++) {
            startingValue = callback(startingValue, newCollection[i], newCollection)
        }
    }

    return startingValue
}

function myFind(collection, predicate) {

    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    else {
        newCollection = [...collection]
    }

    for (const element of newCollection) {
        if (predicate(element)) {
            return element
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    else {
        newCollection = [...collection]
    }

    let returnCollection = []
    for (const element of newCollection) {
        if (predicate(element)) {
            returnCollection.push(element)
        }
    }

    return returnCollection
}

function mySize(collection) {
    let newCollection;
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    else {
        newCollection = [...collection]
    }

    let i = 0;
    for (const element of newCollection) {
        i++
    }

    return i
}

function myFirst(array, n) {
    if (n) {
        let returnCollection = []
        for (let i=0; i<n; i++) {
            returnCollection.push(array[i])
        }
        return returnCollection
    }
    else {
        return array[0]
    }
}

function myLast(array, n) {
    if (n) {
        let returnCollection = []
        let j = array.length - 1
        for (let i=0; i<n; i++) {
            returnCollection.unshift(array[j])
            j--;
        }
        return returnCollection
    }
    else {
        return array[array.length-1]
    }
}

function myKeys(object) {
    let returnCollection = []
    for (const element in object) {
        returnCollection.push(element)
    }
    return returnCollection
}

function myValues(object) {
    let returnCollection = []
    for (const element in object) {
        returnCollection.push(object[element])
    }
    return returnCollection
}