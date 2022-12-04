import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/domain/data/recipe-data';
import { RecipeDataService } from 'src/app/infrastructure/service/recipe-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  items: RecipeModel[] | undefined;

  constructor(private recipeDataService: RecipeDataService){  
  }
  ngOnInit(): void {
    this.recipeDataService.getRecipe().subscribe(x => 
    {
      this.items = x;
    })
  }

}
