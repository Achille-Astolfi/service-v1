import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LoginTemplateForm } from '../login-template-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  template = new LoginTemplateForm();
  
  formDisabled = false;

  passwordType = "password";

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.template.clear();
  }

  validForm(): boolean {
    return this.template.username.length >= 1 && this.template.password.length >= 8;
  }

  doShowHide(event: Event): void {
    if(this.passwordType === "password"){
      this.passwordType = "text";
    } else {
      this.passwordType = "password";
    }
  }

  buttonLabel(): string {
    if(this.passwordType === "password"){
      return "Mostra";
    } else {
      return "Nascondi";
    }
  }

  formOnSubmit(event: Event): void{
    // la prima cosa da fare: 
    // 1) disabilitare il pulsante Login
    this.formDisabled = true;
    // 2) invocare doLogin
    let loginResult = this.authService.doLogin(this.template.username, this.template.password);
    // 3) pulire ALMENO la password - dipende dalle specifiche che ci danno
    //    (quindi me la devo prima salvare da qualche parte)
    this.template.clear();
    // seguiamo l'Observer/Observable pattern e ci registriamo come Observer di loginResult che,
    // da specifiche del metodo doLogin, è un Observable
    // I metodi di callback in TypeScript si specificano con una costruzione che si chiama
    // LAMBDA EXPRESSION
    // se va bene, viene eseguito il primo paramentro,
    // se va MaxLengthValidator, viene eseguito il secondo paramentro
    loginResult.subscribe((resultValue) => this.loginReplied(resultValue), (error) => this.loginError(error));
  }

  // il mio consiglio è: prepariamo due metodi per registrarci come Observer
  // Hanno un nome: si chiamano METODI DI CALLBACK
  // un metodo per quando va bene
  // VA BENE si intende: il servizio di autenticazione ha risposto; potrebbe aver risposto false
  loginReplied(authenticated:boolean): void{
      // innanzi tutto deve riabiitare il tasto Login
      this.formDisabled = false;
      // se authenticated è false, diamo un messaggio di credenziali errate
      if(!authenticated){
        alert("Credenziali errate!");
      }
      // altrimenti diamo un feedback - di solito si naviga a una dashboard
      // nel nostro caso possiamo sparare un alert
      else{
        alert("Hai indovinato la password!")
      }
  } 

  // un metodo per quando non va bene
  // NON VA BENE si intende: il servizio ha risposto con 4xx, 5xx oppure è andata in timeout
  loginError(error: any): void {
    // in questo caso in realtà questo codice non viene eseguito
    // innanzi tutto deve riabilitare il tasto Login
    this.formDisabled = false;
    //diamo un messaggio di errore di connessione o errore tecnico 
    // "riprova più tardi"
    alert("Riprova più tardi!")
  }

}
