import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/interfaces/pagesContents.interface';
import { LoadContentService } from 'src/app/services/load-content/load-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  pageContent:Footer = {

  }

  constructor (private load:LoadContentService){}

  ngOnInit() {

    this.load.loadContent("footer").then(data => this.pageContent=data);
  }

}
