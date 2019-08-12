export function calculateFraction(inputNumber) {
    let number = inputNumber;
    const fraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100 ,50];
    let result = [];

    for (let i= 0; i<fraction.length; i++) {
        let j = number;
        let countNumber = 0;

        if (fraction[i] <= number) {
            while (fraction[i] <= j) {
                countNumber++;
                number-=fraction[i];
                j-=fraction[i];
            }
            result.push(createFraction(countNumber, fraction[i]));
        }
    }

    if (number !== 0){
        result.push(createFraction(0,number));
    }

    return result;
}

function createFraction(count, number) {
    let fraction = {};
    fraction.number = number;
    fraction.count = count;
    return fraction;
};

