import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

import config from './okta.config';
import { RxTulookupComponent } from './rx-tulookup/rx-tulookup.component';
import {HttpClientModule} from '@angular/common/http';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, router}) => {
    router.navigate(['/login']);
  }
}, config);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    RxTulookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    HttpClientModule
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: oktaConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
