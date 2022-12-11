export interface Nft 
{
  native?: string,
  tokens?: [
    string,
    string 
  ],
  nfts?: [
    {
      name?:  string;
      amount?: number;
      metadata?: {
        name?: string,
        description?:string,
        image?:string
        attributes?: [
          {
            value?: string,
            trait_type?: string
          } 
        ]
      } 
    }
  ]
}