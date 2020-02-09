function add(number1: number, number2: number): number {
    return number1 + number2;
}

function printResult(result: number): void {
    console.log(result);
}

function addAndHandle(number1: number, number2: number, cb: (a: number) => void): number {
    const sum: number = number1 + number2;
    cb(sum);
    return sum;
}

printResult(add(10, 20));
addAndHandle(5, -20, printResult);
addAndHandle(10, 10, (num: number) => { alert(num); });

let combinedValues: (a: number, b: number) => number = add;

printResult(combinedValues(10, 30));