import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';


  dietPlan = [
    {
      day: 1,
      breakfast: '320 kcal, 12g Protein',
      lunch: '480 kcal, 12g Protein',
      dinner: '280 kcal, 12g Protein',
      fruitSnack: '80 kcal, 3g Protein',
      probiotics: 'Yogurt (240g), 6g Protein',
      totalCalories: '1160 kcal',
      totalProtein: '45g'
    },
    {
      day: 2,
      breakfast: '340 kcal, 12g Protein',
      lunch: '600 kcal, 46g Protein',
      dinner: '280 kcal, 12g Protein',
      fruitSnack: '90 kcal, 1.5g Protein',
      probiotics: 'None',
      totalCalories: '1380 kcal',
      totalProtein: '71.5g'
    },
    // Add all the other days' data here in similar format
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
