import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { imgs } from "./const";

export function cn(...inputs) {
   return twMerge(clsx(...inputs));
}


export function findItems(id:number[]){
   console.log(id)
   return imgs.filter(item => id.includes(item.id) )
}