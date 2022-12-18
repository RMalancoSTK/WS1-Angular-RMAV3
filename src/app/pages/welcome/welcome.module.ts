import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRouteModule } from './welcome.route';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [WelcomeRouteModule, MatCardModule],
  declarations: [WelcomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeModule {}
