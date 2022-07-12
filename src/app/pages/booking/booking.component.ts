import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking: Booking = { civility : '', firstName : '', lastName : '', email : '',
  mobile : '', dateArrival : '', arrivingTime : '', dateDeparture : '', departureTime : '',
  roomType : '', adultCounts : '', childrenCounts : '', specialInstructions : '',
  paymentType : '' };

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  submitBookingData(form: NgForm)
  {
    this.bookingService.CreateBooking(form.value).
      then(() => form.reset());
  }

}

