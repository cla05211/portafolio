import { Component, inject, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Dialog} from '@angular/cdk/dialog';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    private dialog = inject(Dialog);

    abrirContactar()
    {
        this.dialog.open(ContactoComponent,
            {
                width: '40%',
                height: '60vh',
            });  
    }
}
