export interface Product {
  id?:string;
  code?:string;
  name?:string | any;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}