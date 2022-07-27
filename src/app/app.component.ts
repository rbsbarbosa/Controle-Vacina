import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild ('mobile') sideNav?:ElementRef
  title = 'Projeto final -Controle de Vacina';


ngAfterViewinit(): void{
  let $sidenav= $('#mobile-demo');
  M.Sidenav.init(this.sideNav?.nativeElement);

  }

}
