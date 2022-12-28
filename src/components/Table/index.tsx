import './tableStyles.css'
import { ChangeEvent, useState, useContext, useEffect } from 'react';
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
import { TableContext } from '../../context/TableContext';


const Table = ({ data, isLoading }: { data: User[], isLoading?: boolean }) => {
    const { state, setDeleteUser, } = useContext(TableContext)
    const { currentUser, isOpenModalEditUser } = state
    const [_isLoading, setIsLoading] = useState<boolean>(isLoading ? isLoading : false)
    const [activeRow, setActiveRow] = useState(false)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)
    const [page, setPage] = useState(1)
    const [checkAll, setCheckAll] = useState(false)
    //hooks
    // const { refetch } = getUsersData()
    const { slice, range } = useTable(data, page, rowsPerPage)

    useEffect(() => {
        // refetch()
        console.log({ page, rowsPerPage });
    }, [page, rowsPerPage])


    const handleRowperPage = (number: number) => {
        setRowsPerPage(number)
    }

    const handleActions = () => {
        console.log('actions');
    }

    const handleCheck = (e?: ChangeEvent<HTMLInputElement>, user?: User) => {
        let parentElement = e?.target?.parentNode?.parentElement
        if (e?.target.checked) {
            console.log(user?.id);

            setDeleteUser(user)

            if (parentElement) {
                parentElement.classList.add('selected')
            }
        } else {
            setDeleteUser(undefined)
            if (parentElement) {
                parentElement.classList.remove('selected')
            }
        }
        console.log(e?.target.parentNode?.parentNode);
    }

    const handleCheckHeader = (e?: ChangeEvent<HTMLInputElement>) => {
        setCheckAll(e!.target.checked)
    }

    return (
        <>
            <TableComponent style={{ width: '100%' }}>
                <Thead>

                    <Tr className={styles.trHead}>
                        {
                            columns.map(column => (
                                <Th style={{ width: column.width }} key={v4()}>
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
                            <Tr key={item.id} className={styles.trBody}>
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
                <Modal isOpen={isOpenModalEditUser} /* setIsOpen={setIsOpenModalEditUser} */>
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