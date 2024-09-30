import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { HowellCommonModule } from 'src/app/common/common.module';
import { MaterialModule } from 'src/app/material.module';
import { LevelDivisionPanelComponent } from './division/level-division-panel/level-division-panel.component';
import { MobileIndexComponent } from './mobile-index/mobile-index.component';

import { ScreenLayoutElementDeclarations } from './screen-layout-element/screen-layout-element.declarations';
import { ScreenLayoutDeclarations } from './screen-layout/screen-layout.declarations';
import { ScreenDeclarations } from './screen/screen.declarations';
import { ScreenLayoutElementContentImageComponent } from './screen-layout-element/screen-layout-element-content/screen-layout-element-content-image/screen-layout-element-content-image.component';

@NgModule({
  declarations: [
    MobileIndexComponent,
    LevelDivisionPanelComponent,
    ...ScreenDeclarations,
    ...ScreenLayoutDeclarations,
    ...ScreenLayoutElementDeclarations,
    ScreenLayoutElementContentImageComponent,
  ],
  imports: [
    GridsterComponent,
    GridsterItemComponent,
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HowellCommonModule,
  ],
  exports: [],
  providers: [],
})
export class MobileComponentsModule {
  constructor() {}
}
