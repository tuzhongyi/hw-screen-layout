import { Injectable } from '@angular/core';
import { ILevelListNode } from 'src/app/common/components/level-list-panel/level-list-panel.model';
import { Division } from 'src/app/common/network/models/mobile_service/division.model';
import { GetDivisionsParams } from 'src/app/common/network/request/mobile_service/division/mobile-division.request.params';
import { MobileRequestService } from 'src/app/common/network/request/mobile_service/mobile.request.service';

@Injectable()
export class LevelDivisionPanelBusiness {
  constructor(private service: MobileRequestService) {}

  Converter = new Converter();

  async load(parent?: ILevelListNode): Promise<ILevelListNode[]> {
    let parentId = parent?.Id;
    let data = await this.getData(parentId);
    let model = this.Converter.Convert(data);
    if (parent && parent.ParentId) {
      model.unshift({
        Id: parent.ParentId,
        Name: parent.Name,
        Language: '上一级',
      });
    }
    return model;
  }
  async getData(parentId?: string): Promise<Division[]> {
    let params = new GetDivisionsParams();
    params.ParentId = parentId;
    let paged = await this.service.division.list(params);
    return paged.Data;
  }
}

class Converter {
  Convert(source: Division[], ...res: any[]): ILevelListNode[] {
    return source;
  }
}
