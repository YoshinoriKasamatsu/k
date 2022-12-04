import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/domain/data/recipe-data';
import { RecipeDataService } from 'src/app/infrastructure/service/recipe-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: RecipeModel[] | undefined;
  items2: RecipeModel[] | undefined;
  constructor(private recipeDataService: RecipeDataService){
  }

  ngOnInit(): void {
    this.recipeDataService.getRecipe().subscribe(x => 
    {
      this.items = x;
    })
  }
}
