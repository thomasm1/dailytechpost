export interface WritingBlog {
    id: string;
    name: string;
    category: string;
    duration: number;
    wordCount?: number;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;
}