import { Injectable } from '@angular/core';
import {
  Page,
  PagedList,
} from 'src/app/common/network/models/common/page-list.model';
import { Resolution } from 'src/app/common/network/models/mobile_service/resolution.model';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';
import { MobileRequestService } from 'src/app/common/network/request/mobile_service/mobile.request.service';
import {
  ScreenConverter,
  ScreenModel,
} from '../../../converters/screen.converter';
import { ScreenTableArgs } from './screen-table.model';

@Injectable()
export class ScreenTableBusiness {
  constructor(
    private service: MobileRequestService,
    private converter: ScreenConverter
  ) {}

  async load(index: number, size: number, args: ScreenTableArgs) {
    let data = this.test();
    let paged = new PagedList<ScreenModel>();
    paged.Page = data.Page;
    paged.Data = data.Data.map((x) => this.converter.to(x));

    return paged;
  }

  test() {
    let count = 9;
    let datas = [];
    for (let i = 0; i < count; i++) {
      let item = new Screen();
      item.Id = i.toString();
      item.Name = 'Name' + i;
      item.Resolution = new Resolution();
      item.Resolution.Width = 1920;
      item.Resolution.Height = 1080;
      item.Rotation = 0;
      item.State = 0;
      datas.push(item);
    }

    let paged = new PagedList<Screen>();
    paged.Data = datas;
    paged.Page = new Page();
    paged.Page.PageIndex = 1;
    paged.Page.PageSize = 10;
    paged.Page.PageCount = count;
    paged.Page.RecordCount = count;
    paged.Page.TotalRecordCount = count;

    return paged;
  }
}
