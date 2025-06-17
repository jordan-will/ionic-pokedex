import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: false
})
export class LoadingPage{

  constructor(
    private router: Router
  ) { }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.router.navigate(['/tabs/tabs/tab1']);
    }, 2500)
  }

}
