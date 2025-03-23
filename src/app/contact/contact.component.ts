import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  d:string="Welcome";

  contact =  { name: '', email: '', message: ''};

  constructor(private contactService: ContactService){}

  onSubmit(){
    this.contactService.submitContact(this.contact).subscribe(response =>{
      console.log('contact saved:', response);
      alert('Your message has been recorded!');
      this.contact ={name:'', email:'', message:''};
    });
  }
}
