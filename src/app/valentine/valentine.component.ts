import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent {
  isAccepted = false;
  noButtonStyle = { position: 'absolute', left: '50%', top: '50%' };
  noClickCount = 0;

  cuteMessages = [
    "🥺 But... I bought chocolates for you!",
    "💔 My heart is breaking piece by piece...",
    "😢 Are you sure? I thought we were perfect together!",
    "😞 Don't leave me hanging like this...",
    "💘 One more chance? Please?",
    "🥹 You're making this so hard for me...",
    "🎁 I have a surprise for you if you say YES!",
    "💕 The stars shine brighter when you're with me!",
    "🌹 Love is knocking... Will you open the door?",
    "😍 You will say yes eventually, right? 🥰"
  ];

  noMessage = "";

  accept() {
    this.isAccepted = true;
  }

  moveNoButton() {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    this.noButtonStyle = { position: 'absolute', left: `${x}px`, top: `${y}px` };
  }

  showNextMessage() {
    this.noMessage = this.cuteMessages[this.noClickCount % this.cuteMessages.length];
    this.noClickCount++;
  }
}
