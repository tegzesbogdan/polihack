import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultsComponent} from "./results/results.component";
import {ProfileComponent} from './components/profile/profile.component';
import {AddfoodComponent} from "./addfood/addfood.component";

const routes: Routes = [
  {path: '', component: ResultsComponent},
  {path: "profile", component: ProfileComponent},
  {path: "add", component: AddfoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
