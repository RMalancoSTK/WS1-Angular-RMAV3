import { Data } from './../../interfaces/data';
import { Component } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  constructor(private welcomeService: WelcomeService) {}
  resultados: Data[] = [];
  longText!: string;

  ngOnInit(): void {
    this.welcomeService.getData().subscribe((data) => {
      this.resultados = data.my_data;
      this.longText = `Mi nombre es ${this.resultados[0].name}, Mi IS es ${this.resultados[0].is}. Tengo ${this.resultados[0].age} años y soy de ${this.resultados[0].city}, ${this.resultados[0].state}`;
    });
  }
}
