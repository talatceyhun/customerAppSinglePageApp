import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { Routes } from '@angular/router';
import { CustomerAddComponent } from './customerAdd/customerAdd.component';
import { CustomerUpdateDeleteComponent } from './customerUpdateDelete/customerUpdateDelete.component';

export const appRoutes : Routes = [
    {path:"register", component:UserComponent},
    {path:"customers",component:CustomerComponent},
    {path:"customeradd",component:CustomerAddComponent},
    {path:"customerupdel/:customerId",component:CustomerUpdateDeleteComponent},
    {path:"**",redirectTo:"customers", pathMatch: "full"}

];




