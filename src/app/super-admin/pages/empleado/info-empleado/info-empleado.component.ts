import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sucursal } from '../../../../interfaces/sucursal';
import { Empleado } from '../../../../interfaces/empleado';

@Component({
  selector: 'app-info-empleado',
  templateUrl: './info-empleado.component.html',
  styles: ``
})
export class InfoEmpleadoComponent implements OnInit {

  formInfoEmpleado: FormGroup;
  sucursales: Sucursal[] = [];
  
  constructor( private fb: FormBuilder) {
    this.formInfoEmpleado = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apePaterno: ['', [Validators.required, Validators.maxLength(20)]],
      apeMaterno: ['', [Validators.required, Validators.maxLength(20)]],
      edad: ['', [Validators.required, Validators.min(15)]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.maxLength(30), Validators.email]],
      contrasenia: ['', [Validators.required, Validators.maxLength(20)]],
      estado: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      sucursal: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  editarEmpleado() {
    const empleado: Empleado = {
      nombre: this.formInfoEmpleado.value.nombre,
      apePaterno: this.formInfoEmpleado.value.apePaterno,
      apeMaterno: this.formInfoEmpleado.value.apeMaterno,
      edad: this.formInfoEmpleado.value.edad,
      telefono: this.formInfoEmpleado.value.telefono,
      email: this.formInfoEmpleado.value.email,
      contrasenia: this.formInfoEmpleado.value.contrasenia,
      estado: this.formInfoEmpleado.value.estado,
      rol: this.formInfoEmpleado.value.rol,
      sucursal: this.formInfoEmpleado.value.sucursal,
    }
  }

}
