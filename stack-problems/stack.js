// NSL next smaller to left
// NSR next smaller to right
function NSR(arr){
  const n= arr.length;
  const res=[];
  const stack=[];

	for(let i=n-1; i>=0; i--){
		if(stack.length === 0) res.push(-1);
		else if(stack[stack.length-1] < arr[i]) res.push(stack[stack.length-1]);
		else{
			while(stack.length > 0 && stack[stack.length-1] > arr[i]){
				stack.pop()
			}
			if(stack.length === 0) res.push(-1);
			else{
				res.push(stack[stack.length-1])
			}
		}
		stack.push(arr[i]);
	}
	return res.reverse();
}

console.log(NSR([4,5,2,10,8]));


function ngl(arr) {
  const n = arr.length;
  const stack = [];
  const res = [];

  for (let i = 0; i < n; i++) {
    if (stack.length === 0) {
      res.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      res.push(stack[stack.length - 1]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        res.push(-1);
      } else if (stack[stack.length - 1] > arr[i]) {
        res.push(stack[stack.length - 1]);
      }
    }

    stack.push(arr[i]);
  }
  return res;
}

