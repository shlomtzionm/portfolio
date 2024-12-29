import { RouterModule, Routes } from '@angular/router';
import { page404Component } from './components/pages/page404/page404.component';
import { NgModule } from '@angular/core';
import { homeComponent } from './components/pages/Home/home.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';

export const routes: Routes = [
    {path: 'Home', component:homeComponent},
    {path: 'contact', component:FooterComponent},
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**",   component: page404Component}, //404
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled', 
        anchorScrolling: 'enabled',          
      })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}