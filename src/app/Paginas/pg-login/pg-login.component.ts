import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet  } from '@angular/router';
import { LoginService } from *;

@Component({
  selector: 'app-pg-login',
  templateUrl: './pg-login.component.html',
  styleUrls: ['./pg-login.component.css']
})
export class PgLoginComponent implements OnInit {
  constructor(private authService: LoginService, private router:Router) {}

  ngOnInit(): void {
    localStorage.setItem('nombre', "GLX_AYL")
    this.valor_rec=localStorage.getItem('nombre')
  }

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (!this.authService.isLogged()) {
        console.log('No estás logueado');
        this.router.navigate(['pgLogin']);
        return false;
    }

    return true;
}

  valor_rec:any=0;
  usuario:any;
  //nombre:any;
  //apellido:any;
  //ciudad:any;
  //email:any;
  //fechaNacimiento:any;
  passwd:any;

  paso:boolean=false;

  ingresar(){
    this.paso=true;
    this.router.navigate(['pgCat'])
  }

}

