import { Component } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  constructor(private welcomeService: WelcomeService) {}

  longText = ``;

  ngOnInit(): void {
    this.welcomeService.getData().subscribe((data) => {
      if (data.my_data) {
        console.log(data.my_data);
      }
    });
  }
}
