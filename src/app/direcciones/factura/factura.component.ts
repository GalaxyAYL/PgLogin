
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
    this.comprados=localStorage.getItem('comprados')
    //this.rellenarArray();
  }

  //MIS VARIABLES Y OBJETOS
  comprados:string;
  articulo:string
  value:any;


  /*obtenerInformacion1(){
    document.getElementById('nombre').value=this.comprados[0];
  }*/

  public matriz: Array<Array<string>>=[
    ['1','iPhone (1.ª generación)','Lanzado en junio de 2007','200'],
    ['2','iPhone 3G','Lanzado en junio de 2007','299'],
    ['3','iPhone 3GS','Lanzamiento junio de 2009','368']
  ]
  public matrizComprados: Array<Array<String>>


  /*rellenarArray(){
    for (let i:number;i<=this.comprados.length;i++) {
      for (let j:number;j<=this.comprados.length;j++) {
        if (this.comprados[i].getNombre()==this.matriz[j][1]){
          this.matrizComprados.push(this.matriz[j])
        }s
      }
    }
  }*/

  //DIRECCION ROUTES
  pgFactura(){
    this.router.navigate(['Factura'])
  }
  pgMain(){
    this.router.navigate(['pgMain'])
  }
  pgLogin(){
    this.router.navigate(['pgLogin'])
  }

}
