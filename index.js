function nextLargerElement(arr, n) {
  let res = [];
  let stack = [];

  for (let i = n - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack.length !== 0 && stack[stack.length - 1] > arr[i]) {
      res.push(stack[stack.length-1]);
    } else if (stack.length !== 0 && stack[stack.length - 1] < arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        res.push(-1);
      } else {
        res.push(stack[stack.length - 1]);
      }
    }
    
    console.log(res);
    stack.push(arr[i]);
  }
//   return res.reverse();
}

nextLargerElement([1, 3, 2, 4], 4);
