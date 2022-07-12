import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public firestore : Firestore) { }

  CreateContact(contact : Contact) {
    const contactsRef = collection(this.firestore, 'Contact'); 
    return addDoc(contactsRef, contact);
  }
  
}
