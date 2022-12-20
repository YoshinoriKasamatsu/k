export interface RecipeModel {
    id: number;
    name: string;
    description: string;
    url: string;
    group: string;
    evaluation: number;
    rotate: string;
}

export interface RecipeListModel {
    recipes: RecipeListModel[];
}