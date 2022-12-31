function RBS(arr, target){
	let right = arr.length-1;
	let left = 0;

	while(left<=right){
		let mid = Math.floor((left + right)/2);
		if(arr[mid] === target) return mid;
		else if(target > arr[mid]) right = mid-1;
		else left = mid+1;
	}

	return -1;

}

console.log(RBS([8,7,6,5,4,3,2,1], 7));
