import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


const STATE_OPTIONS =[
  {value: 'AL', name: 'Alabama'},
  {value: 'AK', name: 'Alaska'},
  {value: 'AZ', name: 'Arizona'},
  {value: 'CA', name: 'California'},
  {value: 'CO', name: 'Colorado'},
  {value: 'CT', name: 'Connecticut'},
  {value: 'DE', name: 'Delaware'},
  {value: 'DC', name: 'District Of Columbia'},
  {value: 'FL', name: 'Florida'},
  {value: 'GA', name: 'Georgia'},
  {value: 'HI', name: 'Hawaii'},
  {value: 'ID', name: 'Idaho'},
  {value: 'IL', name: 'Illinois'},
  {value: 'IN', name: 'Indiana'},
  {value: 'IA', name: 'Iowa'},
  {value: 'KS', name: 'Kansas'},
  {value: 'KY', name: 'Kentucky'},
  {value: 'LA', name: 'Louisiana'},
  {value: 'ME', name: 'Maine'},
  {value: 'MD', name: 'Maryland'},
  {value: 'MA', name: 'Massachusetts'},
  {value: 'MI', name: 'Michigan'},
  {value: 'MN', name: 'Minnesota'},
  {value: 'MS', name: 'Mississippi'},
  {value: 'MO', name: 'Missouri'},
  {value: 'MT', name: 'Montana'},
  {value: 'NE', name: 'Nebraska'},
  {value: 'NV', name: 'Nevada'},
  {value: 'NH', name: 'New Hampshire'},
  {value: 'NJ', name: 'New Jersey'},
  {value: 'NM', name: 'New Mexico'},
  {value: 'NY', name: 'New York'},
  {value: 'NC', name: 'North Carolina'},
  {value: 'ND', name: 'North Dakota'},
  {value: 'OH', name: 'Ohio'},
  {value: 'OK', name: 'Oklahoma'},
  {value: 'OR', name: 'Oregon'},
  {value: 'PA', name: 'Pennsylvania'},
  {value: 'RI', name: 'Rhode Island'},
  {value: 'SC', name: 'South Carolina'},
  {value: 'SD', name: 'South Dakota'},
  {value: 'TN', name: 'Tennessee'},
  {value: 'TX', name: 'Texas'},
  {value: 'UT', name: 'Utah'},
  {value: 'VT', name: 'Vermont'},
  {value: 'VA', name: 'Virginia'},
  {value: 'WA', name: 'Washington'},
  {value: 'WV', name: 'West Virginia'},
  {value: 'WI', name: 'Wisconsin'},

  {value: 'WY', name: 'Wyoming'},
  {value: 'AA', name: 'Armed Forces (AA)'},
  {value: 'AE', name: 'Armed Forces (AE)'},
  {value: 'AP', name: 'Armed Forces (AP)'},
];


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private registration : FormGroup;
  states = STATE_OPTIONS;
  masks = {phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  constructor( private formBuilder: FormBuilder ) {
    this.registration = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['',Validators.required],
      city: ['', Validators.required],
      state: ['',  Validators.required],
      zipCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(`'(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/`)]],
      insurance: [false],
      iAgree: [false, Validators.requiredTrue]
    });
  }
  logForm(){
      console.log(this.registration.value);
  }
 
 

}
