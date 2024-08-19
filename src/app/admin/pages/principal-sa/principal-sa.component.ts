import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-sa',
  templateUrl: './principal-sa.component.html',
  styles: ``
})
export class PrincipalSaComponent implements OnInit{

  mostrarBotonRegresar: boolean = false;
  idRol: number;

  constructor(private router: Router) {
    this.idRol = Number(localStorage.getItem('IDRol'));
  }

  ngOnInit(): void {
    // Mostrar el botón "Regresar" solo si el IDRol es 3 (super-admin)
    if (this.idRol === 3) {
      this.mostrarBotonRegresar = true;
    }
  }

  regresar(): void {
    // Redirigir según el IDRol
    if (this.idRol === 3) {
      this.router.navigate(['/super-admin']);
    }
  }

}
