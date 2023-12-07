import { Component, inject } from '@angular/core';
import { DocentesService } from '../../services/docentes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.css']
})
export class ListarDocentesComponent {
  private docentesService = inject(DocentesService);
  private router = inject(Router);

  public docentes: any[] = [];

  ngOnInit(): void {
    this.obtenerDocentes();
  }

  obtenerDocentes() {
    this.docentesService.obtenerDocentes()
      .subscribe( docentes => this.docentes = docentes );
  }

  deleteDocente( id: number ): void {
    this.docentesService.deleteDocentes(id)
      .subscribe( data => this.obtenerDocentes() );
  }

  editarDocente( id: number ): void {
    this.router.navigateByUrl(`/administrador/docentes/editar/${id}`);
  }
}
