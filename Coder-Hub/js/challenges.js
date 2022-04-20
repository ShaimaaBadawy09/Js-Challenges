// challenge 1
function sub(a, b) {
	return (a - b);
}
// challenge 2
function ConcatNames(name1, name2) {
	return (name1 + ' ' + name2);
}
// challenge 3
function divRemainder(a, b) {
    return (a % b);
}
// challenge 4
function lessOrMoreThanZero(number) {
    if (number < 0)
    {
      return "Less than zero";
    }
    else if (number > 0)
    {
      return "Greater than zero";
    }
    else
    {
      return "Equal to zero";
    }
}
// challenge 5
function average(array)
{
    let count = 0;
    array.forEach(element => {
        count += element;
    });
    return count / array.length;
}
// challenge 6
function isSame(name1, name2) {
    if(name1 === name2)
    {
      return "متشابهتين";
    }
    else
    {
      return "غير متشابهتين";
    }
}
// challenge 7
function largestSmallest(array) {
    return [Math.max(...array), Math.min(...array)];
}
// challenge 8
function num_elements(array) {
    return array.length;
}
// challenge 9
function cumulativeAddition(array) {
    let count = 0;
    array.forEach(element => {
      count += element;
    });
    return [count, array.length];
}
function cumulativeAddTwo(array)
{
  const count = array.reduce((previousValue, currentValue) => previousValue + currentValue);
  return [count, array.length];
}
// var arr=[1,2,3,4];
// console.log(cumulativeAddTwo(arr));
// challenge 10
function oddEven(number) {
    if((number % 2) == 0)
    {
      return "زوجي";
    }
    else
    {
      return "فردي";
    }
}
// challenge 11
function inputType(value) {
  let newValue = Number(value);
    if(! isNaN(newValue))
    {
      if (Number.isInteger(newValue))
      {
        return "integer";
      }
      else
      {
        return "double";
      }
    }
    else 
    {
      return typeof(value);
    }
}
// console.log(inputType("21.1"));
// console.log(inputType("Hello everybody"));
// console.log(inputType("323"));
// challenge 12
function findElement(array, element) {
    return array.includes(element);
}
// challenge 13
function lastElm(arr) {
    return arr[arr.length - 1];
}
// challenge 14
function maxElement(arr) {
    return Math.max(...arr);
}
// challenge 15
function smallestNumber(arr) {
    return Math.min(...arr);
}
// challenge 16
function subArrays(arr1, arr2) {
    let output = [];
    if(arr2.length == arr1.length)
    {
      for(let i=0; i<arr2.length; i++)
      {
        output.push(arr2[i] - arr1[i]);
      }
    }
    return output;
}
// challenge 17
function mostFrequentElement(arr) {
  let track = [];//create array to keep track of each element in the array and how frequent it appears
  //create object to hold pair of number and how frequent it appears
  class freqEl {
    constructor(el, max) {
      this.el = el;
      this.max = max;
    }
  }
  // loop on the array to count how many time each element appears
  for(let i=0; i<arr.length; i++)
  {
    let count =0;
    for(let j=0; j<arr.length; j++)
    {
      if(arr[j]==arr[i])
      {
        count++;
      }
    }
    // store the number, count pair in object
    freqNum = new freqEl(arr[i], count)
    // if the object doesn't exist in the track array, store it in the array
    if(!track.find(function(num, index){
      if(num.el == arr[i])
      return true;
    }))
    {
      track.push(freqNum);
    }
  }
  // find the maximum appearence and get its object to print out the element of most frequent appearnce
  const mostNum =  Math.max.apply(Math, track.map((obj) => { return obj.max;}));
  const mostEl = track.find((num, index) => {
    if(num.max == mostNum)
    return num;
  });
  return mostEl.el;
}
// var arr = [13, 2, 1, 2, 10, 2, 1, 1, 2, 2];
// console.log(mostFrequentElement(arr));
// challenge 18
function deleteElementInArray(arr, index) {
  if(index >= 0)
  {
    arr.splice(index, 1);
  }
  return arr;
}
// var arr1 = [2, 4, 88],
//     arr2 = [-3, 4, 0];
// console.log(deleteElementInArray(arr1, 2));
// console.log(deleteElementInArray(arr2, 0));
// challenge 19
function sortArray(array) {
  return array.sort((a, b) => {return a - b;});
}
// console.log(sortArray([32, 44, 9, 3, 8]));
// challenge 20
function sortArray(array, type) {
  switch (type){
    case "S":
      return array.sort((a, b) => a - b);
    case "B":
      return array.sort((a, b) => b - a);
    default:
      return array;
  }
}
// challenge 21
function factorial(number) {
  let factNum = number;
  if(number > 0)
  {
    for(let i = number-1; i > 0; i--)
    {
      factNum *= i;
    }
  }
  return factNum;
}
// challenge 22
function primesNums(array) {
  function isPrime(num) {
    // loop to find if the number divisible by any number instead of itself or 1(that's why we divid on range from 2 untill less than the number)
    for (let start = 2; num > start; start++) {
      if (num % start == 0) {
        // return false if there is no remainder which means the number is divisible by another one instead of itself or 1
        return false;
      }
    }
    // if the number negative, it will not enter the loop and also it is not a prime so num > 1 will return false
    // if the number is prime, it will enter the loop and go out of it without returning false so it will return true from num > 1
    return num > 1;
  }
  return array.filter(isPrime);
}
// challenge 23
function wordRepeat(word, n) {
  let newWord = word;
  if(n > 0)
  {
    for(let i = n-1; i > 0; i--)
    {
      newWord += ` ${word}`;
    }
  }
  return newWord;
}
// challenge 24
function match_array(array1, array2){
  array1 = array1.sort();
  array2 = array2.sort();
  if (array1.length == array2.length)
  {
    for(let i=0; i<array1.length; i++)
    {
      if(array1[i] != array2[i])
      {
        return false;
      }
      return true;
    }
  }
  return false;
}
// challenge 25
function numbers_range(number) {
  let series ="0";
  if(number > 0)
  {
    for(let i=1; i<=number; i++ )
    {
      series += ` ${i}`;
    }
  }
  return series;
}
// challenge 26
function date_format(date) {
  // input date format(year/month/day)
  let newDate ="";
  const arr = date.split("/");
  // arr[0] = year, arr[1] = month, arr[2] = day
  newDate = `${arr[0]}/${arr[1]}/${arr[2]} | ${arr[0]}-${arr[1]}-${arr[2]} | ${arr[1]}/${arr[2]}/${arr[0]}`;
  return newDate;
}
// challenge 27
function exponent_squared(number) {
  return number * number;
}
// challenge 28
function exponent_cube(number) {
  return number * number * number;
}
// challenge 29
function exponent_x(number, exponent) {
  let newNum = number;
  for(let i = exponent - 1; i>=1; i--)
  {
    newNum *= number;
  }
  return newNum;
}
// challenge 30
function countDown(number) {
	let series =`${number}`;
  if(number > 0)
  {
    for(let i=number-1; i>=0 ; i-- )
    {
      series += ` ${i}`;
    }
  }
  return series;
}