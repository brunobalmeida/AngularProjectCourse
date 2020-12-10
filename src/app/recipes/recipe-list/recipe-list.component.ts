import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg'),
    new Recipe('Another test recipe', 'This is the second recipe', 'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg')
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
