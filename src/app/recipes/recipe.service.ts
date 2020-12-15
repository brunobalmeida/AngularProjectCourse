import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
    'This is simply a test', 
    'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg',
     [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries', 1),
     ]),
    
    
    new Recipe('Another test recipe',
    'This is the second recipe',
    'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
    ])
  ];

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes(){
    return this.recipes.slice();
  }


}
