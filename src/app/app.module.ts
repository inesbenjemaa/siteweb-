import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DécouvrirComponent } from './pages/Découvrir la tunisie/Découvrir.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { InfospratiquesComponent } from './pages/infospratiques/infospratiques.component';
import { DestinationsComponent } from './pages/Destinations/Destinations.component';
import { BookingComponent } from './pages/booking/booking.component';
import { DispoComponent } from './pages/dispo/dispo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
  
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent,
    DécouvrirComponent,
    ExperiencesComponent,
    InfospratiquesComponent,
    DestinationsComponent,
    BookingComponent,
    DispoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
