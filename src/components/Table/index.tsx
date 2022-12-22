import { ChangeEvent, useState, useEffect, createContext, useContext } from 'react';
import { v4 } from 'uuid'
import { columns } from './utils/Columns'
import TableComponent from './TableComponent'
import Tbody from './TBody'
import Td from './Td'
import Th from './Th'
import Thead from './Thead'
import { Tr } from './Tr'
import TFooter from './TFooter'
import { User } from './interface/index'
import styles from './Table.module.css'
import useTable from './hooks/useTable';
import Modal from '../Modal/index';
import ModalEditUser from '../Modal/ModalEditUser/ModalEditUser';
import { TableContext } from '../../pages/UsersPage';


const Table = ({ data, isLoading }: { data: User[], isLoading?: boolean }) => {
    const { isOpenModal, currentUser, setDeleteUser } = useContext(TableContext)
    const [_isLoading, setIsLoading] = useState<boolean>(isLoading ? isLoading : false)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)
    const [page, setPage] = useState(1)
    const [checkAll, setCheckAll] = useState(false)
    //hooks
    const { slice, range } = useTable(data, page, rowsPerPage)

    const handleRowperPage = (number: number) => {
        setRowsPerPage(number)
    }

    const handleActions = () => {
        console.log('actions');
    }

    const handleCheck = (e?: ChangeEvent<HTMLInputElement>, user?: User) => {
        console.log(e);
        if (e?.target.checked) {
            setDeleteUser(user)
        } else {
            setDeleteUser(undefined)
        }
    }

    const handleCheckHeader = (e?: ChangeEvent<HTMLInputElement>) => {
        setCheckAll(e!.target.checked)
    }



    return (
        <>
            <TableComponent style={{ width: '100%' }}>
                <Thead>
                    <Tr>
                        {
                            columns.map(column => (
                                <Th style={{ width: column.width, margin: '0', border: 'none', boxSizing: 'border-box' }} key={v4()}>
                                    {
                                        column.headerName !== 'check' ? <p className={styles.styleheader}>{column.headerName}</p> : <input className={styles.inputHeader} type='checkbox' checked={checkAll} onChange={handleCheckHeader} />
                                    }
                                </Th>
                            ))
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        slice! && slice.map((item) =>
                            <Tr key={item.id}>
                                {
                                    columns.map((row, i) => (
                                        <Td key={v4()} style={{ width: row.width, margin: '0', padding: 0, border: 'none', boxSizing: 'border-box' }}>
                                            {
                                                row.headerName !== 'check' && row.renderCell ? row.renderCell(item, handleActions) :
                                                    row.renderCell && row.renderCell({ ...item, check: checkAll }, handleCheck)
                                            }
                                        </Td>
                                    ))
                                }
                            </Tr>)
                    }
                </Tbody>
            </TableComponent>


            {slice && <TFooter range={range} slice={slice} setPage={setPage} page={page} callBack={handleRowperPage} data={data} />}
            {
                currentUser &&
                <Modal isOpen={isOpenModal}>
                    <ModalEditUser
                        user={currentUser}
                        size='md'
                        textHeader='Edit User'
                    />
                </Modal>
            }
        </>
    )
}

export default Table