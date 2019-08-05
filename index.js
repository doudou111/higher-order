// 高阶函数
//         高阶函数是对其他函数进行操作的函数，可以将它们作为参数或通过返回它们。简单来说，高阶函数是一个函数，它接收函数作为参数或将函数作为输出返回。
//         例如，Array.prototype.map，Array.prototype.filter和Array.prototype.reduce是语言中内置的一些高阶函数
        
Array.prototype.map
// map（）方法通过调用作为输入数组中每个元素的参数提供的回调函数来创建一个新数组。 map（）方法将从回调函数中获取每个返回的值，并使用这些值创建一个新数组。 传递给map（）方法的回调函数接受3个参数：element，index和array
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);

// 具有高阶函数的 map
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);


Array.prototype.filter
// filter（）方法创建一个新数组，其中包含通过回调函数提供的测试的所有元素。 传递给filter（）方法的回调函数接受3个参数：element，index和arr
// 具有高阶组件filter
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];
  const fullAge = persons.filter(person => person.age >= 18);
  console.log(fullAge);

  
  Array.prototype.reduce
// 高阶函数的 reduce
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
// prints 25
console.log(sum);


// 总结：高阶函数是一个函数，可以接收函数作为参数，甚至可以返回一个函数。高阶函数就像常规函数一样，具有接收和返回其他函数的附加能力，即参数和输出
