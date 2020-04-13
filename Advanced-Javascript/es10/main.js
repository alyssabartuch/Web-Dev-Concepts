// flat method - arrays
const array = [1,[2,3],[4,5]];
array.flat(); // [1,2,3,4,5]

const array2 = [1,2,[3,4,[5]]];
array2.flat(); // [1,2,3,4,array(1)]
array2.flat(2); // [1,2,3,4,5]