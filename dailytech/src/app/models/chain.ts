

export interface Chain {
    id:number;
    description:string;
    name:string;
    state:string;
    iconUrl?: string;
    chainListIcon?: string;
    longDescription?: string;
    category?:string;
    addresssCount?:number;
}
