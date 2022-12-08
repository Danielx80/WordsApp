import { MouseEvent, MouseEventHandler } from "react";

export interface CardUsersProps{
    name?:string,
    email?:string,
    phone?:string,
    country?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
}