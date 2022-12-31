function top(arr) {
  return arr[arr.length - 1];
}

function MAH(arr) {
  const n = arr.length;
  const left = [];
  const right = [];
  const sl = [];
  const sr = [];
  const ei = [];
  const area = [];

  for (let i = 0; i < n; i++) {
    //NSL next smaller to left
    if (sl.length === 0) left.push(-1);
    else if (top(sl)[0] < arr[i]) left.push(top(sl)[1]);
    else {
      while (sl.length > 0 && top(sl)[0] >= arr[i]) {
        sl.pop();
      }
      if (sl.length === 0) left.push(-1);
      else left.push(top(sl)[1]);
    }

    sl.push([arr[i], i]);
  }

  //NSR next smaller to right
  for (let j = n - 1; j >= 0; j--) {
    if (sr.length === 0) right.push(n);
    else if (top(sr)[0] < arr[j]) right.push(top(sr)[1]);
    else {
      while (sr.length > 0 && top(sr)[0] > arr[j]) {
        sr.pop();
      }
      if (sr.length === 0) right.push(n);
      else right.push(top(sr)[1]);
    }
    sr.push([arr[j], j]);
  }
  right.reverse();

  for (let k = 0; k < n; k++) {
    ei[k] = right[k] - left[k] - 1;
  }
  console.log(ei);
  console.log({ left, right });
  return Math.max(...area);
}

//bm binary matrix
function MAR(matrix) {
  console.log(MAH(matrix));
}

//const arr1=[1,0,1,0,0];
//const arr2=[2,0,2,1,1];
const arr3 = [3, 1, 3, 2, 2];
MAH(arr3);
//const arr4=[4,0,0,3,0];

//MAR(arr1);MAR(arr2);MAR(arr3);MAR(arr4);
