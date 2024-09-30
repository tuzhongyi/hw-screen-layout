import { NgModule } from '@angular/core';
import { MobileComponentsModule } from './components/mobile-components.module';
import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';

@NgModule({
  declarations: [MobileComponent],
  imports: [MobileRoutingModule, MobileComponentsModule],
})
export class MobileModule {}
