import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOverlaysComponent } from './pages/my-overlays/my-overlays.component';
import { IndexComponent } from './pages/index/index.component';
import { OverlaysComponent } from './pages/overlays/overlays.component';
import { SessionComponent } from './pages/session/session.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'myOverlays', component: MyOverlaysComponent},
  {path:'overlays',component:OverlaysComponent},
  {path:"session/:sessionOption", component:SessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
