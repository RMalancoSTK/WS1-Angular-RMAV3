import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputDataComponenComponent } from './input-data-componen/input-data-componen.component';

@NgModule({
  declarations: [InputDataComponenComponent],
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  exports: [InputDataComponenComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule {}
