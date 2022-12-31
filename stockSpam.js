function peek(arr){
 return arr[arr.length -1]
}

function SS(arr){
	const n = arr.length;
	const stack = [];
	const res =[];

	for(let i=0; i< n; i++){	
		if(stack.length === 0) res.push(-1);
		else if(stack[stack.length-1][0] > arr[i]) res.push(stack[stack.length-1][1]);
		else{
			while(stack.length > 0 && stack[stack.length-1][0]<= arr[i] ){
				stack.pop()
			}
			if(stack.length ===0 ) res.push(-1);
			else res.push(stack[stack.length-1][1]);
		}

		stack.push([arr[i], i]);
	}

	for(let i=0; i<n; i++){
	 res[i] = i-res[i];
	}

	return res
}

//SS([100,80,60,70,60.75,85]);

 console.log(SS([100,80,60,70,60,75,85]))
