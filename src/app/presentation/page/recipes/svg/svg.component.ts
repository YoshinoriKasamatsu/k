import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/domain/data/recipe-data';
import { RecipeDataService } from 'src/app/infrastructure/service/recipe-data.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  items: RecipeModel[] | undefined;
  items2: RecipeModel[] | undefined;
  constructor(private recipeDataService: RecipeDataService){
  }

  ngOnInit(): void {
    this.recipeDataService.getRecipe().subscribe(x => 
    {
      this.items = x.map((recipe: RecipeModel) => {
        recipe.rotate = `translate(0 ${(recipe.id - 1)  * 120 + 20})`
        return recipe;
      });
    })
  }

}
