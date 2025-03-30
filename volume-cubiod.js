// This function calculates the volume of a cuboid given its Length, Width, and Height.
function getVolumeOfCuboid(length, width, height) {
    return length * width * height;
}

console.log(getVolumeOfCuboid(2, 3, 4)); // Output: 24
console.log(getVolumeOfCuboid(5, 5, 5)); // Output: 125
console.log(getVolumeOfCuboid(0, 3, 4)); // Output: 0