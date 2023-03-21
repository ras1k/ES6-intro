const arr = [25, 25, 35, 65];
const lol = Math.max(...arr);
console.log(lol);

const arr2 = [...arr];
arr.push(420);
arr2.push(69);
console.log(arr);
console.log(arr2);