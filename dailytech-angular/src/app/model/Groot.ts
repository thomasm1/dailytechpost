export class Groot {
    id? :number;
    isbn? : string;
    author:string;
    title:string;
    name :string;
    type :string;

    constructor(isbn: string, author :string, title :string, name :string, type :string) {
        // this.id = id;
        this.isbn = isbn;
        this.author = author;
        this.title = title;
        this.name = name;
        this.type = type; 

    }

}