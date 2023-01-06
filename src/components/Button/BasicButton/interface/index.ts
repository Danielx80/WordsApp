import { MouseEventHandler } from "react";

export interface BasicButtonProps {
    type?: "submit" | "button" | "reset" | undefined
    size: 'sm' | 'md' | 'lg' | 'xl',
    backgroundColor?: string,
    borderColor?: string,
    fontWeight?: number,
    colorText?: string,
    text?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onChange?: React.FormEventHandler<HTMLButtonElement> | undefined
}