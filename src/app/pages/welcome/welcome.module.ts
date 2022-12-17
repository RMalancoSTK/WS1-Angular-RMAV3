import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRouteModule } from './welcome.route';
import { NgModule } from '@angular/core';
import { WelcomeService } from './welcome.service';

@NgModule({
  imports: [WelcomeRouteModule],
  declarations: [WelcomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeModule {}
