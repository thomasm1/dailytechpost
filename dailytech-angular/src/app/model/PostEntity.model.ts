export class PostEntity {
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
    public email?: string,
    
    
    public news?: string,
    public durationGoal?: number,
    public wordCount?: number,
    public state?: string, 
    public categoryId?: string,
    public comments?: Array<string>,
    public weblinks?: Array<string>
  ) {  }
}     

export class WeblinkEntity {
  constructor(  

    public id?: number, 
    public title?: string,
    public profileUrl?: string,
    public ownerEmail?: string,
    public url?: string,
    public host?: string,
    public htmlPage?: string,
    public downloadStatus?: string,
    public web3Link?: string
  ) { }
}
export class CommentDto {
  constructor(
    public id?:number,
    public name?:string,
    public email?:String,
    public body?:String
  ) { }
}