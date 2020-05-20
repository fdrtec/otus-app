import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProjectContactService} from '../../providers/project-contact/project-contact.service';

@Component({
  selector: 'source-project-contact',
  templateUrl: './project-contact.component.html',
  styleUrls: ['./project-contact.component.css']
})
export class ProjectContactComponent implements OnInit {
  projectContactForm: FormGroup;
  projectContacts: any[];

  constructor(
    private formBuilder: FormBuilder,
    private projectContactService: ProjectContactService
  ) {
  }

  ngOnInit() {
    this.projectContacts = this.projectContactService.getProjectContacts();
    this.projectContactForm = this.formBuilder.group({});

  }

  onSubmit() {
    console.log('submeteu');

  }

  viewContact(){
    console.log("view")
  }
}
