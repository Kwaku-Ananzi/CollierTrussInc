import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
     {
          path: 'home',
          title: 'home',
          component: HeroComponent
     },
     {
          path: 'about-us',
          title: 'aboutUs',
          component: AboutUsComponent
     },
     {
          path:'contact-us',
          title: 'contactUs',
          component: ContactUsComponent
     },
     {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
     } // Default Route 
     ,
     {
          path: '**',
          redirectTo: '/home',
          pathMatch: 'full'
     }

];
