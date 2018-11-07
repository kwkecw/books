export interface Book {
    title: string;
    category: Category;
    description: string;
}

export enum Category {
    drama,
    comedy,
    sport
}
