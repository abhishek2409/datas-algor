const arrayInput = [
  1470,
  1577,
  1054,
  1962,
  1107,
  1123,
  1683,
  1680,
  1176,
  1917,
  1786,
  1565,
  1464,
  1097,
  1363,
  1091,
  1072,
  1821,
  1514,
  1526,
  1633,
  1953,
  1594,
  1386,
  1611,
  1354,
  490,
  1302,
  1785,
  1504,
  1100,
  1631,
  1570,
  1906,
  1678,
  1742,
  1505,
  1894,
  1682,
  1854,
  1663,
  1284,
  1346,
  1390,
  1285,
  1993,
  1301,
  1288,
  1882,
  1434,
  1435,
  1370,
  1603,
  1974,
  1364,
  1667,
  1561,
  1205,
  1487,
  1676,
  1654,
  1352,
  1584,
  1445,
  376,
  1945,
  1864,
  1981,
  2001,
  1254,
  1335,
  1337,
  1769,
  1467,
  1332,
  2008,
  1732,
  1365,
  1852,
  1553,
  1324,
  1642,
  1927,
  1658,
  1750,
  1380,
  1232,
  1457,
  1567,
  1735,
  1259,
  1780,
  1653,
  1400,
  1489,
  1439,
  1315,
  1891,
  1249,
  1770,
  1214,
  1961,
  92,
  1479,
  1901,
  1331,
  1476,
  1969,
  1480,
  289,
  1855,
  1325,
  1518,
  1819,
  1089,
  1849,
  2006,
  1996,
  1833,
  1965,
  1547,
  1397,
  1153,
  1622,
  1216,
  1609,
  1323,
  1148,
  1262,
  1347,
  1118,
  1808,
  2010,
  1256,
  1529,
  1169,
  1094,
  1738,
  1544,
  1517,
  1644,
  1221,
  1699,
  1655,
  1474,
  1977,
  1717,
  1143,
  1721,
  1417,
  957,
  1938,
  1193,
  1863,
  1730,
  1187,
  1628,
  1314,
  1483,
  1606,
  1602,
  1116,
  835,
  480,
  1955,
  1900,
  1968,
  1903,
  1436,
  1771,
  1774,
  1832,
  1586,
  1844,
  1198,
  1687,
  1283,
  1740,
  1273,
  1973,
  1665,
  1251,
  1889,
  1521,
  1648,
  1718,
  1263,
  1635,
  1122,
  1243,
  1085,
  1991,
  1271,
  1230,
  1245,
  1318,
  1373,
  1911,
  1282,
  1306,
];
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
var twoSum1 = function (nums, target) {
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

// console.log(twoSum1([1, 2, 3, 7, 5], 12));
// console.log(twoSum1([2,3,4], 6));
// console.log(twoSum1([2,3,4,5], 9));
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
          return {
            done: false,
            value: this.current++
          };
        } else {
          return {
            done: true
          };
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
          return {
            done: false,
            value: this.current++
          };
        } else {
          return {
            done: true
          };
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
// if ("serviceWorker" in navigator) {
//   // console.log("Service workers supported");
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./sw.js")
//       .then((req) => {
//         console.log("Service worker: registred");
//       })
//       .catch((err) => console.log(`Service worker: Error: ${err}`));
//   });
// }

function findColumnNum(str) {
  let result = 0;
  let n = str.length;
  for (let i = 0; i < n; i++) {
    const asciVal = str.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result = result * 26 + asciVal;
  }
  return result;
}

// console.log(findColumnNum("A"))
// console.log(findColumnNum("Z"))

function findColumnName(num) {
  // let result = ""
  // for (let i = 0; i < num; i++) {
  //   const asciVal = str.charCodeAt(i) - 'A'.charCodeAt(0) + 1
  //   result = result*26 + asciVal;
  // }
  // return result;
}

// console.log(findColumnName(1))
// console.log(findColumnName(26))

function solution(A, B) {
  let oneCount = 0;
  const value = A * B;
  const binValueStr = convertToBin(value);
  for (let i = 0; i < binValueStr.length; i++) {
    if (binValueStr[i] == 1) oneCount++;
  }
  return oneCount;
}

function convertToBin(num) {
  return num.toString(2);
}

function birthdayCakeCandles(candles) {
  // Write your code here
  let maxNum = 0,
    maxNumCount = 0;
  let n = candles.length;
  for (let i = 0; i < n; i++) {
    const element = candles[i];
    maxNum = Math.max(maxNum, element);
  }
  for (let i = 0; i < n; i++) {
    if (maxNum === candles[i]) maxNumCount++;
  }
  return maxNumCount;
}

// console.log(birthdayCakeCandles([3,2,1,3]))
// console.log(birthdayCakeCandles([1,4,1,3]))

function timeConversion(s) {
  let militaryTime = "";
  const splittedTimeArr = s.split(":");
  const secondsWithAMPM = splittedTimeArr[splittedTimeArr.length - 1];
  const hours = splittedTimeArr[0];
  const minutes = splittedTimeArr[1];
  const AMPM = secondsWithAMPM.substr(2);
  const isAM = AMPM.indexOf("AM") > -1;
  const seconds = secondsWithAMPM.substr(0, 2);

  if (hours % 12 < 12 && isAM) {
    militaryTime = `${hours}:${minutes}:${seconds}`;
  }
  if (hours % 12 < 12 && !isAM) {
    militaryTime = `${parseInt(hours) + 12}:${minutes}:${seconds}`;
  }

  if (hours % 12 === 0 && isAM) {
    militaryTime = `00:${minutes}:${seconds}`;
  }
  if (hours % 12 === 0 && !isAM) {
    militaryTime = `${hours}:${minutes}:${seconds}`;
  }
  // console.log(militaryTime);
  return militaryTime;
}

timeConversion("07:05:45AM");
timeConversion("07:05:45PM");
timeConversion("12:05:45AM");
timeConversion("12:01:00PM");

// webpack, longest subsequent, performace, object  prototype, object.assign, object.flat, object deepCopy

function deepCopy(obj) {
  let outObj, val, key;

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  outObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    value = obj[key];
    outObj[key] = deepCopy(value);
  }

  return outObj;
}

const aObj = {
  a: 1,
  b: 2,
  c: {
    d: 3
  },
};
const bObj = Object.assign({}, aObj);
const cObj = deepCopy(aObj);
aObj.c.d = 4;
// console.log(aObj)
// console.log(bObj)
// console.log(cObj)

function lcs(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }
  const s1WithoutLastChar = s1.substr(0, s1.length - 1);
  const s2WithoutLastChar = s2.substr(0, s2.length - 1);

  const s1LastChar = s1.charAt(s1.length - 1);
  const s2LastChar = s2.charAt(s2.length - 1);
  if (s1LastChar == s2LastChar) {
    return 1 + lcs(s1WithoutLastChar, s2WithoutLastChar);
  } else {
    return Math.max(lcs(s1, s2WithoutLastChar), lcs(s1WithoutLastChar, s2));
  }
}

// console.log(lcs("mhunuzqrkzsnidwbun","szulspmhwpazoxijwbq"));
// console.log(lcs("ABCBDAB", "BDCABA"));

const myThrottle = (fn, delay) => {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    fn.apply(this, arguments);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, delay);
  }
  return wrapper;
};
// const handler = args => console.log(args)
// const xy = myThrottle(handler, 5000)
// xy("a");
// xy("b");
// xy("c");
// xy("d");
// xy("e");
// xy("f");

function rob(nums) {
  if (nums === null || nums.length === 0) return 0
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let maxMoneyRobbed = []
  maxMoneyRobbed[0] = nums[0];
  maxMoneyRobbed[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    maxMoneyRobbed[i] = Math.max(nums[i] + maxMoneyRobbed[i - 2], maxMoneyRobbed[i - 1])
  }
  return maxMoneyRobbed[nums.length - 1]
}

// console.log(rob([1, 2, 3, 4]));
// console.log(rob([2, 7, 9, 3, 1]));

// O(n*3)
function findSum(nums, sum) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === sum) result = nums[i] * nums[j] * nums[k];
      }

    }
  }
  return result;
}



function subArraySum(arr, n, s) {
  let start = 0,
    end = 0
  for (let i = 0; i < n; i++) {

  }
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function mul(a, b, c) {
  return a * b * c;
}

let curriedMul = curry(mul)
// console.log(curriedMul(3, 4, 5));




// var majorityElement = function (nums) {
//   let ele = 0;
//   let obj = {};
//   const majority = nums.length / 2;
//   for (let i = 0; i < nums.length; i++) {
//     const e = nums[i]
//     if (obj[e]) obj[e] = obj[e] + 1;
//     else obj[e] = 1;
//   }
//   for (let k in obj) {
//     if (obj[k] > majority) ele = k;
//   }
//   return ele;
// };

const majorityElement = (nums) => {
  nums.sort();
  const majority = Math.ceil(nums.length / 2);
  return nums[majority];
}

// console.log(majorityElement([3,2,3]))

var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;
  return sortedStr(s) === sortedStr(t)
};

const sortedStr = str => str.split("").sort().join("");

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "cars"));

var firstUniqChar = function (s) {
  let charObj = {}
  for (let charIndex in s) {
    const char = s[charIndex]
    if (!charObj[char]) charObj[char] = 1
    else charObj[char] = charObj[char]++;
  }
  let index = -1
  console.log(charObj);
  for (let key of charObj) {
    console.log(charObj[key]);
    if (charObj[key] === 1) {
      return ++index
    }
  }
  return index
};

// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));

function subarraySum(arr, n, s) {
  let currentSum = arr[0],
    left = 0;
  right = 0;
  for (let i = 1; i < n; i++) {
    if (currentSum === s) {
      return [left, right];
    } else {
      if (currentSum < s) {
        currentSum = currentSum + arr[i];
        right++;
      } else {
        currentSum = currentSum - arr[i];
        left++;
      }
    }
  }
  return []
}

// console.log(subarraySum([1,2,3,7,5], 5, 12))

Array.prototype.myReduce = function (fn, initial) {
  let values = this;
  values.forEach(item => {
    initial = initial !== undefined ? fn(initial, item) : item
  })
  return initial
}

// console.log([1, 2, 3, 4, 5].myReduce((a, c) => a + c, 0));
// console.log([1, 2, 3, 4, 5].reduce((a, c) => a + c, 0));


var maxArea = function (heights) {
  let maxArea = 0, p1 = 0, p2 = heights.length - 1;
  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if(heights[p1] <= heights[p2]){
      p1++
    }else{
      p2--;
    }
  }
  return maxArea;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([4,3,2,1,4]));
// console.log(maxArea([1,2,1]));


var twoSum = function (nums, target) {
  let obj = {} 
  for (let p1 = 0; p1 < nums.length; p1++) {
    const currentMapVal = obj[nums[p1]]; 
    if(currentMapVal >= 0){
      return [p1, currentMapVal]
    } else{
      const numToFind = target - nums[p1];
      obj[numToFind] = p1;
    }
  }
  return []
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));