import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SafeArea } from "capacitor-plugin-safe-area";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) { this.initializeApp()}


  /*
    A FUNÇÃO ABAIXO É USADA AJUSTAR O 
    SAFE AREA VIEW, POIS NO ANDROID O APP
    COBRE UMA PARTE DA BARRA SUPERIOR E 
    PERDE A NEVAGAÇÃO 
  */
  initializeApp() {
    this.platform.ready().then(async () => {
      await SafeArea.getSafeAreaInsets()
        .then((data) => {

          const screenWidth = window.innerWidth;

          const { insets } = data;
          console.log("AREA INSERTS: ", insets);
          const OFFSET = screenWidth > 768 ? 0 : 8; // ou 10, ou outro valor testado visualmente
          const adjustedTop = Math.max(0, insets.top - OFFSET);
          document.body.style.setProperty("--ion-safe-area-top", `${adjustedTop}px`);
          document.body.style.setProperty(
            "--ion-safe-area-right",
            `${insets.right}px`
          );
          document.body.style.setProperty(
            "--ion-safe-area-bottom",
            // `${insets.bottom}px`
            `0px`
          );
          document.body.style.setProperty(
            "--ion-safe-area-left",
            `${insets.left}px`
          );
        });
    });
  }

}
