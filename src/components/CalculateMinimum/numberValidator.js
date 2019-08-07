
export default function numberValidator(inputNumber) {

    let error= {};


    if (!inputNumber) {
        error.status = true;
        error.message = 'Input Must be Filled'

    } else if(validateCorrectFormat(inputNumber)) {
        error.status = true;
        error.message = 'Format is incorrect'
    } else if(validateMaxAmmount(inputNumber)) {
        error.status = true;
        error.message = 'Number cannot be more than 100000'
    } else {
        error.status = false;
    }

    return error;
}
function validateCorrectFormat(val) {
    const validator = /^(Rp |Rp)?([0-9]{1,3}\.([0-9]{3}\.)*[0-9]{3}|[0-9]+)(,[0-9][0-9])?$/g;
    if (validator.test(val)) {
        return false;
    }
    return true
}

function validateMaxAmmount(val) {
    if (val > 100000) {
        return true;
    }
    return false
}

