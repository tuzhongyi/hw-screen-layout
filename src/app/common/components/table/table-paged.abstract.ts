import { PageEvent } from '@angular/material/paginator';
import { Page } from '../../network/models/common/page-list.model';
import { AbstractTable } from './table.abstract';

export abstract class AbstractPagedTable<T> extends AbstractTable<T> {
  constructor(sticky: boolean = false) {
    super(sticky);
  }
  page: Page = new Page();
  abstract load(index: number, size: number, ...args: any[]): Promise<void>;

  pageSize = 10;

  getPaged(count: number, size: number): Page {
    let current = size % count;
    if (current === 0) {
      current = size;
    }

    let page = {
      PageSize: size,
      PageCount: Math.ceil(count / size),
      PageIndex: Math.ceil(count / size),
      RecordCount: current,
      TotalRecordCount: count,
    };
    return page;
  }

  pageEvent(page: PageEvent) {
    this.load(page.pageIndex + 1, this.pageSize);
  }
}
