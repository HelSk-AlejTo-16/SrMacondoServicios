import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SucursalService } from '../../../../services/sucursal.service';


@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
  styles: ``
})
export class NuevaSucursalComponent implements OnInit {
  formAddSucursal: FormGroup;

  constructor( private fb: FormBuilder, private sucursalService: SucursalService, private snackBar: MatSnackBar) {
    this.formAddSucursal = this.fb.group({
      sucursal: ['', [Validators.required, Validators.maxLength(30)]],
      localiza: ['', [Validators.required, Validators.maxLength(60)]],
      descripcion: ['', [Validators.required, Validators.maxLength(300)]]
    })
  }

  ngOnInit(): void {
    
  }

  agregarSucursal () {}


}
