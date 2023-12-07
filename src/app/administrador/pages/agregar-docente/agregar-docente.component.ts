import { Component, inject } from '@angular/core';
import { DocentesService } from '../../services/docentes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent {
  private fb              = inject( FormBuilder );
  private docentesService = inject( DocentesService );
  private activatedRoute  = inject( ActivatedRoute );
  
  public myForm: FormGroup = this.fb.group({
    id: [],
    codigo:   ['', [ Validators.required, Validators.minLength(2) ]],  
    nombre:    ['', [ Validators.required ]],
    materia: ['', [ Validators.required, Validators.minLength(2) ]],
    grupo: ['', [ Validators.required ]],
  });
  public isEditMode = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.isEditMode = true;
        this.docentesService.obtenerDocentePorId(id).subscribe( docente => {
          this.myForm.patchValue(docente);
        });
      }
    });
  }

  submit() {
    if (!this.myForm.valid) return;

    if (this.isEditMode) {
      const id = this.myForm.value.id;
      this.docentesService.editarDocentes(id, this.myForm.value).subscribe();
      this.isEditMode = false;
    } else {
      this.docentesService.agregarDocente(this.myForm.value).subscribe();
    }

    this.myForm.reset();
  }


}
