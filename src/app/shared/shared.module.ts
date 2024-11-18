import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipepricePipe } from './pipe/pipeprice.pipe';
import { pipe } from 'rxjs';
import { PipesurfacePipe } from './pipe/pipesurface.pipe';



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
