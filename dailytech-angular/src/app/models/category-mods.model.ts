export interface CategoryMod {
    id?: string | number; // Long
    name?: string;
    description?: string;
    durationGoal: number;  
    news?: Array<string>;
    categoryId?: string | number;
    parentId?: string | number | null;
    children?: CategoryMod[];
    cat3?: string;
 
}
