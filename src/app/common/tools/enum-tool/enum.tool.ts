export class EnumTool {
  static values<T>(_enum: T) {
    let values = [];
    for (const key in _enum) {
      if (typeof _enum[key] === 'number') {
        values.push(_enum[key]);
      }
    }
    return values;
  }
}
