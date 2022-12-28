import { MouseEventHandler, ReactElement } from "react";
import * as icons from 'phosphor-react'
import styles from './CircleIconButton.module.css'

interface CircleIconButtonProps{
    iconName?: string | ReactElement,
    onClick?:MouseEventHandler<HTMLDivElement>,
	weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export const CircleIcon = ({ iconName, onClick, weight }: CircleIconButtonProps) => {
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]

	return (
		<div onClick={onClick} role='button' style={{ width: 35, height: 35 }}  className={styles.containerButton}>
            <PhosphorIcon size='100%' weight={weight} className={styles.propsIcon}/>
		</div>
	)
}
export default CircleIcon