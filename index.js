const input = [10, 20, 30, 10, 20, 40, 10];

function sockMerchant1(n, ar) {
  let res = 0;
  ar.sort();
  for (var i = 0; i < n; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      res++;
    }
  }
  return res;
}
// console.log(sockMerchant1(7, input));

function sockMerchant2(n, ar) {
  var ones = {},
    pairs = 0;
  for (var i = 0; i < n; i++) {
    if (ones.hasOwnProperty(ar[i])) {
      pairs++;
      delete ones[ar[i]];
    } else {
      ones[ar[i]] = 0;
    }
  }
  return pairs;
}

function hasPairWithSum(data, sum) {
  let low = 0,
    high = data.length - 1;
  data.sort();
  while (low < high) {
    let s = data[low] + data[high];
    if (s === sum) {
      return true;
    }
    low++;
  }
  return false;
}

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  const finalArray = [];
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      finalArray.push(i);
    }
    mySet.add(sum - arr[i]);
  }

  return finalArray;
}

// console.log(hasPairWithSum2([1,2,3,4,5], 9));

// Big O(n*m)

function getInterSection1(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i] === arr1[i]) return true;
    }
  }
  return false;
}

// Big O(n)

function getInterSection2(arr1, arr2) {
  let obj = {};
  for (var i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) obj[arr1[i]] = true;
  }
  for (var i = 0; i < arr2.length; i++) {
    if (obj.hasOwnProperty([arr2[i]])) return true;
  }
  return false;
}

function getInterSection3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

//
// console.log(getInterSection3([1,2,3,4],[2,2,2]));
// console.log(getInterSection3([1,2,3,4],[10,20,20]));

//
/****ARRAY*****/
// Q1 rev a string
function revString1(str) {
  if (!str.length) return "";
  return str.split("").reverse().join("");
}

function revString2(str) {
  let resultString = [];
  let totalItems = str.length - 1;
  for (var i = totalItems; i >= 0; i--) {
    resultString.push(str[i]);
  }
  return resultString.join("");
}
// console.log(revString2("Abhishek"));

// Q2 Merge sort two array
// I: [1, 2, 3] [0, 3, 4, 5]
// O: [0, 1, 2, 3, 3, 4, 5]

function mergeSortArrays(arr1, arr2) {
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();
  const arr1Length = sortedArr1.length;
  const arr2Length = sortedArr2.length;
  const maxLength = Math.max(arr1Length, arr2Length);
  let finalArray = [];
  // for (let i = 0; i < maxLength; i++) {
  //   if(sortedArr1[i] < sortedArr2[i]){
  //     finalArray.push(sortedArr1[i])
  //   }else{

  //   }
  // }
  return finalArray;
}
// console.log(mergeSortArrays([1, 2, 3],[0, 3, 4, 5]))

// Q3: Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let s = nums[low] + nums[high];
    if (s === target) {
      return [low, high];
    } else if (s < target) {
      low++;
    } else {
      high--;
    }
  }
  return [];
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([2,3,4], 6));
// console.log(twoSum([2,3,4,5], 9));
//
//
// Q4: move zeros
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  for (var i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

// console.log(moveZeroes([0,1,0,3,12]));
//
//
// Q5: max subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let bestSum = 0;
  let currentSum = 0;
  for (var x of nums) {
    currentSum = currentSum + x;
    if (bestSum < currentSum) {
      bestSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return bestSum;
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(maxSubArray([-1]));
//
//
// Q6: Duplicate find
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let duplicateContainer = {};
  for (var item of nums) {
    if (duplicateContainer[item]) return true;
    duplicateContainer[item] = 1;
  }
  return false;
};

// console.log(containsDuplicate([1,2,3,1]));
// console.log(containsDuplicate([1,2,3,4]));
//
//
// Q7: Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  k = k % nums.length;
  replace(nums, 0, nums.length - 1);
  replace(nums, k, nums.length - 1);
  replace(nums, 0, k - 1);
  return nums;
};

const replace = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

// console.log(rotate([1,2,3,4,5,6,7], 3));
//
// Q8: largest Word
function LongestWord(sen) {
  const splitted = sen.split(" ");
  let largestStr = "";
  for (let item of splitted) {
    const formattedString = item.replace(/[^a-zA-Z]/g, "");
    if (formattedString.length > largestStr.length) {
      largestStr = formattedString;
    }
  }
  // code goes here
  return largestStr;
}
// console.log(LongestWord("@#$%TIME is very%^% !@*(*)IMPORTANT"));
/****ARRAY*****/

// let b = "10"
// // Clousres
// function a() {
//   let b = 20;
//   function c() {
//     // console.log(b);
//   }
//   c()
// }
// a();

// Object prototype
function doSomething() {}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
// console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
// console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
// console.log("doSomething.prop:           " + doSomething.prop);
// console.log("doSomething.foo:            " + doSomething.foo);
// console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
// console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

// function foo(){
//   const bar = "bar";
//   if(true){
//     console.log(bar);
//     const bar = "bar1"
//   }
// }
// foo();

function braces(values) {
  const bracesKeyMap = {
    "{": {
      closedBrace: "}",
    },
    "(": {
      closedBrace: ")",
    },
    "[": {
      closedBrace: "]",
    },
  };
  let resultArray = [];
  for (let i = 0; i < values.length; i++) {
    let isClosed = false;
    const el = values[i];
    const elArr = el.split("");
    for (let j = 0; j < elArr.length; j++) {
      const element = elArr[j];
      if (bracesKeyMap[element]) {
        if (bracesKeyMap[element].closedBrace === elArr[j + 1]) {
          isClosed = true;
          j++;
        }
      }
    }
    resultArray.push(isClosed);
  }
  return resultArray;
}

// console.log(braces(['{}[]()', '{[}]']))

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};
// console.log(range);
for (const num of range) {
  // console.log(num);
}

function sumSalaries(obj) {
  const values = Object.values(obj);
  return values.reduce((acc, val) => acc + val, 0);
}

// console.log(sumSalaries({
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// }))

let map = new Map();
map.set({}, {});
map.set({}, {});
for (const iterator of map.keys()) {
  // console.log(iterator);
}
for (const iterator of map.values()) {
  // console.log(iterator);
}
for (const iterator of map.entries()) {
  // console.log(iterator);
}

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number <= 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  for (let index = 1; index <= number; index++) {
    answer = answer * index;
  }
  return answer;
}

// console.log(findFactorialIterative(6));
// console.log(findFactorialRecursive(6));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(4))
// console.log(fibonacciIterative(4))

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  return str.split("");
}

// console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy'

const unSortedNums = [1, 21, 34, 2, 87, 8, 90, 109, 1];
// console.log(unSortedNums);

function bubbleSort(nums) {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = 0; j < numsLength; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

// console.log(bubbleSort(unSortedNums))

function selectionSort(nums) {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    let min = i;
    let temp = nums[i];
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}

// console.log(selectionSort(unSortedNums))

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return array;
}

// console.log(insertionSort(unSortedNums))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const median = Math.floor(array.length / 2);
  const left = array.slice(0, median);
  const right = array.slice(median);

  // console.log(left);
  // console.log(right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const resultArray = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
// console.log(answer);

let range1 = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (const iterator of range1) {
  // console.log(iterator);
}

let range2 = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// (async () => {
//   for await(let iterator of range2){
//     // console.log(iterator)
//   }
// })()

// check sw support
if ("serviceWorker" in navigator) {
  // console.log("Service workers supported");
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((req) => {
        console.log("Service worker: registred");
      })
      .catch((err) => console.log(`Service worker: Error: ${err}`));
  });
}
