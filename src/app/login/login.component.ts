import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform: FormGroup;
  loginUser: string;
  formGroupDirective: FormGroupDirective;

  constructor(private formBuilder: FormBuilder, private authService:AuthService,private routeService: RouterService ) {
    console.log("login");
    this.loginform = this.formBuilder.group({
      username:['',Validators.compose([Validators.required, Validators.minLength(5)])],
      password:['',Validators.compose([Validators.required, Validators.minLength(6)])]
    })
   }

  ngOnInit(): void {
    console.log(" Login Component login");
  }

  validateUser(loginform: FormGroup){
    console.log(loginform.value);

   console.log("validateUser function:",loginform.value);
   this.loginUser = loginform.value;
   
   console.log(this.loginUser);
   this.authService.authenticatedUser(this.loginUser).subscribe(res =>{
     console.log("inside subscribe");
     console.log(res);
     this.authService.setBearerToken(res['token'])
     this.routeService.routeToDashboard();

   }, err =>{
     console.log('invalid Credentials')
   })
  }

}
