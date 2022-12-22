import { useEffect, useContext, useState, createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../context/Context";
import styles from "../assets/css/users.module.css";
import H2 from "../components/Typhography/H2";
import BasicBtn from "../components/Button/BasicButton/BasicButton";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { SelectAll } from "../components/Button/SelectAll/SelectAll";
import InputSearch from '../components/InputSearch/InputSearch';
import { RoundBtn } from '../components/Button/RoundButton/RoundButton';
import CardsTable from '../components/CardUserTable/CardTable';
import ModalNewUser from '../components/Modal/ModalNewUsers/ModalNewUsers';
import { CreateMessage } from '../components/Message/MessageNewUser/index';
import { getUsersData } from '../hooks/useUsers';
import { User } from '../components/Table/interface/index';
import { BtnDeleteUser } from '../components/Button/BtnDeleteUser/BtnDeleteUser';


interface TableContextProps {
  currentUser: User | undefined,
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>,
  isOpenModalEditUser: boolean,
  setIsOpenModalEditUser: React.Dispatch<React.SetStateAction<boolean>>
  deleteUser: User | undefined
  setDeleteUser: React.Dispatch<React.SetStateAction<User | undefined>>,

}

export const TableContext = createContext<TableContextProps>({} as TableContextProps)
const TableProvider = TableContext.Provider

export const UsersPage = () => {

  const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false)
  const [deleteUser, setDeleteUser] = useState<User>()
  const [currentUser, setCurrentUser] = useState<User>()
  const [isOpenModalNewUser, setOpenModalNewUser] = useState(false)
  const [show, setShow] = useState(true);
  const [checkAll, setCheckAll] = useState(false)
  const { isReady } = useContext(Context);
  const { isAuthenticated } = useAuth0();
  const { data, isLoading, error, isError, isFetching } = getUsersData()

  // const { data } = getUsersDataCards();

  // useEffect(() => {
  //   // if
  //   isAuthenticated;
  // }, [isAuthenticated]);

  useEffect(() => {
    console.log(setIsOpenModalEditUser)
  }, [isOpenModalEditUser])

  if (!isReady || isLoading || isFetching) {
    return <></>;
  }


  console.log(data)

  return (
    <TableProvider value={{ currentUser, setCurrentUser, isOpenModalEditUser, setIsOpenModalEditUser, deleteUser, setDeleteUser, }}>

    
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div className={styles.containerUser}>
          <div className={styles.containerHeaderUsers}>
            <div className={styles.titleUsers}>
              <H2 variant="bold">Users</H2>
              <BasicBtn
                size="md"
                fontWeight={700}
                backgroundColor="var(--celeste700)"
                colorText="var(--white)"
                text="New User"
                onClick={() => { setOpenModalNewUser(true) }}
              />
            </div>
            <div className={styles.spaceText}></div>
          </div>
          <div className={styles.containerSearch}>
            <InputSearch
              size="md"
              type="text"
              text="Search Users by name or keyword..."
              icon="MagnifyingGlass"
              onChange={() => { }}
            />

            <div className={styles.trashBtn}>
              {
                deleteUser && <BtnDeleteUser iconName="Trash" />
              }
            </div>
            <div className={styles.roundsButton}>
              {
                show ?
                  null :
                  <SelectAll isChecked={(checked) => setCheckAll(checked)} />
              }
              <RoundBtn iconName="ListBullets" onClick={() => setShow(true)} />
              <RoundBtn iconName="SquaresFour" onClick={show => setShow(!show)} />
              <div style={{ marginLeft: 24 }}>
                <RoundBtn iconName="DotsThree" />
              </div>
            </div>

          </div>

          {
            show ?
              <div className={styles.containerTable}>
                <Table data={data.data} />
              </div>
              :
              <div className={styles.containerCard}>
                {data &&
                  data.data.map((item: User) => (
                    <CardsTable
                      key={item.id}
                      checked={checkAll}
                      name={`${item.first_name} ${item.last_name} `}
                      email={item.email}
                      phone={item.telephone}
                      country={item.time_zone}
                    />
                  ))
                }
              </div>
          }

        </div>
      </div>
      <Modal callback={(Open) => setOpenModalNewUser(Open)} isOpen={isOpenModalNewUser} >
        <ModalNewUser
          size='md'
          textHeader='New User'
        />
      </Modal>
    </TableProvider>
  );
};