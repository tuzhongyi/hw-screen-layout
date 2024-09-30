import { Page } from './page-list.model';

export interface IModel {}
export interface IIdModel<T = string> extends IModel {
  Id: T;
}
export interface IIdNameModel<T = string> extends IIdModel<T> {
  Name: string;
}
export interface PagedArgs<T = any> {
  data: T;
  page: Page;
}
export interface ImagePagedArgs<T = any> extends PagedArgs<T> {
  index: number;
}
