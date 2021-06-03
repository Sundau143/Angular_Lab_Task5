import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCarGroupComponent } from './first-car-group/first-car-group.component';
import { HistoryComponent } from './history/history.component';
import { SecondCarGroupComponent } from './second-car-group/second-car-group.component';
import { ThirdCarGroupComponent } from './third-car-group/third-car-group.component';


const routes: Routes = [
  { path: 'history', component:  HistoryComponent},
  { path: '1960s-1990s', component: FirstCarGroupComponent },
  { path: '1990s-2010s', component: SecondCarGroupComponent},
  { path: '2010s-2020s', component: ThirdCarGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [];
