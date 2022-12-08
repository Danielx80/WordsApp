import { MouseEvent, MouseEventHandler } from "react";

export interface ModalEditProps {
    size:'sm'|'md'|'lg'|'xl',
    backgroundColor?:string,
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
}