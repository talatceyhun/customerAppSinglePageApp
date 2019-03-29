import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../models/customer";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { AuthService } from '../services/auth.service';


@Component({

  selector: "app-customerAdd",
  templateUrl: "./customerAdd.component.html",
  styleUrls: ["./customerAdd.component.css"],
  providers: [CustomerService]
})
export class CustomerAddComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private authService:AuthService
  ) {}
  customer: Customer;
  create:string;

  customerAddForm: FormGroup;
  createCustomerForm() {
    this.customerAddForm = this.formBuilder.group({
      Name: ["", Validators.required],
      PhoneNumber: ["", Validators.required],
      Mail: ["", Validators.required],
      City: ["", Validators.required],
      Note: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.createCustomerForm();
    this.create = "";
    
  }

  add(){
    if(this.customerAddForm.valid){
      this.customer = Object.assign({},this.customerAddForm.value)
      this.customerService.add(this.customer);
      this.create = "Customer Created"
    }
    
  }
  get isAuthenticated(){
    return this.authService.loggedIn();
  }

}
