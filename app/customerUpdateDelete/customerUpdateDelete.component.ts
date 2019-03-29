import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule
} from "@angular/forms";
imports: [ ReactiveFormsModule
]

@Component({
  selector: 'app-customerUpdateDelete',
  templateUrl: './customerUpdateDelete.component.html',
  styleUrls: ['./customerUpdateDelete.component.css'],
  providers:[CustomerService]

})
export class CustomerUpdateDeleteComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private customerService:CustomerService,private formBuilder: FormBuilder
    ) { }

  public customer:Customer = new Customer();
  customerAddForm: FormGroup;
  

  createCustomerForm() {
    this.customerAddForm = this.formBuilder.group({
      Id:["",Validators.required],
      Name: ["", Validators.required],
      PhoneNumber: ["", Validators.required],
      Mail: ["", Validators.required],
      City: ["", Validators.required],
      Note: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCustomerById(params["customerId"])

   })


   this.createCustomerForm();


  }
  refresh(): void {
    window.location.reload();
}
  put(){
    if(this.customerAddForm.valid){
      this.customer = Object.assign({},this.customerAddForm.value)
      this.customerService.put(this.customer);
      this.refresh(); // sayfayı yeniliyorum çünkü customer componente gidince sayfa yenilenmediği için veriler anında güncellenmiyor.
      this.router.navigateByUrl("/customers");
    }
    
  }
  delete(){
    if(this.customerAddForm.valid){
      this.customer = Object.assign({},this.customerAddForm.value)
      this.customerService.delete(this.customer.Id);
      
  }
}

  getCustomerById(customerId){
    this.customerService.getCustomerById(customerId).subscribe(data => {
      this.customer = data;
    })
  }
}