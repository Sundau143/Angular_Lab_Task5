import { Component, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   title = 'Lab Task #5';

   constructor(private translateService: TranslateService) {

   }


   ngOnInit(): void {
      this.translateService.langs = ['en', 'ru'];
      this.translateService.setDefaultLang('en');
      this.translateService.use(localStorage.getItem('lang') || '');
   }

}

