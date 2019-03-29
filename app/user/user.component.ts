import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private authService:AuthService,private formBuilder:FormBuilder) {}

  registerForm : FormGroup
  create: string
  registerUser:any={

  }

  ngOnInit() {
    //alert("deneme");
    this.create="";
    this.createRegisterForm();
    
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required],
      confirmPassword:["",Validators.required]
    },
    {validator:this.passwordMatchValidator})
  }
  passwordMatchValidator(g:FormGroup){
    return g.get("password").value === g.get("confirmPassword").value?null:{misMatch:true}
  }
  
  register(){
    if(this.registerForm.valid){
      this.registerUser = Object.assign({},this.registerForm.value)
      this.authService.register(this.registerUser)
      this.create = "User Created"
    }
  }

  get isAuthenticated(){
    return this.authService.loggedIn();
  }
}
