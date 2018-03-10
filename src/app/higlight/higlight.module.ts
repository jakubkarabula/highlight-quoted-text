import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { PrepareTextService } from './prepare-text.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
  ],
  providers: [
    PrepareTextService,
  ],
  exports: [
    HighlightDirective,
  ]
})
export class HiglightModule { }
