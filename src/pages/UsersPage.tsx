
import { TableContext } from '../context/TableContext';
import { useContext, useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../context/Context";
import styles from "../assets/css/users.module.css";
import H2 from "../components/Typhography/H2";
import BasicBtn from "../components/Button/BasicButton/BasicButton";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { SelectAll } from "../components/Button/SelectAll/SelectAll";
import { RoundBtn } from '../components/Button/RoundButton/RoundButton';
import CardsTable from '../components/CardUserTable/CardTable';
import ModalNewUser from '../components/Modal/ModalNewUsers/ModalNewUsers';
import { getUsersDataCards } from '../hooks/useUsers';
import { User } from '../components/Table/interface/index';
import { BtnDeleteUser } from '../components/Button/BtnDeleteUser/BtnDeleteUser';
import ModalDelete from '../components/Modal/ModalDelete/ModalDelete';
import { InputSearch } from '../components/InputSearch/InputSearch';
import { MessageNewUser } from '../components/Message/MessageNewUser/MessageNewUser';

export const UsersPage = () => {
  const { state } = useContext(TableContext)
  const { deleteUser } = state
  const [isOpenModalNewUser, setOpenModalNewUser] = useState<boolean>(false)
  const [OpenModalDeleteUser, setOpenModalDeleteUser] = useState<boolean>(false)
  const [show, setShow] = useState(true);
  const [checkAll, setCheckAll] = useState<boolean>(false)
  const [search, setSearch] = useState('')
  const { isReady } = useContext(Context);
  // const { isAuthenticated } = useAuth0();
  const { data, refetch } = getUsersDataCards();
  const [Message, setMessage] = useState(false)
  const [successModal, setsuccessModal] = useState<{ success: boolean, message: string }>()

  const handleSuccessModal = (success: boolean, message: string) => {
    setsuccessModal({ success, message })
  }


  const handleSearch = (element: any) => {
    setSearch(element.target.value);
  }

  useEffect(() => {
    !isOpenModalNewUser
      ?
      null
      :
      setMessage(true)
  }, [isOpenModalNewUser])

  useEffect(() => {
    if (successModal?.success) {
      setTimeout(() => {
        setsuccessModal({ success: false, message: '' })
      }, 6500)
    }
  }, [successModal])

  useEffect(() => {
  }, [show]);

  if (!isReady) {
    return <></>;
  }

  return (
    <>

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
              background="var(--slate100)"
              type="text"
              text="Search Users by name or keyword..."
              icon="MagnifyingGlass"
              onChange={handleSearch}
              value={search}
            />

            <div className={styles.roundsButton}>
              {
                deleteUser?.id && <BtnDeleteUser
                  iconName="Trash"
                  onClick={() => setOpenModalDeleteUser(true)}
                  weight="regular"
                  height={2}
                  width={2}
                  padding={1}
                />
              }

              {
                show ?
                  null :
                  <SelectAll isChecked={(checked) => setCheckAll(checked)} />
              }
              <RoundBtn
                iconName="ListDashes"
                onClick={() => setShow(true)}
                weight="bold"
                height={2}
                width={2}
                padding={0.6}
              />
              <RoundBtn
                iconName="SquaresFour"
                onClick={(show) => setShow(!show)}
                weight="regular"
                height={2}
                width={2}
                padding={0.6}
              />
              <div style={{ marginLeft: 24 }}>
                <RoundBtn
                  iconName="DotsThree"
                  weight="bold"
                  height={3}
                  width={3}
                  padding={0.1}
                />
              </div>
            </div>

          </div>

          {
            show ?
              <div className={styles.containerTable}>
                <Table search={search} />
              </div>
              :
              <div className={styles.containerCard}>
                {data &&
                  data.users.map((item: User) => (
                    <CardsTable
                      key={item.id}
                      checked={checkAll}
                      name={`${item.name} ${item.lastname}`}
                      email={item.email}
                      phone={item.phone}
                      country={item.timezone}
                    />
                  ))
                }
              </div>
          }
        </div>

      </div>

      <Modal callback={(Open) => setOpenModalNewUser(Open)} isOpen={isOpenModalNewUser} >
        <ModalNewUser
          onSubmit={() => { }}
          size='md'
          textHeader='New User'
          onSuccess={handleSuccessModal}
        />
      </Modal >
      {
        successModal?.success &&
        <MessageNewUser
          message={successModal.message}
          onClick={() => { setsuccessModal({ success: false, message: '' }) }} /> //resetear el estado
      }
      <Modal callback={(Open) => setOpenModalDeleteUser(Open)} isOpen={OpenModalDeleteUser}>
        <div className={styles.deleteModal}>
          <ModalDelete
            title='Delete Users'
            body='The users you selected will be permanently deleted, do you want to continue?'
            user={deleteUser}
          />
        </div>
      </Modal>
    </>
  );
};