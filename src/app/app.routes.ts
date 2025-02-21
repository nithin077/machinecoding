import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'canvas', component: CanvasComponent }
];
