import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public perchè lo esponiamo all'html
  constructor(public authService: AuthService){

  }

  doLogout(event: Event): void{
    event.preventDefault(); //impedisce la navigazione standard
    //anche in questo caso mi prendo l'observable e mi registro come observer
    let logoutResult = this.authService.doLogout();
    logoutResult.subscribe((resultValue)=> this.doLogoutSuccess(resultValue), (error)=>this.doLogoutError(error));
  }

  doLogoutSuccess(ignored: boolean): void{
    alert("Ti sei disconnesso. Torna presto!");
  }

  doLogoutError(error: any): void{
    alert("Errore. Riprova.");
  }
}