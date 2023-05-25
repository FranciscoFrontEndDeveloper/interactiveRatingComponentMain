import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SecondaryComponent } from './components/secondary/secondary.component';
import { CardmainComponent } from './components/cardmain/cardmain.component';

const routes: Routes = [
  { path: '', component: CardmainComponent },
  {
    path: 'secondary/:id',
    component: SecondaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
