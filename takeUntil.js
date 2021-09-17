
// takeUntil will keep collecting items from array until the callback returns truthy value

// callback value = item in the array 
// want to use map b/c map will give you the new array 

const takeUntil = function(array, callback){
  const results = [];
  
  for (let item of array){
    if (!callback(item)) { //if callback is false, push item
      results.push(item);
    } else {
      return results; //if callback is true, return new array
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // [1, 2, 5, 7, 2]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // ['Ive', 'been', 'to', 'Hollywood']
