module.exports = function toReadable (number) {
    let numberOne = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ],
        numberDecimal = [
      ' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ],
        numStr = String(number);
    if (number === 0) {
        return `zero`
    } else if (number < 20) {
        return numberOne[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return `${numberDecimal[numStr[0]]}`
        }
    return `${numberDecimal[numStr[0]]} ${numberOne[numStr[1]]}`
    } else if (number >= 100 && number < 1000) {
        let temp = number % 100;
        if (temp === 0) {
            return `${numberOne[numStr[0]]} hundred`
        } else if (numStr[1] === '0') {
            return `${numberOne[numStr[0]]} hundred ${numberOne[numStr[2]]}`
        } else if (numStr[1] === '0' && numStr[2] === '0') {
            return `${numberOne[numStr[0]]} hundred`
        } else if (temp > 10 && temp < 20) {
        return `${numberOne[numStr[0]]} hundred ${numberOne[temp]}`
        } else if (number % 10 === 0) {
            return `${numberOne[numStr[0]]} hundred ${numberDecimal[numStr[1]]}`
        }      
    return `${numberOne[numStr[0]]} hundred ${numberDecimal[numStr[1]]} ${numberOne[numStr[2]]}`
    }
}
