import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm(){
    console.log("Welcome to event Binding !!!")
  }

}
