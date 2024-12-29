export interface WritingMod {
    id?: string; 
    cat3?: string,
    news?: string[]; 
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
