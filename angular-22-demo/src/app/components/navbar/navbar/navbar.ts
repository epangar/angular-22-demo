import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {

  routes: Route[]
  constructor(){
    this.routes = this.setRoutes(routes);
  }

  setRoutes(routes:Route[]): Route[]{
    return routes.filter((route: Route) => !!route.path && route.path.length > 0)
  }
  
}
