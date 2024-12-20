import { Routes } from '@angular/router';
import { AnatomicalStructuresComponent } from './components/anatomical-structures/anatomical-structures.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'anatomicalstructures',
        pathMatch:'full'
    },
    {
        path:'anatomicalstructures',
        component:AnatomicalStructuresComponent
    }
];
