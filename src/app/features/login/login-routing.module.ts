import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', component: LoginComponent }
];
@NgModule({

  imports: [

    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
