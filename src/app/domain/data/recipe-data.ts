export interface RecipeModel {
    id: number;
    name: string;
    description: string;
    url: string;
    group: string;
    evaluation: number;
}

export interface RecipeListModel {
    recipes: RecipeListModel[];
}