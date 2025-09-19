import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd} from '@angular/router';
import { transicionRutas } from '../transicionRutas';
import { fadeLogo } from '../fadeLogo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  animations: [transicionRutas, fadeLogo],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent 
{
  title = 'portafolioWeb';
  paginaActual = "home";
  keyAnimacion = 0;

  constructor(public router: Router) {
    {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.keyAnimacion++; 
      }
    });
  }}

    obtenerRuta(outlet: RouterOutlet) 
    {
        return outlet?.activatedRouteData?.['animation'] || '';
    }
}
