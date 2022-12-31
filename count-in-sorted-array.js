function FO(arr, target){
	let res=-1;
	let left=0;
	let right = arr.length-1;

	while(left<=right){
		let mid = Math.floor((left+right)/2);
		if(arr[mid]===target){
			res = mid;
			right = mid-1;
		}else if(arr[mid]> target){
			right = mid-1;
		}else{
			left = mid+1;
		}
	}
	return res;
}

function LO(arr, target){

	let left =0;
	let right = arr.length-1;
	let res =-1;

	while(left <=right){
		let mid = Math.floor((left+right)/2);

		if(arr[mid]=== target){
			res = mid;
			left = mid+1;
		}else if(arr[mid] > target){
			right = mid-1;
		}else{
			left = mid+1;
		}
	}
	return res;
}

function count(arr, target){
	return LO(arr, target) - FO(arr, target) +1;
}

console.log(count([2,4,10,10,10,10,12,18,24,25], 10));
