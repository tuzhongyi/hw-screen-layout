import { formatDate } from '@angular/common';
import { TransformationType, TransformFnParams } from 'class-transformer';
import { ColorTool } from 'src/app/common/tools/color-tool/color.tool';
import { Language } from 'src/app/common/tools/language-tool/language.tool';
import { Flags } from './flags';
import { IIdNameModel } from './model.interface';

export function transformColor(params: TransformFnParams) {
  if (!params.value) return params.value;
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    let hex = params.value.toString(16);
    return ColorTool.from.hex.argb(hex);
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    return ColorTool.to.hex.argb(params.value);
  } else {
    return params.value;
  }
}

export function transformRound(params: TransformFnParams, number: number) {
  if (!params.value) return params.value;
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    let radix = 1;
    for (let i = 0; i < number; i++) {
      radix *= 10;
    }
    return Math.round(params.value * radix) / radix;
  } else {
    return params.value;
  }
}

export function transformArraySort(params: TransformFnParams) {
  if (params.value === undefined || params.value === null) return undefined;
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    return params.value.sort((a: IIdNameModel, b: IIdNameModel) => {
      return a.Name.length - b.Name.length || a.Name.localeCompare(b.Name);
    });
  } else {
    return params.value;
  }
}

export function transformDateTime(params: TransformFnParams) {
  if (params.value === undefined || params.value === null) return undefined;
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    if (typeof params.value === 'string') {
      return new Date(params.value);
    } else if (typeof params.value === 'number') {
      return new Date(params.value);
    } else {
      return params.value;
    }
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    return formatDate(params.value as Date, 'yyyy-MM-ddTHH:mm:ssZZZZZ', 'en');
  } else if (params.type === TransformationType.CLASS_TO_CLASS) {
    return new Date(params.value);
  } else {
    return '';
  }
}
export function transformDate(params: TransformFnParams) {
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    return new Date(params.value);
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    return formatDate(params.value as Date, Language.yyyyMMdd, 'en');
  } else if (params.type === TransformationType.CLASS_TO_CLASS) {
    return new Date(params.value);
  } else {
    return '';
  }
}
export function transformTimespan(params: TransformFnParams) {
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    return new Date(params.value);
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    return formatDate(params.value as Date, 'HH!:mm!:ss', 'en');
  } else if (params.type === TransformationType.CLASS_TO_CLASS) {
    return new Date(params.value);
  } else {
    return '';
  }
}

export function transformFlags(params: TransformFnParams) {
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    if (params.value != undefined) {
      if (typeof params.value === 'number') {
        return new Flags(params.value);
      }
      return params.value;
    }
    return undefined;
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    if (!params.value) return 0;
    return (params.value as Flags<any>).value;
  } else {
    return params.value;
  }
}

export function transformVersion(params: TransformFnParams) {
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    if (typeof params.value === 'number') {
      let values = [];
      while (params.value > 0) {
        let item = params.value & 255;
        params.value >>= 8;
        values.push(item);
      }
      while (values.length < 4) {
        values.push(0);
      }
      return values.join('.');
    } else {
      return params.value;
    }
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    if (params.value) {
      let result = 0;
      let values = params.value.split('.');
      for (let i = 0; i < values.length; i++) {
        result += parseInt(values[i]) << (8 * i);
      }
      return result;
    }
    return 0;
  } else if (params.type === TransformationType.CLASS_TO_CLASS) {
    return params.value;
  }
}

export function transformBinary(params: TransformFnParams) {
  if (params.type === TransformationType.PLAIN_TO_CLASS) {
    if (typeof params.value === 'number') {
      if (params.value === 0) {
        return [0];
      }
      let str = params.value.toString(2).split('').reverse().join('');
      let value = [];
      for (let i = 0; i < str.length; i++) {
        let item = parseInt(str[i]);
        if (item) {
          value.push(i + 1);
        }
      }
      return value;
    }
    return params.value;
  } else if (params.type === TransformationType.CLASS_TO_PLAIN) {
    let str = '';
    for (let i = 0; i < params.value.length; i++) {
      str += params.value[i];
    }
    return parseInt(str, 2);
  } else if (params.type === TransformationType.CLASS_TO_CLASS) {
    return params.value;
  }
}
