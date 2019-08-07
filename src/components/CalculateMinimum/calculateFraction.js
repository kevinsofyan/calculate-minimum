export function calculateFraction(inputNumber) {
    let number = inputNumber;
    const divider = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50];
    let fraction = [];

    for (let i= 0; i < divider.length; i++) {
        const countNumber = number / divider[i];

        if(divider[i] <= number) {
            if (i === divider.length - 1 && number !==0) {
                if (number % divider[i] === 0) {
                    number = (divider[i] * countNumber) - number;
                    fraction.push(createFraction(countNumber,divider[i]));
                }
            } else {
                fraction.push(createFraction(1,divider[i]));
                number-=divider[i];
            }
        }
    }

    if (number !== 0){
        fraction.push(createFraction(0,number));
    }

    return fraction;
}

function createFraction(count, number) {
    let fraction = {};
    fraction.number = number;
    fraction.count = count;
    return fraction;
};

