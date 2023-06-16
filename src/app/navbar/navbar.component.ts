import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
emailFormControl: any;
hidePassword: any;
password: any;
login() {
  let password = new FormControl('', [Validators.required]);

  let hidePassword = true;

  let emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}



  constructor() { }

  ngOnInit(): void {
  }


}
