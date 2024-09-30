import { WindowViewModel } from 'src/app/common/components/window-control/window.model';
import { ScreenLayoutElement } from 'src/app/common/network/models/mobile_service/screen-layout-element.model';

export class ScreenLayoutManagerWindow {
  element = new ElementWindow();
}

class ElementWindow extends WindowViewModel {
  clear() {
    this.data = undefined;
  }

  style = {
    width: '70%',
    height: '70%',
  };

  data?: ScreenLayoutElement;
}
