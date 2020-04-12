import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdDetailsComponent} from './prod-details/prod-details.component'
import {TabsComponent} from './tabs/tabs.component'
const routes: Routes = [
  { path: '', redirectTo: '/prods', pathMatch: 'full' },
  { path: 'prods', component: TabsComponent },
  { path: 'detail/:pId', component: ProdDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
