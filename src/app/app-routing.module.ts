import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromEstudiantesComponent } from './components/prom-estudiantes/prom-estudiantes.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { HomeComponent } from './components/home/home.component';
import { DatosComponent } from './components/datos/datos.component';

const routes:Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'estudiantes', component: EstudiantesComponent},
  {path:'datos', component: DatosComponent},
  {path:'**', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [PromEstudiantesComponent, EstudiantesComponent, HomeComponent, DatosComponent]
