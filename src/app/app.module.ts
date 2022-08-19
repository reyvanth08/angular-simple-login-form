import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main/main.component';
import { ReactiveHomeComponent } from './reactive-form/reactive-home/reactive-home.component';
import { ReactiveLoginComponent } from './reactive-form/reactive-login/reactive-login.component';

const routes: Routes = [
	{ path: 'main', component: MainComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'reactive-home', component: ReactiveHomeComponent, canActivate: [AuthGuard] },
	{ path: 'reactive-login', component: ReactiveLoginComponent },
	{ path: 'page-not-found', component: PageNotFoundComponent },
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ReactiveHomeComponent,
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
