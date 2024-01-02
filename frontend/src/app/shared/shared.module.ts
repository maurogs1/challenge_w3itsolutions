import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageFormatPipe } from './pipes/percentaje.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    PercentageFormatPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
    PercentageFormatPipe
  ]
})
export class SharedModule { }
