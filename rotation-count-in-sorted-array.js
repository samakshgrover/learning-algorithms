function count(arr) {
  let left = 0;
  let right = arr.length - 1;
  const n = arr.length;

  while (left <= right) {
    if (arr[left] < arr[right]) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);
    console.log({ left, right, mid, arr: arr[mid] });

    let prev = (mid + n - 1) % n;
    let nxt = (mid + 1) % n;

    if (arr[mid] < arr[prev] && arr[mid] < arr[nxt]) {
      return mid;
    } else if (arr[mid] > arr[left]) {
      left = mid + 1;
    } else if (arr[mid] < arr[right]) {
      right = mid - 1;
    }
    console.log({
      left,
      right,
    });
  }
  return -1;
}

let arr1 = [11, 12, 15, 18, 2, 5, 6, 8];
let arr2=[12, 15, 18, 2, 5, 6, 8, 11]

console.log(count(arr2));
