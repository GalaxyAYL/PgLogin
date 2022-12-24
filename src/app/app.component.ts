import { Component } from '@angular/core';
import datosUsuarios from 'src/assets/json/usuarios.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  Users: any = datosUsuarios;
}
