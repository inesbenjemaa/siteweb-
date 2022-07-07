import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router' ;
@Component({
  selector: 'app-dispo',
  templateUrl: './dispo.component.html',
  styleUrls: ['./dispo.component.css']
})
export class DispoComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
gotoBooking() {
  this.router.navigate(["/Booking"])
 }


}
