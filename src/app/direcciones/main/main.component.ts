import { Producto } from './../../clases/Producto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/assets/scripts.js';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private router:Router) { }

  //MIS PRODUCTOS
  public iPhone:Producto = new Producto("1","iPhone (1.ª generación)","Lanzado en junio de 2007", 1,200);
  public iPhone3G:Producto = new Producto("2","iPhone 3G","Lanzado en junio de 2008.", 1,299);
  public iPhone3GS:Producto = new Producto("3","iPhone 3GS","Lanzamiento junio de 2009", 1,369);
  public iPhone4:Producto = new Producto("4" ,"iPhone 4","Lanzado en octubre de 2011", 1,300);
  public iPhone4s:Producto = new Producto("5","iPhone 4s","Lanzado en octubre de 2011", 1,199);
  public iPhone5:Producto = new Producto("6","iPhone 5","Lanzado en septiembre del 2012", 1,250);
  public iPhone5S:Producto = new Producto("7","iPhone 5S","Lanzado en septiembre de 2013", 1,250);
  public iPhone5C:Producto = new Producto("8","iPhone 5C","Lanzado en septiembre de 2013", 1,649);
  public iPhone6:Producto = new Producto("9","iPhone 6","Lanzado en septiembre del 2014", 1,199);
  public iPhone6Plus:Producto = new Producto("10","iPhone 6 Plus","Lanzado en septiembre del 2014", 1,299);
  public iPhone6sPlus:Producto = new Producto("11","iPhone 6s Plus","Lanzado en septiembre del 2015", 1,599);

//MIS VARIABLES Y OBJETOS
public disponibles:Producto[]=[this.iPhone,this.iPhone3G,this.iPhone3GS,this.iPhone4,this.iPhone4s,this.iPhone5,this.iPhone5S
                              ,this.iPhone5C,this.iPhone6,this.iPhone6Plus,this.iPhone6sPlus];
public comprados:Producto[]=[];
public cantidad:number;
public arregloHTML:string;
articulo:string
dato:number//DATO DEL PRODUCTO
producto:number //FILAS DE LOS PRODUCTOS

public matriz: Array<Array<String>>=[
  ['HDC-001','iPhone (1.ª generación)','Lanzado en junio de 2007','200'],
  ['HDC-002','iPhone 3G','Lanzado en junio de 2007','299'],
  ['HDC-003','iPhone 3GS','Lanzamiento junio de 2009','368'],
  ['HDC-004','iPhone 4','Lanzado en octubre de 2011', '300'],
  ['HDC-005','iPhone 4s','Lanzado en sept. del 2012','300'],
  ['HDC-006','iPhone 5','Lanzamiento junio de 2009','250'],
  ['HDC-007','iPhone 5S','Lanzado en septiembre de 2013','250'],
  ['HDC-008','iPhone 5C','Lanzado en septiembre de 2013','600'],
  ['HDC-009','iPhone 6','Lanzado en septiembre del 2014','199'],
  ['HDC-010','iPhone 6 Plus','Lanzado en septiembre del 2014','299'],
  ['HDC-011','iPhone 6s Plus','Lanzado en septiembre del 2015','599']
]

  //MIS METODOS
  ngOnInit(): void {
    localStorage.clear();
  }


  public buscarProducto(disponibles:Producto[],IdProducto:String):number{
      let indice: number=0;
      let encontrado:boolean=false;
      for (let i:number=0;i<disponibles.length;i++)
      {
          if (disponibles[i].getId()==IdProducto)
          {
              encontrado=true;
              indice=i;
          }
      }
      if (encontrado==false)
      {
          indice=-1;
      }
      return indice;
  }

  agregar0(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'0')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }

  agregar1(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'1')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar2(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'2')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar3(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'3')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar4(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'4')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar5(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'5')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar6(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'6')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar7(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'7')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar8(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'8')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar9(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'9')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }
  agregar10(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'10')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }


  /*agregar(){
    this.comprados.push(this.disponibles[this.buscarProducto(this.disponibles,'1')]);
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
  }*/



  pgPagar(){
    localStorage.setItem('comprados',JSON.stringify(this.comprados));
    this.pgFactura();
  }

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

