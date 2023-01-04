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
import { CreateMessage } from '../components/Message/MessageNewUser/index';
import { getUsersData } from '../hooks/useUsers';
import { User } from '../components/Table/interface/index';
import { BtnDeleteUser } from '../components/Button/BtnDeleteUser/BtnDeleteUser';
import ModalDelete from '../components/Modal/ModalDelete/ModalDelete';
import { InputSearch } from '../components/InputSearch/InputSearch';

export const UsersPage = () => {
  const { state } = useContext(TableContext)
  const { deleteUser } = state
  const [MessageShow, setMessageShow] = useState(false)
  const [isOpenModalNewUser, setOpenModalNewUser] = useState(false)
  const [OpenModalDeleteUser, setOpenModalDeleteUser] = useState(false)
  const [show, setShow] = useState(true);
  const [checkAll, setCheckAll] = useState(false)
  const { isReady } = useContext(Context);
  const { isAuthenticated } = useAuth0();
  const { data, isLoading, error, isError } = getUsersData()

  useEffect(() => {
    !isOpenModalNewUser
      ? null
      : setMessageShow(true)
  }, [isOpenModalNewUser])

  if (!isReady || isLoading) {
    return <></>;
  }

  return (
    <>
      {
        MessageShow &&
        <div className={styles.floatingBtn}>
          <CreateMessage />
        </div>
      }
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
              onChange={() => { }}
            />

            <div className={styles.roundsButton}>

              {
                deleteUser?.id && <BtnDeleteUser iconName="Trash" onClick={() => setOpenModalDeleteUser(true)} />
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
          onSubmit={() => { }}
          size='md'
          textHeader='New User'
        />
      </Modal >
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