import { Component, inject } from '@angular/core';
import { DocentesService } from '../../services/docentes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent {
  private fb              = inject( FormBuilder );
  private docentesService = inject( DocentesService );
  
  public myForm: FormGroup = this.fb.group({
    codigo:   ['', [ Validators.required, Validators.minLength(6) ]],  
    nombre:    ['', [ Validators.required ]],
    materia: ['', [ Validators.required, Validators.minLength(6) ]],
    grupo: ['', [ Validators.required ]],
  });

  submit() {
    //if (!this.myForm.valid) return;
    this.docentesService.agregarDocente(this.myForm.value)
      .subscribe();
  }
}
