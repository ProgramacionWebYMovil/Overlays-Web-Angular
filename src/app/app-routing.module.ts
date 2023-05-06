import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOverlaysComponent } from './pages/my-overlays/my-overlays.component';
import { IndexComponent } from './pages/index/index.component';
import { OverlaysComponent } from './pages/overlays/overlays.component';
import { SessionComponent } from './pages/session/session.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PricesComponent } from './pages/prices/prices.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { CustomOverlayComponent } from './pages/custom-overlay/custom-overlay.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {path:'', component: IndexComponent},
  {path:'myOverlays', component: MyOverlaysComponent},
  {path:'overlays',component:OverlaysComponent},
  {path:"session/:sessionOption", component:SessionComponent},
  {path:"session", component:SessionComponent},
  {path:'prices',component:PricesComponent},
  {path:'payment',component:PaymentComponent},
  {path:'howToUse',component:HowtouseComponent},
  {path: 'profile', component:ProfileComponent},
  {path:'edit/:uid/:id',component:CustomOverlayComponent},


  { path: '**', pathMatch: 'full',component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
