// array is sorted but rotated.
//first we will find the index of smallest element in the array
//from there, we will devide the array in two parts
// then we will apply binary search in both arrays
// one will return -1 and other will return a number >0
// the other one (>0) will be returned

//BN --> binary search
function BN(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// smallest element index
function SI(arr) {
  let n = arr.length;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let prev = (mid - 1 + n) % n;
    let nxt = (mid + 1) % n;
    if (arr[start] < arr[end]) return start;
    else if (arr[mid] < arr[prev] && arr[mid] < arr[nxt]) return mid;
    else if (arr[start] < arr[mid]) start = mid + 1;
    else if (arr[mid] > arr[end]) end = mid - 1;
  }
  return -1;
}

function findElement(arr, target) {
  let i = SI(arr);
  let res1 = BN(arr, 0, i - 1, target);
  let res2 = BN(arr, i, arr.length - 1, target);
  return res1 > 0 ? res1 : res2;
}

let arr = [11, 12, 15, 18, 2, 5, 6, 8]
let target = 2

console.log(findElement(arr, target))