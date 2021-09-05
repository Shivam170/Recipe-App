import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test','https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/healthy-chicken-parm.jpg?quality=82&strip=1&resize=640%2C360')
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
