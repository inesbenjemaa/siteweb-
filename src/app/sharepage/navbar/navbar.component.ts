import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router' ;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  


  ngOnInit(): void {
  }

gotocontact() {
  this.router.navigate(["/contacts"])
 }

 gotoDecouvrir() {
  this.router.navigate(["/Découvrir"])
 }
 gotoExperiences() {
  this.router.navigate(["/Experiences"])
 }
 gotoInfospratiques() {
  this.router.navigate(["/Infospratiques"])
 }
 gotoDestinations() {
  this.router.navigate(["/Destinations"])
 }
}
 