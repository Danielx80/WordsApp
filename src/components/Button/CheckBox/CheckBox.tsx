import React from 'react'
import { User } from '../../Table/interface/index';
import styles from './CheckBox.module.css'
import { useContext, useEffect, useState } from 'react';
import { TableContext } from '../../../context/TableContext';

interface CheckBoxProps {
	defaultChecked?: boolean,
	onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void
	user: User | undefined
}

export const CheckBox = ({ defaultChecked, onChange, user }: CheckBoxProps) => {

	const { state } = useContext(TableContext)
	const { deleteUser } = state
	const [isCheked, setIsCheked] = useState(false)

	useEffect(() => {
		if (deleteUser && deleteUser?.id === user?.id) {
			setIsCheked(true)
			
		} else {
			setIsCheked(false)
		}
		// debugger
		console.log(user?.id);
		console.log(deleteUser?.id)
		console.log(isCheked);

		
	}, [deleteUser, user])

	return (
		<input checked={defaultChecked ? defaultChecked : isCheked} className={styles.input} type='checkbox' onChange={onChange} />
	)
}
