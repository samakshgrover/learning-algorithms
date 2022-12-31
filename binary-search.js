// console.log({ mid, left, right });
function BN(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function RBN(arr, target) {
  let mid = Math.floor((arr.length - 1) / 2);
  if (arr[mid] === target) return true;
  else if (arr.length === 1) return -1;
  else if (target > arr[mid]) return RBN(arr.slice(mid + 1), target);
  else return RBN(arr.slice(0, mid), target);
}

console.log(BN([1, 2, 3, 4, 5, 6, 7, 8], 1));
// console.log(RBN([1, 2, 3, 4, 5, 6, 7, 8], 10));
