import { Routes } from '@angular/router';
import { For } from './components/for/for';
import { Home } from './components/home/home';
import { PadreSignal } from './components/PadreHijoSignal/padre-signal/padre-signal';

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
    },{
        path: 'padre-hijo-signal',
        title: 'padre-hijo-signal',
        component: PadreSignal
    }
];
