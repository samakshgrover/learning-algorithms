class Minstack {
  constructor() {
    this.s = [];
    this.ss = [];
  }
  push(a) {
    this.s.push(a);
    if (this.ss.length === 0 || this.ss[this.ss.length - 1] >= a) {
      this.ss.push(a);
    }
  }

  pop() {
    let ans = this.s.pop();
    if (this.ss[this.ss.length - 1] === ans) {
      this.ss.pop();
    }
    return ans;
  }

  getMin() {
    if (this.ss.length === 0) return -1;
    return this.ss[this.ss.length - 1];
  }
}

const ms = new Minstack();

ms.push(18);
ms.push(15);
ms.push(14);
// ms.pop();
console.log(ms.getMin());
