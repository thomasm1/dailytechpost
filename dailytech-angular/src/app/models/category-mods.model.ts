export interface CategoryMod {
    id?: string; // Long
    name?: 'Web Dev Affairs' | 'Musing Blockchain' | 'A.I.Now.' | 'Sociology Tomorrow!' | 'Quantum Data';
    description?: string;
    durationGoal: number;  
    news?: Array<string>;
    categoryId?: '10' | '11' | '12' | '13' | '14';
    cat3?: 'Web Dev Affairs' | 'Musing Blockchain' | 'A.I.Now.' | 'Sociology Tomorrow!' | 'Quantum Data' ;
 
}
