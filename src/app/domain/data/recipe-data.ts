export interface RecipeModel {
    name: string;
    description: string;
    url: string;
}

export interface RecipeListModel {
    recipes: RecipeListModel[];
}