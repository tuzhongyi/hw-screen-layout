import { PagedList } from '../models/common/page-list.model';
import { IParams, PagedParams } from '../models/common/params.interface';

export interface IData {
  Id: string;
}

export interface IService<T extends IData> {
  get: (id: string) => Promise<T>;
  update?: (data: T) => Promise<T>;
  create?: (data: T) => Promise<T>;
  delete?: (id: string) => Promise<T>;
  list: (args?: IParams) => Promise<PagedList<T>>;
  all?: (params?: PagedParams) => Promise<T[]>;
}

export abstract class AbstractService<T extends IData> {
  abstract list(args?: IParams): Promise<PagedList<T>>;
  async all(params: PagedParams = new PagedParams()) {
    let data: T[] = [];
    let index = 1;
    let paged: PagedList<T>;
    do {
      params.PageIndex = index;
      paged = await this.list(params);
      data = data.concat(paged.Data);
      index++;
    } while (index <= paged.Page.PageCount);
    return data;
  }
}
