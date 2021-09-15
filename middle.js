// const eqArrays = function(array1, array2){
//   if (array1.length !== array2.length){
//     return false;
//   } 
//   for (let i = 0; i < array1.length; i++){
//     if (array1[i] !== array2[i]){
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arrayA, arrayB){
//   if (eqArrays(arrayA, arrayB)) {
//   console.log(`This is true`);
//   } else {
//   console.log('This is false');
//   }
// };

// arrays with 1 or 2 methods, return empty array
// arrays.length odd numbers = single element returned
// arrays.length even numbers = 2 elements returned

const middle = function (array){
  for (var i = 0; i < array.length; i++){
    let midIndex = array.length/2;

    if (array.length <= 2) {
      return [];
    } else {
      
      if (array.length % 2 !== 0){
        let array2 = [];
        array[i] = Math.ceil(midIndex);
        array2.push(array[i]); 
        return array2;
      } else {
        let array3 = [];
        array3.push(array[midIndex - 1]);
        array3.push(array[midIndex]);
        return array3;
      } 
    }
  }
};

console.log(middle([1])); //return empty * WORKS
console.log(middle([1, 2])); //return empty * WORKS
console.log(middle([1, 2, 3, 4, 5])); // 3 * WORKS
console.log(middle([1, 2, 3, 4, 5, 6, 7])); //4 * WORKS
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // 7 * WORKS

console.log(middle([1, 2, 3, 4])); //2, 3
console.log(middle([1, 2, 3, 4, 5, 6])); //3, 4  

