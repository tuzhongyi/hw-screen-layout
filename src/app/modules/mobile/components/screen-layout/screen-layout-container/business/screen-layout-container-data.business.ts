import { Injectable } from '@angular/core';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';

@Injectable()
export class ScreenLayoutContainerDataBussiness {
  load(id: string) {
    return this.test(id);
  }

  private test(id: string) {
    let data = new ScreenLayout();
    data.Id = id;
    data.Name = 'test';
    data.ColumnCount = 12;
    data.RowCount = 256;
    data.Elements = [];
    return data;
  }
}
