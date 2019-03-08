import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe ('A Test Recipe' , 'This is a Test' ,'https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512'),
    new Recipe ('A Another Test Recipe' , 'This is a Test' ,'https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg?width=910&height=512')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
