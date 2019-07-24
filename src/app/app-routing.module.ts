import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {OktaAuthGuard, OktaCallbackComponent} from '@okta/okta-angular';
import {ContentComponent} from './content/content.component';
import {RxTulookupComponent} from './rx-tulookup/rx-tulookup.component';

const routes: Routes = [
  {path: '', component: ContentComponent, canActivate: [OktaAuthGuard]},
  {path: 'login', component: LoginComponent},
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {path: 'tulookups', component: RxTulookupComponent, canActivate: [OktaAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
