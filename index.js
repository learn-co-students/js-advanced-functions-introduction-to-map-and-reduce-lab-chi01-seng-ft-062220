function mapToNegativize(sourceArray) {
    let negativeNums = []
    sourceArray.forEach(number => {
        negativeNums.push(number * -1)
    })
    return negativeNums
}
function mapToNoChange(sourceArray) {
    // let duplicate = []
    // sourceArray.forEach(number => {
    //     duplicate.push(number)
    // })
    return sourceArray
}
function mapToDouble(sourceArray){
    let doubledSourceArray = []
    sourceArray.forEach(number => {
        doubledSourceArray.push(number * 2)
    })
    return doubledSourceArray
}

function mapToSquare(sourceArray){
    let squares = []
    for(let i=0; i < sourceArray.length; i++){
        squares.push(sourceArray[i]**2)
    }
    return squares
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for(let i=0; i<sourceArray.length; i++){
        total = total + sourceArray[i]
    }
    return total 
}

function reduceToAllTrue(sourceArray){
    for(let i=0; i<sourceArray.length; i++){
        if (!sourceArray[i]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(let i=0; i<sourceArray.length; i++){
        if (sourceArray[i]) {
            return true
        }
    }
    return false
}