// MAH max area histogram

function top(arr) {
  return arr[arr.length - 1];
}

function MAH(arr) {
  //variables
  const n = arr.length;
  const right = [];
  const left = [];
  const ei = [];
  const stack1 = [];
  const stack2 = [];
  const histogramArea = [];

  // NSL
  // next smaller to left
  for (let i = 0; i < n; i++) {
    if (stack1.length === 0) left.push(-1);
    else if (top(stack1)[0] < arr[i]) left.push(top(stack1)[1]);
    else {
      while (stack1.length > 0 && top(stack1)[0] > arr[i]) {
        stack1.pop();
      }
      if (stack1.length === 0) left.push(-1);
      else left.push(top(stack1)[1]);
    }

    stack1.push([arr[i], i]);
  }

  // NSR
  // next smaller to right
  for (let j = n - 1; j >= 0; j--) {
    if (stack2.length === 0) right.push(n);
    else if (top(stack2)[0] < arr[j]) right.push(top(stack2)[1]);
    else {
      while (stack2.length > 0 && top(stack2)[0] > arr[j]) {
        stack2.pop();
      }
      if (stack2.length === 0) right.push(n);
      else {
        right.push(top(stack2)[1]);
      }
    }
    stack2.push([arr[j], j]);
  }
  right.reverse();

  //  expand index
  for (let k = 0; k < n; k++) {
    ei[k] = right[k] - left[k] - 1;
  }

  for (let i = 0; i < n; i++) {
    histogramArea[i] = arr[i] * ei[i];
  }

  return Math.max(...histogramArea);
}

const res = MAH([6, 2, 5, 4, 5, 1, 6]);
console.log(res);
