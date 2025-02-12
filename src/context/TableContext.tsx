import { createContext } from 'react';
import { User } from '../components/Table/interface/index';
import { TableContextState } from './TableContextProvider';

interface TableContextProps {
    state:TableContextState,
    setCurrentUser:(currentUser?: User) => void
    setDeleteUser:(deleteUser?: User) => void
    setIsOpenModalNewCategory:(isOpenModalNewCategory?: boolean) => void 
    setShowGlossary:(isShowGlossary?:boolean)=>void
    setIsOpenModalEditUser:(isOpenModalEditUser: boolean) => void
}

export const TableContext = createContext<TableContextProps>({} as TableContextProps) 