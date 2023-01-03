import { ReactElement, useContext } from 'react';
import * as icons from 'phosphor-react'
import styles from './BtnModal.module.css'
import { User } from '../../Table/interface/index';
import { TableContext } from '../../../context/TableContext';

interface RoundButtonModalProps {
    iconName?: string | ReactElement,
    onClick?: (user: User, isOpenModal: boolean) => void,
    user: User
}

export const RoundButtonModal = ({ iconName, onClick, user }: RoundButtonModalProps) => {
    const { setCurrentUser, setIsOpenModalEditUser, state } = useContext(TableContext)
    const { isOpenModalEditUser } = state
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]
    return (
        <div style={{ width: 35, height: 35 }} className={styles.containerButton} onClick={() => { setIsOpenModalEditUser(!isOpenModalEditUser); setCurrentUser(user) }}>
            <PhosphorIcon size='100%' weight='fill' className={styles.propsIcon} />
        </div>

    )
}