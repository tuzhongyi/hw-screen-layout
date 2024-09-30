import { GridsterItem } from 'angular-gridster2';
import { ScreenLayoutElement } from 'src/app/common/network/models/mobile_service/screen-layout-element.model';

export class ScreenLayoutContainerScreenLayoutElementConverter {
  to(source: ScreenLayoutElement): GridsterItem {
    let item: GridsterItem = {
      x: source.Column,
      y: source.Row,
      cols: source.SpanColumn,
      rows: source.SpanRow,
      resizeEnabled: true,
    };
    return item;
  }
  from(source: GridsterItem, item?: ScreenLayoutElement) {
    if (!item) {
      item = new ScreenLayoutElement();
    }
    item.Column = source.x;
    item.Row = source.y;
    item.SpanColumn = source.cols;
    item.SpanRow = source.rows;
    return item;
  }
}
