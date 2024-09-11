

// 1 ....................................
function num(v) {
    var k = 1;
    for (var a = v; a > 0; a--) {
        k = k * a;
    }
    return k;
}
console.log(num(5));



// 3 ......................................
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };

console.log(mergeObjects(object1, object2));



// 4  ......................................
function toggleBoolean(bool) {
    return !bool;
}
console.log(toggleBoolean(true));  //  false
console.log(toggleBoolean(false)); //  true




// 1 _______________________________________
let numbers = [12, 10, 5, 8, 33, 14];
// 2 _______________________________________
function calculateSum(number2) {
    let sum = 0;
    for (let i = 0; i < number2.length; i++) {
        sum += number2[i];
    }
    return sum;
}
var numb = [1, 5, 5, 8, 14]
console.log(calculateSum(numb));


// 3 _______________________________________
function findMaximum(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numb = [1, 5, 5, 8, 14];
console.log(findMaximum(numb));

//4 ___________________________________________
function findMinimum(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
var numb = [1, 5, 5, 8, 14];
console.log(findMinimum(numb));


// 5 __________________________________________
function countEvenOdd(numbers) {
    let evenOfCount = 0;
    let oddOfCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenOfCount++;
        } else {
            oddOfCount++;
        }
    }

    return { even: evenOfCount, odd: oddOfCount };
}
console.log(countEvenOdd(numbers));



// 6__________________________________________
let number1 = [12, 7, 5, 21, 18, 33, 8, 14];
let report = generateReport(number1);
console.log(report);
