import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService,private authService:AuthService) { }
  customers:Customer[];
  ngOnInit() {
    this.customerService.getCustomers().subscribe(data =>{
      this.customers = data;
    });
    

    
  }

  get isAuthenticated(){
    return this.authService.loggedIn();
  }

  
}
