import { HttpClient } from '@angular/common/http';
import { ClassConstructor } from 'class-transformer';
import { IIdModel } from '../common/model/model.interface';
import { PagedList } from '../common/model/page-list.model';
import { IParams, PagedParams } from '../common/model/params.interface';
import { AbstractUrl } from '../url/abstract.url';
import { HowellTypeRequestService } from './howell-type.request.service';

export abstract class HowellAbstractService<T extends IIdModel> {
  constructor(
    http: HttpClient,
    type: ClassConstructor<T>,
    private url: AbstractUrl
  ) {
    this.service = new HowellTypeRequestService<T>(http, type);
  }
  private service: HowellTypeRequestService<T>;

  array() {
    let url = this.url.basic();
    return this.service.array(url);
  }
  create(data: T) {
    let url = this.url.basic();
    return this.service.post(url, data);
  }
  get(id: string): Promise<T> {
    let url = this.url.item(id);
    return this.service.get(url);
  }

  update(data: T) {
    let url = this.url.item(data.Id);
    return this.service.put(url, data);
  }
  delete(id: string): Promise<T> {
    let url = this.url.item(id);
    return this.service.delete(url);
  }
  list(params: IParams): Promise<PagedList<T>> {
    let url = this.url.list();
    return this.service.paged(url, params);
  }

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
