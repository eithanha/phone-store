import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhonesComponent } from './components/phones/phones.component';
import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';
import { PhoneEditComponent } from './components/phone-edit/phone-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'phones/:phoneId', component: PhoneDetailsComponent },
  { path: 'edit/:phoneId', component: PhoneEditComponent },
];
