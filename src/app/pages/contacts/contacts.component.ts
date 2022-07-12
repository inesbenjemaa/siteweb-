import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contact: Contact = { name: '', email: '', mobile: '', message: '' };

  constructor(private contactService: ContactService) {
  }

  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;

  ngOnInit(): void {
  }

  submitContactData(form: NgForm)
  {
    this.contactService.CreateContact(form.value).
      then(() => form.reset());
  }
}
