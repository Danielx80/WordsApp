import { MouseEvent, MouseEventHandler, ReactElement, useEffect, useState, useContext } from 'react';
import * as icons from 'phosphor-react'
import styles from './BtnModal.module.css'
import Modal from "../../Modal";
import ModalEditUser from "../../Modal/ModalEditUser/ModalEditUser";
import { User } from '../../Table/interface/index';
import { TableContext } from '../../../pages/UsersPage';

interface RoundButtonProps {
    iconName?: string | ReactElement,
    onClick?: (user: User, isOpenModal: boolean) => void,
    user: User
}

export const RoundButton = ({ iconName, onClick, user }: RoundButtonProps) => {

    const { isOpenModal, setIsOpenModal, setCurrentUser } = useContext(TableContext)

    let PhosphorIcon: any = icons[iconName as keyof typeof icons]

    return (

        <div style={{ width: 32, height: 32 }} className={styles.containerButton} onClick={() => { setIsOpenModal(!isOpenModal); setCurrentUser(user) }}>

            <PhosphorIcon size='100%' weight='bold' className={styles.propsIcon} />

        </div>

    )
}