import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UnicornsComponent } from './unicorns.component';
import { UnicornsRouteModule } from './unicorns.route';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [UnicornsRouteModule, MatCardModule],
  declarations: [UnicornsComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnicornsModule {}
