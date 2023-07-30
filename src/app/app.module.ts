import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbUserModule, NbContextMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppMenuComponent } from './app-layout/app-menu/app-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbUserModule,
    NbMenuModule.forRoot(),
    NbIconModule,
    NbContextMenuModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCjeAPMvxXKpsghX4mhNGw_EB3FmiF3XnA",
      authDomain: "my-angular-hotapp.firebaseapp.com",
      projectId: "my-angular-hotapp",
      storageBucket: "my-angular-hotapp.appspot.com",
      messagingSenderId: "199098084497",
      appId: "1:199098084497:web:77d59df26bd6eb60ed2330",
      measurementId: "G-FY7SW7CDXR"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
