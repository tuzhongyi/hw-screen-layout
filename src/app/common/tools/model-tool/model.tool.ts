import {
  ClassConstructor,
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
import { IIdModel } from '../../network/models/common/model.interface';

export class ModelTool {
  static equal<T extends IIdModel>(a: T, b: T) {
    return a.Id === b.Id;
  }
  static copy<T>(source: T, cls: ClassConstructor<T>) {
    let plain = instanceToPlain(source);
    let model = plainToInstance(cls, plain);
    return model;
  }
  static equals(a: any, b: any) {
    let keys = Object.keys(a);
    for (let key of keys) {
      if (typeof a[key] === 'object') {
        if (!ModelTool.equals(a[key], b[key])) {
          return false;
        }
      }
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
}
