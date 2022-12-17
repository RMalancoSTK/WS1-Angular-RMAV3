import { Component } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  // longText: string =
  //   'Mi nombre es Rafael Malamco Velazquez, Mi IS es 1234, Tengo 40 años, soy de Metepec, México';

  constructor(private welcomeService: WelcomeService) {}

  longText: string = this.welcomeService.tittle;

  // Para obtener los datos del archivo json debemos llamar al metodo getData() y suscribirnos a el:
  ngOnInit(): void {
    this.welcomeService.getData().subscribe((data) => {
      if (data.my_data) {
        console.log(data.my_data);
      }
    });
  }
}
