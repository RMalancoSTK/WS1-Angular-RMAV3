import { Data } from './../../interfaces/data';
import { Component } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  constructor(private welcomeService: WelcomeService) {}
  longText!: string;

  ngOnInit(): void {
    this.welcomeService.getData().subscribe((data: Data) => {});
  }
}
