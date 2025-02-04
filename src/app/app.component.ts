import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  nutritionData = [
    {
      Day: 1,
      Breakfast: '9g Koolu + 2 boiled eggs',
      BreakfastCalories: 320,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 2 eggs + spinach',
      LunchCalories: 480,
      LunchProtein: 12,
      Dinner: '2 eggs + capsicum & cabbage',
      DinnerCalories: 280,
      DinnerProtein: 12,
      FruitSnack: 'Apple + Guava (100g)',
      FruitSnackCalories: 80,
      FruitSnackProtein: 3,
      Probiotics: 'Yogurt (240g)',
      ProbioticsCalories: 100,
      ProbioticsProtein: 6,
      TotalCalories: 1160,
      TotalProtein: 45
    },
    {
      Day: 2,
      Breakfast: '9g Koolu + 2 scrambled eggs',
      BreakfastCalories: 340,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 200g grilled chicken + cucumber',
      LunchCalories: 600,
      LunchProtein: 46,
      Dinner: '2 eggs + ladies\' finger & cabbage',
      DinnerCalories: 280,
      DinnerProtein: 12,
      FruitSnack: 'Orange + Papaya (100g)',
      FruitSnackCalories: 90,
      FruitSnackProtein: 1.5,
      Probiotics: 'None',
      ProbioticsCalories: 0,
      ProbioticsProtein: 0,
      TotalCalories: 1380,
      TotalProtein: 71.5
    },
    {
      Day: 3,
      Breakfast: '9g Koolu + 2 boiled eggs',
      BreakfastCalories: 320,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 2 eggs + chickpeas',
      LunchCalories: 490,
      LunchProtein: 16,
      Dinner: '2 eggs + capsicum & mushrooms',
      DinnerCalories: 290,
      DinnerProtein: 12,
      FruitSnack: 'Pomegranate + Apple (100g)',
      FruitSnackCalories: 85,
      FruitSnackProtein: 4,
      Probiotics: 'Yogurt (240g)',
      ProbioticsCalories: 100,
      ProbioticsProtein: 6,
      TotalCalories: 1185,
      TotalProtein: 50
    },
    {
      Day: 4,
      Breakfast: '9g Koolu + 2 masala omelet',
      BreakfastCalories: 350,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 200g grilled chicken + broccoli',
      LunchCalories: 600,
      LunchProtein: 46,
      Dinner: '2 eggs + ladies\' finger & carrots',
      DinnerCalories: 280,
      DinnerProtein: 12,
      FruitSnack: 'Watermelon + Pineapple (100g)',
      FruitSnackCalories: 75,
      FruitSnackProtein: 1,
      Probiotics: 'None',
      ProbioticsCalories: 0,
      ProbioticsProtein: 0,
      TotalCalories: 1375,
      TotalProtein: 71
    },
    {
      Day: 5,
      Breakfast: '9g Koolu + 2 boiled eggs',
      BreakfastCalories: 320,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 2 eggs + dal',
      LunchCalories: 460,
      LunchProtein: 18,
      Dinner: '2 eggs + capsicum & spinach',
      DinnerCalories: 270,
      DinnerProtein: 12,
      FruitSnack: 'Guava + Papaya (100g)',
      FruitSnackCalories: 85,
      FruitSnackProtein: 5,
      Probiotics: 'Yogurt (240g)',
      ProbioticsCalories: 100,
      ProbioticsProtein: 6,
      TotalCalories: 1135,
      TotalProtein: 53
    },
    {
      Day: 6,
      Breakfast: '9g Koolu + 2 scrambled eggs',
      BreakfastCalories: 340,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 200g grilled chicken + zucchini',
      LunchCalories: 600,
      LunchProtein: 46,
      Dinner: '2 eggs + cabbage & carrots',
      DinnerCalories: 280,
      DinnerProtein: 12,
      FruitSnack: 'Orange + Pomegranate (100g)',
      FruitSnackCalories: 90,
      FruitSnackProtein: 4,
      Probiotics: 'None',
      ProbioticsCalories: 0,
      ProbioticsProtein: 0,
      TotalCalories: 1380,
      TotalProtein: 74
    },
    {
      Day: 7,
      Breakfast: '9g Koolu + 2 boiled eggs',
      BreakfastCalories: 320,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 2 eggs + raita',
      LunchCalories: 460,
      LunchProtein: 12,
      Dinner: '2 eggs + capsicum & mushrooms',
      DinnerCalories: 290,
      DinnerProtein: 12,
      FruitSnack: 'Apple + Watermelon (100g)',
      FruitSnackCalories: 75,
      FruitSnackProtein: 3,
      Probiotics: 'Yogurt (240g)',
      ProbioticsCalories: 100,
      ProbioticsProtein: 6,
      TotalCalories: 1145,
      TotalProtein: 45
    },
    {
      Day: 8,
      Breakfast: '9g Koolu + 2 omelet (green chili)',
      BreakfastCalories: 350,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 200g grilled chicken + beetroot',
      LunchCalories: 600,
      LunchProtein: 46,
      Dinner: '2 eggs + ladies\' finger & cabbage',
      DinnerCalories: 280,
      DinnerProtein: 12,
      FruitSnack: 'Papaya + Pineapple (100g)',
      FruitSnackCalories: 80,
      FruitSnackProtein: 2,
      Probiotics: 'None',
      ProbioticsCalories: 0,
      ProbioticsProtein: 0,
      TotalCalories: 1380,
      TotalProtein: 60
    },
    {
      Day: 9,
      Breakfast: '9g Koolu + 2 boiled eggs',
      BreakfastCalories: 320,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 2 eggs + sprouts',
      LunchCalories: 490,
      LunchProtein: 18,
      Dinner: '2 eggs + capsicum & mushrooms',
      DinnerCalories: 290,
      DinnerProtein: 12,
      FruitSnack: 'Orange + Guava (100g)',
      FruitSnackCalories: 85,
      FruitSnackProtein: 5,
      Probiotics: 'Yogurt (240g)',
      ProbioticsCalories: 100,
      ProbioticsProtein: 6,
      TotalCalories: 1185,
      TotalProtein: 53
    },
    {
      Day: 10,
      Breakfast: '9g Koolu + 2 scrambled eggs',
      BreakfastCalories: 340,
      BreakfastProtein: 12,
      Lunch: 'Rice (100g) + 200g grilled chicken + cabbage',
      LunchCalories: 600,
      LunchProtein: 46,
      Dinner: '2 eggs + cabbage & spinach',
      DinnerCalories: 280,
      DinnerProtein: 12,
      FruitSnack: 'Pomegranate + Apple (100g)',
      FruitSnackCalories: 85,
      FruitSnackProtein: 4,
      Probiotics: 'None',
      ProbioticsCalories: 0,
      ProbioticsProtein: 0,
      TotalCalories: 1380,
      TotalProtein: 62
    }
  ];
}
