import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Moviedet } from './moviedet/moviedet';
import { Sign } from './sign/sign';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
        {path:'home', component: Home},
                {path:'signin', component: Sign},

        {path:'movie/:id', component: Moviedet}
];
