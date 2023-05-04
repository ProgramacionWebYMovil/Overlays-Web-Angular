import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  parametro1!: string;
  parametro2!: string;
  constructor(private route:ActivatedRoute){

  }

  

  ngOnInit(){
    this.parametro1 = this.route.snapshot.params['parametro1'];
    this.parametro2 = this.route.snapshot.params['parametro2'];
    console.log(this.parametro1,this.parametro2);
  }
}
