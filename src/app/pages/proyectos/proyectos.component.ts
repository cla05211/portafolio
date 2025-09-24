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
    descripciones = [" Proyecto realizado para la materia Práctica Profesional de la tecnicatura de Programación. Creado utilizando Angular y Supabase.",
        " Proyecto realizado para la materia Práctica Profesional de la tecnicatura de Programación. Creado utilizando Angular y Supabase"
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
