import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-catalogo',
  templateUrl: './pg-catalogo.component.html',
  styleUrls: ['./pg-catalogo.component.css']
})
export class PgCatalogoComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {

  }
  user:any=localStorage.getItem('nombre');
}
