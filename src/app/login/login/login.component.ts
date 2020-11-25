import { Component, OnInit } from '@angular/core';
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

  formOnSubmit(event: Event): void {
    //1: disabilitare il pulsante "Login"
    this.formDisabled = true;
    //2: invocare doLogin()
    let loginResult = this.authService.doLogin(this.template.username, this.template.password);
    //3: pulire i campi
    this.template.clear();
    //4: riabilitare il pulsante "Login"
    //this.formDisabled= false;
    //seguiamo l'observer/Obsrvable pattern e ci registriamo come Observer di 
    //loginResult che, da specifiche del metodo doLogin, è un Observable.

    //I metodi di callback in Typescript si specificano con una 
    //costruzione che si chiama LAMBDA EXPRESSION
    loginResult.subscribe(
      (resultValue) => this.loginReplied(resultValue),  //se va bene
      (error) => this.loginError(error)   //se va male
    );
  }

  //consiglio: prepariamo due metodi per registrarci come Observer
  //si chiamano METODI DI CALLBACK
  //1. Per quando va tutto bene(quindi se il servizio di autenticazione ha risposto)
  loginReplied(authenticated: boolean): void {
    //1. riabilito il tasto Login
    this.formDisabled = false;
    //se authenticated è false: messaggio di credenziali errate
    if (!authenticated) {
      alert("Credenziali errate");
      //altrimenti diamo un feedback - di solito si naviga in una dashboard
      //nel nostro caso possiamo sparare un alert 
    } else {
      alert("Hai indovinato la password!");
    }
  }

  //2. Per quando non va bene (quindi se il servizio risponde con 4xx 5xx oppure è andata in timeout)
  loginError(error: any): void {
    //in questo caso in realtà questo codice non verrà eseguito
    //1. riabilito il tasto Login
    this.formDisabled = false;
    //diamo un messaggio si errore tecnico
    //"ritenta sarai più fortunato!"
    alert("Ritenta, sarai più fortuanto");
  }

  doShowHide(event: Event): void {
    if (this.passwordType === "password") {
      this.passwordType = "text";
    } else {
      this.passwordType = "password";
    }
  }

  buttonLabel(): string {
    if(this.passwordType ==="password"){
      return "Mostra";
    } else {
      return "Nascondi";
    }
  }

  validForm():boolean {
    return this.template.username.length >= 1 && this.template.password.length>=8;
  }

}
