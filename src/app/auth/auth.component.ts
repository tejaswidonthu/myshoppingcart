import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
}

onSubmit(form : NgForm){
    if(!form.value){
        return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){
        //authObservable = this.authService.Login(email , password);
    }else{
        //authObservable = this.authService.SignUp(email , password);
    }
    /*authObservable.subscribe(resData => {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['/recipes']);
    },errorMessage => {
        this.isLoading = false;
        console.log(errorMessage);
        this.error = errorMessage;
    });*/
    form.reset();
}

}
