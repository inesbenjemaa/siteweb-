import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router' ;
@Component({
  selector: 'app-infospratiques',
  templateUrl: './infospratiques.component.html',
  styleUrls: ['./infospratiques.component.css']
})
export class InfospratiquesComponent implements OnInit {

constructor(private router: Router) { }
  
  ngOnInit(): void {
  }


gotoBooking() {
  this.router.navigate(["/Booking"])
 }

}
