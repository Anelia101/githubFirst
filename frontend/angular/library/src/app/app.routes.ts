import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from "./registration/registration.component";
import {BooksComponent} from './books/books.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home',
    title: 'Home Page',
    component: HomeComponent },
  {
    path: 'books',
    title: 'Top10',
    component: BooksComponent
  },
  { path: 'user',
    title: 'User Page',
    component: UserComponent
  },
  {
    path: 'registration',
    title: 'Register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }


];
