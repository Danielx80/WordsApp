import { ReactElement, useContext } from 'react';
import * as icons from 'phosphor-react'
import styles from './BtnModal.module.css'
import { User } from '../../Table/interface/index';
import { TableContext } from '../../../pages/UsersPage';

interface RoundButtonModalProps {
    iconName?: string | ReactElement,
    onClick?: (user: User, isOpenModal: boolean) => void,
    user: User
}

export const RoundButtonModal = ({ iconName, onClick, user }: RoundButtonModalProps) => {
    const { isOpenModalEditUser, setIsOpenModalEditUser, setCurrentUser } = useContext(TableContext)
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]
    return (
        <div style={{ width: 32, height: 32 }} className={styles.containerButton} onClick={() => { setIsOpenModalEditUser(!isOpenModalEditUser); setCurrentUser(user) }}>
            <PhosphorIcon size='100%' weight='bold' className={styles.propsIcon} />
        </div>

    )
}