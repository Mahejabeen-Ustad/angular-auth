import { Component, OnInit } from '@angular/core';
import {Vedio} from '../vedio';
import {VedioService} from '../vedio.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'angularapi';
  vedio: Vedio;
  vedioList: Array<Vedio>;


  constructor(private gitService: VedioService) {
    this.vedio =new Vedio();
    this.vedioList = [];

   }

   ngOnInit(){
    this.gitService.getVedios().subscribe(resp =>{
      this.vedioList = resp;
      console.log(resp);
      console.log(this.vedioList);
    }),
    error =>{
      console.log(error);
    }
  }

  //adding data as favourite  title, posterPath, description 
  add(title: string, posterPath: string, description: string) {
    console.log("add button clicked");
    //creating obj of data to 
    var obj ={
      title : title,
      posterPath: posterPath,
      description: description     
    }

    this.gitService.addFavourite(obj).subscribe();
  }




}
