import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public firestore : Firestore) { }

  CreateBooking(booking : Booking) {
    const bookingsRef = collection(this.firestore, 'Booking'); 
    return addDoc(bookingsRef, booking);
  }

}
