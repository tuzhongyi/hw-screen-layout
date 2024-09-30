export interface IFlags extends NumberConstructor {
  Value: number[];
}

export class Flags<T extends number> {
  value: number;
  constructor(val: number) {
    this.value = val;
  }
  getValues(): T[] {
    let result = new Array<T>();
    let str = this.value.toString(2);

    for (let i = str.length - 1, x = 0; i >= 0; i--, x++) {
      let value = parseInt(str[i]);
      if (value) {
        // let v = Math.pow(2, x);
        result.push((x + 1) as T);
      }
    }

    return result;
  }
  contains(t: T) {
    let values = this.getValues();
    if (t === 0) {
      if (values.length === 0) {
        return true;
      }
    }
    return values.indexOf(t) >= 0;
    // return this.getValues().includes(t)
  }
  valueOf(): number {
    return this.value;
  }

  static parse(values: number[]) {
    let result = 0;
    values = values.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      result += Math.pow(2, value - 1);
    }
    return result;
  }
}
