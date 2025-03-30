// This function takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sumOfPositive(arr) {
    // Filter the array to get only positive numbers and then reduce it to get the sum.
    // return arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);

    // Alternatively, you can use a for loop to achieve the same result.
    /* let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum; */

    // Using the reduce method to sum up positive numbers in a more functional style.
    /* return arr.reduce((acc, curr) => {
        return curr > 0 ? acc + curr : acc;
    }, 0) */
}

console.log(sumOfPositive([1, -4, 7, 12])); // Expected output: 20
console.log(sumOfPositive([1, -4, 7, -12])); //Expected output: 8
