import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputDataComponenComponent } from './input-data-componen/input-data-componen.component';

@NgModule({
  declarations: [InputDataComponenComponent],
  imports: [FormsModule],
  exports: [InputDataComponenComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule {}
