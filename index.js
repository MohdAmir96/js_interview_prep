import "./pollyfils/pollyfills.js";
let a = [1, 2, 3].myIncludes((item, i) => {
  console.log(i);
  return item === 5;
});
console.log(a);
