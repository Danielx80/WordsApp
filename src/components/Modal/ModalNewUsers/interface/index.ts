import { MouseEventHandler } from "react";
import { User } from '../../../Table/interface/index';

export interface ModalNewProps{
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
    onSuccess?: (success: boolean, message: string)=> void
}