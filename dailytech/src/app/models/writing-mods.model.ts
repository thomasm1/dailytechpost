export interface WritingMod {
    id?: string;
    name?: string;
    news?: string[];
    category?: string;
    durationGoal?: number;
    wordCount?: number;
    date?: Date;
    state?: 'complete' | 'completed' | 'cancelled' | null;
    
    content?: string;
    
    did?: string, 
    author?: string,
    monthOrder?: string,
    cat3?: string,
    title?: string,
    post?: string,
    blogcite?: string,
    username?: string,

}
