export class Post {
  constructor(
    public id?: number,
    public did?: string,
    public date?: string,
    public author?: string,
    public monthOrder?: string,
    public cat3?: string,
    public title?: string,
    public post?: string,
    public blogcite?: string,
    public username?: string,
    
    public categoryId?: string,
    public comments?: Array<string>,

    public news?: string,
    public durationGoal?: number,
    public wordCount?: number,
    public state?: string,

  ) { }
}    