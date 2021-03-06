export interface WritingBlog {
    id?: string;
    name?: string;
    news?: string[];
    category?: string;
    durationGoal?: number;
    wordCount?: number;
    date?: Date;
    state?: 'complete' | 'completed' | 'cancelled' | null;
}
