import { MouseEventHandler, ReactElement } from "react";
import * as icons from 'phosphor-react'
import styles from './RoundButton.module.css'

interface RoundButtonProps{
    iconName?: string | ReactElement,
    onClick?:MouseEventHandler<HTMLButtonElement>,
}


export const RoundBtn = ({ iconName }: RoundButtonProps) => {
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]

	return (
		<div style={{ width: 32, height: 32 }}  className={styles.containerButton}>
            
            <PhosphorIcon size='100%' weight='duotone' className={styles.propsIcon}/>
            
		</div>
	)
}