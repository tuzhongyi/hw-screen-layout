import { GridType, GridsterConfig } from 'angular-gridster2';
import { ScreenLayout } from 'src/app/common/network/models/mobile_service/screen-layout.model';

export class ScreenLayoutContainerScreenLayoutConverter {
  to(source: ScreenLayout): GridsterConfig {
    let item: GridsterConfig = {
      gridType: GridType.ScrollVertical,
      margin: 10,
      minCols: 1,

      minRows: 1,
      maxCols: 4,
      maxRows: source.RowCount,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
    };

    return item;
  }
  from(source: GridsterConfig, item?: ScreenLayout) {
    if (!item) {
      item = new ScreenLayout();
    }

    return item;
  }
}
