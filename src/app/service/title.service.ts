import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

const mainTitle = " - Digital Innovation Developer";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) {

  }

  setPage(pageName: string){
    this.title.setTitle(pageName + mainTitle);
  }
}
