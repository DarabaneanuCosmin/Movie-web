import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

export class GeneratedRoutes {
  routes: Routes;
  token = localStorage.getItem("token");
  constructor(){
    this.routes = [
      {path:'', redirectTo: 'home', pathMatch:'full'},
    ];
  }
}

@NgModule({
  imports: [RouterModule.forRoot(new GeneratedRoutes().routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
