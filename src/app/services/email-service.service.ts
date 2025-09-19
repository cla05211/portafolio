import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
    private servicioID = 'service_rbu1btq';
    private plantillaID = 'template_h42kzls';
    private key = 'A9vjNSD1cpoQ9oRg3';

  constructor() 
  { 
    emailjs.init(this.key);
  }

  enviarMail(email:string, mensaje:string)
  {
    const dataPlantilla = 
    {
        from_email: email,
        message: mensaje,
        reply_to: email
    };

    return emailjs.send(this.servicioID,this.plantillaID, dataPlantilla);
  }
}
