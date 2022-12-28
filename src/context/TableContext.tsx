import React, { createContext } from 'react';
import { User } from '../components/Table/interface/index';
import { TableContextState } from './TableContextProvider';
import { Action } from './TableReducer';


interface TableContextProps {
    state:TableContextState,
    setCurrentUser:(currentUser?: User) => void
    setDeleteUser:(deleteUser?: User) => void
    setIsOpenModalEditUser:(isOpenModalEditUser: boolean) => void
}

export const TableContext = createContext<TableContextProps>({} as TableContextProps) 