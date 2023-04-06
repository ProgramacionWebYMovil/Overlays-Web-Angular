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
import { ROUTES, RouterModule } from '@angular/router';
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
import { OverlayBasketballComponent } from './components/overlays/overlay-basketball/overlay-basketball.component';

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
    OverlayBasketballComponent,
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
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
