import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestrouteComponent } from '../testroute/testroute.component';

const routes: Routes = [
  { path: 'test', component: TestrouteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Booking2RoutingModule { }
