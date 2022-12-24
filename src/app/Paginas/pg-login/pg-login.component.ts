import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-pg-login',
  templateUrl: './pg-login.component.html',
  styleUrls: ['./pg-login.component.css']
})
export class PgLoginComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  usuario:any;
  nombre:any;
  apellido:any;
  ciudad:any;
  email:any;
  fechaNacimiento:any;
  passwd:any;

  paso:boolean=false;


  confirmar():boolean{

    return this.paso;
  }
}

