//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds
const numList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const returnEven = (arr) => {
  let evens = arr.filter(num => (num % 2 ==0));
  console.log(evens.toString());
};
returnEven(numList);


//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
const dividedBy = (arr) => {
  let evens = arr.filter(num => (num % 6 ==0));
  console.log(evens.toString());
};
dividedBy(numList);


//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92
const numList2 = [10,12,20,50];
const listSum = (list) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(`${list.reduce(reducer)}`);
};
listSum(numList2);



//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
const numList3 = [1, 2, 3, 4, 5];
const listMult = (list) => {
  const reducer = (previousValue, currentValue) => previousValue * currentValue;
  console.log(`${list.reduce(reducer)}`);
};
listMult(numList3);



//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729
const numList4 = [3, 2, 3];
const listPower = (list) => {
  const reducer = (previousValue, currentValue) => previousValue ** currentValue;
  console.log(`${list.reduce(reducer)}`);
};
listPower(numList4);



//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
             


//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
[{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]


for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}

