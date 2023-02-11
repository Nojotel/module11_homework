function argument(numberFirst) {
    return function summ(numberTwo) {
        return numberFirst + numberTwo
    }
}
const result = argument(55)(100)
console.log(result)