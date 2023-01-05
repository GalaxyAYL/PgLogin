import { Component, OnInit } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem('usuarioE', "glxayl")
    localStorage.setItem('passwdE', "glxay1")
  }

  //-----------------------------MIS VARIABLES------------------------------
  usuario:any
  passwd:any
  usuarioE:any
  passwdE:any

  //-----------------------------MIS METODOS------------------------------
  almacenar(){
    this.usuarioE=localStorage.getItem('usuarioE')
    this.passwdE=localStorage.getItem('passwdE')
    this.paso();
  }

  paso(){
    if (this.usuario==this.usuarioE || this.passwd==this.passwdE) {
      this.router.navigate(['pgMain'])
    }else{
      this.router.navigate(['pgError'])
    }
  }

}
