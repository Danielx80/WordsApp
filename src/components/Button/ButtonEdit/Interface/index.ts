import { MouseEventHandler } from "react";

export interface ButtonEditProps {
    size: 'sm' | 'md' | 'lg' | 'xl',
    backgroundColor?: string,
    text?: string,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}