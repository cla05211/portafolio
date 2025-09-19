import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import{ FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailServiceService } from '../../services/email-service.service';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
    emailService = inject(EmailServiceService);
    error = false;
    enviado = false;

    formularioMensaje = new FormGroup
    ({
        correo: new FormControl('',[Validators.required,Validators.email]),
        mensaje: new FormControl('',[Validators.required, Validators.minLength(20)]),
    })

    verficarCampo(controlName: string): string | null 
    {
        const control = this.formularioMensaje.get(controlName);
        var mensaje = null;

        if (control?.touched) 
        {
          if (control.hasError('required')) {mensaje = 'Este campo es obligatorio.'};
          if (control.hasError('email')) {mensaje = 'Debe ser un correo válido.'};
          if (control.hasError('minlength')) {mensaje = 'El mensaje ingresado es demasiado corto.'};
        }
        return mensaje;
    }

    enviarMensaje()
    {
        if (this.formularioMensaje.invalid) 
        {
            this.formularioMensaje.markAllAsTouched();
            return;
        }
        else
        {
            if (!this.enviado)
            {
                console.log("enviando");
                const correo = String(this.formularioMensaje.get('correo')?.value);
                const mensaje = String(this.formularioMensaje.get('mensaje')?.value);

                this.emailService.enviarMail(correo, mensaje)
                .then(() => 
                    {
                        this.error = false;
                        this.enviado = true;
                    })
                .catch((error) => 
                    {
                        console.log("Error al enviar:" , error)
                        error = true;
                    })
            }
        }
    }
}
