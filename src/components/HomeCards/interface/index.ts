import { MouseEventHandler } from "react";

export interface HomeCardsProps{
    header?:string,
    body?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
}