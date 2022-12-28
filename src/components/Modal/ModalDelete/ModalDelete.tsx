import styles from './ModalDelete.module.css'
import BasicBtn from '../../Button/BasicButton/BasicButton';
import { useState, useContext } from 'react';
import { ModalContext } from '../index';
import { IUser } from '../../../interface/FetchAllUserResponse';
import { deleteUserData } from '../../../hooks/useUsers';

interface ModalDeleteProps {
	title?: string,
	body?: string,
	user: IUser | undefined
}

export const ModalDelete = ({ title, body, user: originalName }: ModalDeleteProps) => {


	const [user, setUser] = useState<IUser>(originalName ?? {} as IUser)
	const { setIsOpenModal } = useContext(ModalContext)

	const { mutate } = deleteUserData()

	function handleSubmit() {
		mutate(originalName ?? {} as IUser)
		console.log(originalName);
		setIsOpenModal(false)
		
	}
	return (
		<div className={styles.content}>
			<div className={styles.border}>
				<h4 className={styles.titleH4}>{title}</h4>
				<p className={styles.textoContent}>{body}</p>
			</div>

			<div className={styles.linea} />
			<div className={styles.border2}>

				<BasicBtn
					onClick={() => setIsOpenModal(false)}
					size='sm'
					text='Cancel'
					fontWeight={700}
					backgroundColor='var(--white)'
					colorText='var(--neutral900)'
					borderColor='var(--neutral300)'
				/>
				<BasicBtn
					size='sm'
					text='Delete'
					onClick={handleSubmit}
					fontWeight={700}
					backgroundColor='var(--red400)'
					borderColor='var(--red400)'
					colorText='var(--white)'
				/>


			</div>
		</div>
	)
}

export default ModalDelete
ModalDelete.defaultProps = {
	title: 'Delete Users',
	body: 'The users you selected will be permanently deleted, do you want to continue?'
}