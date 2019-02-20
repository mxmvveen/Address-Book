import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  showCompany: boolean = false;
  formInfo: object = {};

  toggleCompany(e) {
    this.showCompany = !this.showCompany;
  }

  submitForm(e) {
    this.formInfo = e;
  }

  constructor() { }

  ngOnInit() {
  }

}
