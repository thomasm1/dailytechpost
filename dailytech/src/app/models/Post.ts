export class Post {
  constructor(
    public id: number,
    public did: string,
    public date: string,
    public author: string,
    public monthOrder: string,
    public cat3: string,
    public title: string,
    public post: string,
    public blogcite: string,
    public username?: string,
  ) { }
}    