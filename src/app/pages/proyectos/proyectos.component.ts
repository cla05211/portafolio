import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
    proyectos = ["Clínica", "Sala de Juegos"];
    lenguajesUtilizados = ["HTML/CSS/TS", "HTML/CSS/TS"];
    descripciones = [" Proyecto realizado en el 4to cuatrimestre de la tecnicatura de Programacion. Creada utilizando Angular como framework y Supabase para la base de datos.",
        " Proyecto realizado en el 4to cuatrimestre de la tecnicatura de Programacion. Creada utilizando Angular como framework y Supabase para la base de datos. El juego Preguntados fue realizado utilizando una API externa."
    ];
    links = ["https://clara-cuenca-clinica-online-2025.vercel.app/home", "https://cla05211-clara-cuenca-sala-de-juegos-2025.vercel.app/home"];
    nroSlideActual = 0;

    avanzarSiguienteSlide()
    {
        if (this.nroSlideActual + 1 < this.proyectos.length)
        {
            this.nroSlideActual += 1
        }
        else
        {
            this.nroSlideActual = 0;
        }
    }

    retrocederAnteriorSlide()
    {
        if (this.nroSlideActual - 1 >= 0)
        {
            this.nroSlideActual -= 1
        }
        else
        {
            this.nroSlideActual = this.proyectos.length - 1;
        }
    }
}
