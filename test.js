function sixToast(num) {
    if (num < 6) {
        return 6 - num;
    }

    if (num > 6) {
        return num - 6;
    }

    return 0;
}

console.log(sixToast(6)); // Expected output: 0
console.log(sixToast(8)); // Expected output: 2
