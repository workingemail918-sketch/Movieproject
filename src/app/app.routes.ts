import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Moviedet } from './moviedet/moviedet';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
        {path:'home', component: Home},
        {path:'movie/:id', component: Moviedet}
];
