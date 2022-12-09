import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [LoginRouteModule],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
