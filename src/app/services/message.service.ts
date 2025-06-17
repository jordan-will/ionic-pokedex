import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(msg:string, duration:number = 2000){
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
    });

    await toast.present();
}

}
