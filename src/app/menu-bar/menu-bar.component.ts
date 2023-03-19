import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
.pipe(
  map(result => result.matches),
  shareReplay()
);

constructor(private breakpointObserver: BreakpointObserver) {}


}
