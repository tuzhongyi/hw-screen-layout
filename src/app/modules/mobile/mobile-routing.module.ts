import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileIndexComponent } from './components/mobile-index/mobile-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mobile-index',
    pathMatch: 'full',
  },
  {
    path: 'mobile-index',
    component: MobileIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
