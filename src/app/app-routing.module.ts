import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOverlaysComponent } from './pages/my-overlays/my-overlays.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'myOverlays', component: MyOverlaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
