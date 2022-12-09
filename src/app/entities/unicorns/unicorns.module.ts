import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UnicornsComponent } from './unicorns.component';
import { UnicornsRouteModule } from './unicorns.route';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [UnicornsRouteModule],
  declarations: [UnicornsComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnicornsModule {}
