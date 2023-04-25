import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { PricesComponent } from './pages/prices/prices.component';
import { HeaderComponent } from './components/header/header.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MyOverlaysComponent } from './pages/my-overlays/my-overlays.component';
import { CardOverlayComponent } from './components/card-overlay/card-overlay.component';
import { SessionComponent } from './pages/session/session.component';
import { OverlaysComponent } from './pages/overlays/overlays.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { OverlayFootballComponent } from './components/overlays/overlay-football/overlay-football.component';
import { OverlayTennisComponent } from './components/overlays/overlay-tennis/overlay-tennis.component';
import { OverlayTimerComponent } from './components/overlays/overlay-timer/overlay-timer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PaymentComponent } from './pages/payment/payment.component';
import { RouterModule } from '@angular/router';
import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { CustomOverlayComponent } from './pages/custom-overlay/custom-overlay.component';
import { Basketball1Component } from './components/overlays/overlay-basketball/basketball1/basketball1.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent,
    PricesComponent,
    HeaderComponent,
    MyOverlaysComponent,
    CardOverlayComponent,
    SessionComponent,
    OverlaysComponent,
    PaginationComponent,
    OverlayFootballComponent,
    OverlayTennisComponent,
    OverlayTimerComponent,
    PageNotFoundComponent,
    PaymentComponent,
    HowtouseComponent,
    CustomOverlayComponent,
    Basketball1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: 'prices', component: PricesComponent }
    ])
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
