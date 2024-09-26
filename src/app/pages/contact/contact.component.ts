import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Contacts } from './interface/contact.interface';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NzInputModule, FormsModule, NzButtonModule, NzTableModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  value: string = '';
  listOfData: Contacts[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactService.getContact().subscribe((contact: Contacts[]) => {
      this.listOfData = contact;
    });
  }
}
