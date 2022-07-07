import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DécouvrirComponent } from './pages/Découvrir la tunisie/Découvrir.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { InfospratiquesComponent } from './pages/infospratiques/infospratiques.component';
import { DestinationsComponent } from './pages/Destinations/Destinations.component';
import { BookingComponent } from './pages/booking/booking.component';
import { DispoComponent } from './pages/dispo/dispo.component';
const routes: Routes = [
  {path:'',     component:HomeComponent  },
 {path:'contacts',     component:ContactsComponent  },
 {path:'Découvrir',component:DécouvrirComponent},
{path:'Experiences',component:ExperiencesComponent},
{path:'Infospratiques',component:InfospratiquesComponent},
  {path:'Destinations',component:DestinationsComponent},
 {path:'Booking',component:BookingComponent},
{path:'Dispo',component:DispoComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

