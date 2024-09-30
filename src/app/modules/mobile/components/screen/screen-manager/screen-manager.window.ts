import { WindowViewModel } from 'src/app/common/components/window-control/window.model';
import { Screen } from 'src/app/common/network/models/mobile_service/screen.model';

export class ScreenManagerWindow {
  details = new DetailsWindow();
  layout = new LayoutWindow();
}

class DetailsWindow extends WindowViewModel {
  style = {
    width: '600px',
    height: '600px',
  };

  data?: Screen;
}

class LayoutWindow extends WindowViewModel {
  style = {
    width: '90%',
    height: '90%',
  };
  data?: Screen;
}
