import { MouseEventHandler} from "react";
import { User } from '../../../Table/interface/index';

export interface ModalEditProps {
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
    user: User
}