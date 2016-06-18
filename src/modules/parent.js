
export default class {
  constructor (var1 = 1, var2 = null) {
    this.var1 = var1;
    this.var2 = var2;
  }

  something () {
    return `This is an interpolated string with : ${this.var1} and ${this.var2}`;
  }
}
