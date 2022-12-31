function trap(arr) {
  const n = arr.length;
  const mxl = [];
  const mxr = [];
  const min = [];
  const water = [];
  let total = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) mxl[i] = arr[i];
    else mxl[i] = Math.max(mxl[i - 1], arr[i]);
  }

  mxr[arr.length - 1] = arr[arr.length - 1];
  for (let j = n - 2; j >= 0; j--) {
    mxr[j] = Math.max(mxr[j + 1], arr[j]);
  }

  for (let k = 0; k < n; k++) {
    min[k] = Math.min(mxl[k], mxr[k]);
  }

  for (let i = 0; i < n; i++) {
    water[i] = min[i] - arr[i];
  }

  for (let i = 0; i < n; i++) {
    total = total + water[i];
  }

  return total;
}

const res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(res);
