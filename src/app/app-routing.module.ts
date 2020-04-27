import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponeComponent } from './compone/compone.component';
import { ComptwoComponent } from './comptwo/comptwo.component';


const routes: Routes = [
  { path: 'one',
    component: ComponeComponent
  },
  { path: 'two',
    component: ComptwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
