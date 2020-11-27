export interface WritingBlog {
    id?: string;
    name?: string;
    news?: string[];
    category?: string;
    durationGoal?: number;
    wordCount?: number;
    date?: Date;
    blog?: string;
    state?: 'complete' | 'completed' | 'cancelled' | null;
}
