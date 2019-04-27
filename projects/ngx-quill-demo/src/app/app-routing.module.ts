import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import { ThemesComponent } from './themes/themes.component';
import { ImageHandlerComponent } from './image-handler/image-handler.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'custom-toolbar', component: CustomToolbarComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'image-handler', component: ImageHandlerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
