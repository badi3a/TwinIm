import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipepricePipe } from './pipes/pipeprice.pipe';
import { pipe } from 'rxjs';
import { PipesurfacePipe } from './pipes/pipesurface.pipe';



@NgModule({
  declarations: [
    PipepricePipe,
    PipesurfacePipe
  ],
  exports: [
    PipepricePipe,
    PipesurfacePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
