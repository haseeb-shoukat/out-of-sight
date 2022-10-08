const Score = class {
  constructor(arr) {
    this.scoreArray = arr.sort(this.cmpFunc);
  }

  cmpFunc(a, b) {
    return a.score < b.score ? -1 : a.score > b.score ? 1 : 0;
  }

  highScore(score) {
    if (this.scoreArray.length < 10) return true;

    const arr = this.scoreArray;
    score > arr[arr.length - 1] ? true : false;
  }

  add(obj) {
    if (!this.highScore(obj.score)) return false;
    this.scoreArray.pop();
    this.scoreArray.push(obj);
    this.scoreArray.sort(this.cmpFunc);
  }
};
