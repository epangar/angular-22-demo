import { Routes } from '@angular/router';
import { For } from './components/for/for';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        title: 'home', 
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'home',
        component: Home
    },
    {
        path: 'for',
        title: 'for',
        component: For
    }
];
