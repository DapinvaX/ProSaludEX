import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent{


    forgotPassForm: FormGroup = new FormGroup({

      email: new FormControl()

    });



    onSubmit() {

      throw new Error('Method not implemented.');

    }




}



