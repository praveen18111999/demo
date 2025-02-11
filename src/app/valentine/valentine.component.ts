import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent {
  isAccepted = false;
  noButtonStyle = { position: 'absolute', left: '50%', top: '50%' };

  accept() {
    this.isAccepted = true;
  }

  moveNoButton() {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    this.noButtonStyle = { position: 'absolute', left: `${x}px`, top: `${y}px` };
  }
}

