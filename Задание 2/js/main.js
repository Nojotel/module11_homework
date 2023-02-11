function anyNumber(number) {
    let result ='Простое число'
    if (number > 1000) {
        result = 'Данные неверны!'
    } else if (number === 0 || number === 1) {
        result = `Введено число ${number}`
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = 'Составное число'
                break
            }
        }
    }
    return result
}
console.log(anyNumber(465))
