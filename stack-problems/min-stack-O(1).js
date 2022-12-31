class Minstack {
  constructor() {
    this.s = [];
    this.min;
  }

  getMin() {
    if (this.s.length === 0) return -1;
    return this.min;
  }

  push(x) {
    if (this.s.length === 0) {
      this.s.push(x);
      this.min = x;
    } else if (x >= this.min) {
      this.s.push(x);
    } else {
      this.s.push(2 * x - this.min);
      this.min = x;
    }
  }

  pop() {
    if (this.s.length === 0) return -1;
    else if (this.s[this.s.length - 1] >= this.min) return this.s.pop();
    else {
      const ans = this.min;
      this.min = 2 * this.min - this.s.pop();
      return ans;
    }
  }

  top() {
    if (this.s.length === 0) return -1;
    else if (this.s[this.s.length - 1] >= this.min)
      return this.s[this.s.length - 1];
    else return this.min;
  }
}

