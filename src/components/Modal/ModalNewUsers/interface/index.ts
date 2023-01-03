import { MouseEventHandler } from "react";

export interface ModalNewProps{
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}