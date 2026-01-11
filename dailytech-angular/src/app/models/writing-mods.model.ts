export interface WritingMod {
    id?: string; 
    cat3?: 'Web Dev Affairs' | 'Musing Blockchain' | 'A.I.Now.' | 'Sociology Tomorrow!' | 'Quantum Data' ,
    category?: 'Web Dev Affairs' | 'Musing Blockchain' | 'A.I.Now.' | 'Sociology Tomorrow!' | 'Quantum Data' ,
    news?: string[]; 
    duration?: number;
    durationGoal?: number;
    wordCount?: number;
    date?: Date;
    state?: 'complete' | 'completed' | 'cancelled' | null;
    
    content?: string;
    
    did?: string, 
    author?: string,
    monthOrder?: string,
    title?: string,
    post?: string,
    blogcite?: string,
    username?: string, 
}
