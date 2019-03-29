import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  path = "https://localhost:44361/api/";

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.path + "customers");
  }
  getCustomerById(customerId): Observable<Customer> {
    return this.http.get<Customer>(this.path + "customers/"+customerId);
  }

  
  add(customer){
    this.http.post(this.path + "customers/add", customer).subscribe();
  }

  put(customer) {
    this.http.put(this.path + "customers/edit",customer).subscribe();
  }

  delete(customerId){
    this.http.delete(this.path+"customers/delete/"+customerId).subscribe();
  }
}
