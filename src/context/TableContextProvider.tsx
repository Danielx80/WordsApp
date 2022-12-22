import { User } from '../components/Table/interface/index';
import { TableContext } from './TableContext';
import { useState } from 'react';
import ReactNode from 'react';

interface TableProps {
	children: JSX.Element | JSX.Element[] 
}

export const TableContextProvider = ({ children }: TableProps) => {

	const [isOpenModal, setIsOpenModal] = useState(false)
	const [deleteUser, setDeleteUser] = useState<User>()
	const [currentUser, setCurrentUser] = useState<User>()


	return (
		<TableContext.Provider value={{ currentUser, setCurrentUser, deleteUser, isOpenModal, setDeleteUser, setIsOpenModal }}>
			{children}
		</TableContext.Provider>
	)
}
