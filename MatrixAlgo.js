//rotate matrix 90 degrees
function matrixRotated90(matrix) {
  let newMatrix = []
  const newArray = []
  for (let i = matrix.length; i < matrix.length; i--) {
    const currentArray = matrix.pop()
    console.log(currentArray)
    //iterate through the current array and push each element to 
    currentArray.forEach(element => {
      console.log(element)
    });
    newArray.push(currentArray.shift())
  }
  return newMatrix;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixRotated90(matrix));
