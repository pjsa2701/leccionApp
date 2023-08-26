import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  nombre = "";
  apellido = "";
  valor = 0;
  fecha = "";

  //CHECKBOX
  filtroEstado = "TODO";

  sumaValoresEliminados = 0;
  //RADIO-BUTTON
  seleccionRadioButton = 'TODO';

  constructor(public estudiantesService: EstudiantesService, private router: Router) { }

  ngOnInit(): void {this.eliminarEstudiante}

  agregarEstudiante(): void {


    const estudiante: Estudiante = {

      nombre: this.nombre,
      apellido: this.apellido,
      valor: this.valor,
      fecha: this.fecha,

    }

    this.estudiantesService.listaEstudiantes.push(estudiante);
    this.nombre = '';
    this.apellido = '';
    this.valor = 0;
    this.fecha ='';
  }

  //Métodos para los CheckBox

  eliminarEstudiante(estudiante: Estudiante): void {
    const indice = this.estudiantesService.listaEstudiantes.indexOf(estudiante);
    if (indice !== -1) {
      const estudianteEliminado = this.estudiantesService.listaEstudiantes.splice(indice, 1)[0];
      this.sumaValoresEliminados += estudianteEliminado.valor;
    }
  }
}
