import { typeErrorMessage, rangeErrorMessage } from './utils'


const getFactorial = number => {
    const isNotNumber = typeof number !== 'number'
    const IsNumberOutOfRange = number < 0 || number > 20
    
    if(IsNumberOutOfRange){
        throw new RangeError(rangeErrorMessage)
    }
    
    if(isNotNumber) {
        throw new TypeError(typeErrorMessage)
    }
    
    const IsZeroOrOne = number === 1 || number === 0
    
    return IsZeroOrOne ? 
    1 :
    number * getFactorial(number -1)

}


export default getFactorial