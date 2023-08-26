import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EstudiantesService } from './services/estudiantes.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { HomeComponent } from './components/home/home.component';
import { DatosComponent } from './components/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    FooterComponent,
    RadioButtonsComponent,
    HomeComponent,
    DatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [EstudiantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
