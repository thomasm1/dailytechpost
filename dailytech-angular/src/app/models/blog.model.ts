export interface Blog {
  id?: number;
  did?: string;
  date?: string;
  author?: string;
  monthOrder?: string;
  cat3?: string;
  title?: string;
  post?: string;
  blogcite?: string;
  email?: string;
  categoryId?: string;
  comments?: Array<string>;
  news?: string;
  durationGoal?: number;
  wordCount?: number;
  state?: string;
}


export interface CategoryStat {
  category: string;
  count: number;
  avgWordCount: number;
}

export interface BlogStatistics {
  totalBlogs: number;
  totalWordCount: number;
  totalComments: number;
  averageWordCount: number;
  blogsByCategory: Array<{ category: string; count: number }>;
  blogsByAuthor: Array<{ author: string; count: number }>;
  blogsByMonth: Array<{ month: string; count: number }>;
  blogsByState: Array<{ state: string; count: number }>;
}

export interface AuthorStat {
  author: string;
  count: number;
  totalWords: number;
}

export interface MonthStat {
  month: string;
  count: number;
}

export interface StateStat {
  state: string;
  count: number;
}