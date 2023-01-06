import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Producto } from './../../clases/Producto';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.recuperar();
  }

  //MIS VARIABLES
  producto:Producto

  recuperar(){
    this.producto=JSON.parse(localStorage.getItem('comprados'))
  }

}
