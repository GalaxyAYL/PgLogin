import { Producto } from './../../clases/Producto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private router:Router) { }

  //MIS VARIABLES Y OBJETOS

  id:String;
  descripcion:String;
  cantidad:number;
  precio:number;

  producto:Producto

  comprados: Array<Producto>;

  //MIS METODOS
  ngOnInit() {
    localStorage.clear();
  }

  regresar(){
    this.router.navigate(['pgLogin'])
  }

  facturar(){
    this.producto=new Producto("Sanduche de pollo","Pan, cebolla, tomate, pollo, carne, lechuga,adereso, mayonesa, mostaza, champinon"
    , 2,5);
    //this.comprados.push(this.producto)
    //localStorage.setItem('comprados',JSON.stringify(this.comprados));
    localStorage.setItem('comprados',JSON.stringify(this.producto));
    this.pgFactura();
  }
  pgFactura(){
    this.router.navigate(['Factura'])
  }

}

