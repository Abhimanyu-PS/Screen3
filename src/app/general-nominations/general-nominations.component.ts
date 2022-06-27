import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-nominations',
  templateUrl: './general-nominations.component.html',
  styleUrls: ['./general-nominations.component.css']
})
export class GeneralNominationsComponent implements OnInit {

  public validationMessages = {
    'address': [
      { type: 'required', message: 'Address is required' }
    ],
    'relative': [
      { type: 'required', message: 'Relationship with nominee is required' },
      { type: 'pattern', message: 'Enter valid input' }
    ],
    'age': [
      { type: 'required', message: 'Age is required' },
      { type: 'pattern', message: 'Enter valid age' },
      { type: 'maxlength', message: 'Invalid age' }
    ],
    'share': [
      { type: 'required', message: 'Share percentage is required' },
      { type: 'pattern', message: 'Enter valid number' },
      { type: 'maxlength', message: 'Invalid share' }
    ],
    'name': [
      { type: 'required', message: 'Nominee name is required' },
      { type: 'pattern', message: 'Enter a valid name' },
      { type: 'maxlength', message: 'Name is too long' }
    ],
    'srno': [
      { type: 'required', message: 'Sr no is required' },
      { type: 'pattern', message: 'Enter a valid no' }
    ],
    'witness1': [
      { type: 'required', message: 'Witness 1 is required' },
      { type: 'pattern', message: 'Enter valid Witness Name' }
    ],
    'witness2': [
      { type: 'required', message: 'Wittness 2 is required' },
      { type: 'pattern', message: 'Enter Valid Witness Name' }
    ],
    'designation': [
      { type: 'required', message: 'Designation is required' },
      { type: 'pattern', message: 'Enter Valid Designation' }
    ],
    'employeeid': [
      { type: 'required', message: 'Employee Id is required' },
      { type: 'pattern', message: 'Enter a valid Employee Id' },
      { type: 'maxlength', message: 'Employee ID should be less than 5 digits' }
    ],
    'employeename': [
      { type: 'required', message: 'Employee Name is required' },
      { type: 'pattern', message: 'Enter a valid Name' }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }
  public checked1: boolean;

  public oncheck1(value: boolean) {
    this.checked1 = value;
    console.log(this.checked1);
  }
  public checked2: boolean;

  public oncheck2(value: boolean) {
    this.checked2 = value;
    console.log(this.checked2);
  }
  nomineeForm = new FormGroup({
    srno: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
      Validators.maxLength(5)
    ]),

    name: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z]*$')
      ]),

    address: new FormControl('',
      [
        Validators.required
      ]),

    age: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(2)
      ]),

    share: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.maxLength(2)
      ]),

    relative: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$')
    ]),

    date: new FormControl('', [Validators.required]),

    witness1: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$')
    ]),

    witness2: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$')
    ]),

    employeename: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$')
    ]),

    employeeid: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
      Validators.maxLength(5)
    ]),

    designation: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]+$')
    ]),

  })

  get share() {
    return this.nomineeForm.get('share');
  }

  get relation() {
    return this.nomineeForm.get('relation');
  }

  get srno() {
    return this.nomineeForm.get('srno');
  }

  get age(){
    return this.nomineeForm.get('age');
  }

  get name(){
    return this.nomineeForm.get('name');
  }

  get address() {
    return this.nomineeForm.get('address');
  }

  get date() {
    return this.nomineeForm.get('date');
  }
  get witness1() {
    return this.nomineeForm.get('witness1');
  }
  get witness2() {
    return this.nomineeForm.get('witness2');
  }
  get employeename() {
    return this.nomineeForm.get('employeename');
  }
  get employeeid() {
    return this.nomineeForm.get('employeeid');
  }
  get designation() {
    return this.nomineeForm.get('designation');
  }
}
