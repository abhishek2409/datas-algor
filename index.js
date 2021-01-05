const input = [10, 20, 30, 10, 20, 40, 10]

function sockMerchant1(n, ar) {
  let res = 0;
  ar.sort();
  for (var i = 0; i < n; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      res++
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
  return pairs
}




function hasPairWithSum(data, sum) {
  let low = 0,
    high = data.length - 1;
  data.sort();
  while (low < high) {
    let s = data[low] + data[high]
    if (s === sum) {
      return true;
    }
    low++;
  }
  return false
}

function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  const finalArray = []
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      finalArray.push(i)
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
      if (arr2[i] === arr1[i]) return true
    }
  }
  return false
}

// Big O(n)

function getInterSection2(arr1, arr2) {
  let obj = {}
  for (var i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) obj[arr1[i]] = true
  }
  for (var i = 0; i < arr2.length; i++) {
    if (obj.hasOwnProperty([arr2[i]])) return true
  }
  return false
}

function getInterSection3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

//
// console.log(getInterSection3([1,2,3,4],[2,2,2]));
// console.log(getInterSection3([1,2,3,4],[10,20,20]));

//
/****ARRAY*****/
// Q1 rev a string
function revString1(str) {
  if (!str.length) return ""
  return str.split("").reverse().join("")
}

function revString2(str) {
  let resultString = [];
  let totalItems = str.length - 1;
  for (var i = totalItems; i >= 0; i--) {
    resultString.push(str[i])
  }
  return resultString.join("")
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
  let finalArray = []
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
var twoSum = function(nums, target) {
  let low = 0,  high = nums.length - 1;
  while (low < high) {
    let s = nums[low] + nums[high]
    if (s === target) {
      return [low, high];
    } else if (s < target) {
      low++
    } else {
      high--;
    }
  }
  return []
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
const moveZeroes = function(nums) {
  let nonZeroIndex = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i] != 0){
      nums[nonZeroIndex] = nums[i]
      nonZeroIndex++
    }
  }
  for (var i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

// console.log(moveZeroes([0,1,0,3,12]));
//
//
// Q5: max subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let bestSum = 0;
  let currentSum = 0;
  for (var x of nums) {
    currentSum = currentSum + x;
    if(bestSum < currentSum){
      bestSum = currentSum
    }
    if(currentSum < 0){
      currentSum = 0
    }
  }
  return bestSum
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
const containsDuplicate = function(nums) {
    let duplicateContainer = {};
    for (var item of nums) {
      if(duplicateContainer[item]) return true
      duplicateContainer[item] = 1
    }
    return false
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
const rotate = function(nums, k) {
  k = k % nums.length;
  replace(nums, 0, nums.length - 1)
  replace(nums, k, nums.length - 1)
  replace(nums, 0, k - 1)
  return nums
};

const replace = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--
  }
}

// console.log(rotate([1,2,3,4,5,6,7], 3));
//
// Q8: largest Word
function LongestWord(sen) {
  const splitted = sen.split(" ");
  let largestStr = ""
  for(let item of splitted){
    const formattedString = item.replace(/[^a-zA-Z]/g, "")
    if(formattedString.length > largestStr.length){
      largestStr = formattedString
    }
  }
  // code goes here
  return largestStr;
}
// console.log(LongestWord("@#$%TIME is very%^% !@*(*)IMPORTANT"));
/****ARRAY*****/


let b = "10"
// Clousres
function a() {
  let b = 20;
  function c() {
    // console.log(b);
  }
  c()
}
a();