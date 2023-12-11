import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '404',
        loadComponent: () => import('./404/404.component').then(m => m.FourZeroFourComponent),
    }
];
