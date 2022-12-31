function FO(arr, target){
	let left = 0;
	let right = arr.length -1;
	let res =-1;

	while(left<= right){
		let mid = Math.floor((left+right)/2);
		if(arr[mid]=== target){
			res = mid;
			right = mid-1;
		}else if(arr[mid] > target){
			right = mid-1;
		}else{
			left = mid+1;
		}
	}
	return res;
}

let target=7;
let arr = [1,2,5,5,5,5,6,7,7,7,10,10,10,10,16,20,99];

console.log(FO(arr, target))
