import { CommonModule, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonComponentsDeclaration } from './components/common-component.declaration';
import { CommonDirectivesDeclaration } from './directives/directive.declaration';
import { CommonPipesDeclaration } from './pipes/pipe.declaration';

registerLocaleData(zh, 'zh-CN');

const Declarations = [
  ...CommonPipesDeclaration,
  ...CommonComponentsDeclaration,
  ...CommonDirectivesDeclaration,
];

@NgModule({
  declarations: Declarations,
  exports: Declarations,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class HowellCommonModule {}
