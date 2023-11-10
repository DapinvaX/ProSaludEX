import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {
  password1: string = '';
  password2: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.password1 === this.password2) {
      // Send confirmation
      alert('Contraseñas cambiadas exitosamente');
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}
