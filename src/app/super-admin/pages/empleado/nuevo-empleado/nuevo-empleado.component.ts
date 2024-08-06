import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../../../../interfaces/empleado';
import { Sucursal } from '../../../../interfaces/sucursal';
import { EmpleadoService } from '../../../../services/empleado.service';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styles: ``
})
export class NuevoEmpleadoComponent implements OnInit {
  
  formAddEmpleado: FormGroup;
  sucursales: Sucursal[] = [];
  
  constructor( private fb: FormBuilder, private empleadoService: EmpleadoService) {
    this.formAddEmpleado = this.fb.group({
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

  agregarEmpleado() {
    const empleado: Empleado = {
      nombre: this.formAddEmpleado.value.nombre,
      apePaterno: this.formAddEmpleado.value.apePaterno,
      apeMaterno: this.formAddEmpleado.value.apeMaterno,
      edad: this.formAddEmpleado.value.edad,
      telefono: this.formAddEmpleado.value.telefono,
      email: this.formAddEmpleado.value.email,
      contrasenia: this.formAddEmpleado.value.contrasenia,
      estado: this.formAddEmpleado.value.estado,
      rol: this.formAddEmpleado.value.rol,
      sucursal: this.formAddEmpleado.value.sucursal,
    }

    this.empleadoService.agregarEmpleado(empleado).subscribe(response => {
      console.log('Empleado agregado:', response);
    }, error => {
      console.error('Error al agregar empleado:', error);
    });

  }
    

}
