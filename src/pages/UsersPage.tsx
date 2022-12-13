import { useEffect, useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../context/Context";
import styles from "../assets/css/users.module.css";
import H2 from "../components/Typhography/H2";
import BasicBtn from "../components/Button/BasicButton/BasicButton";
import Table from "../components/Table";
import dataColumns from "../components/Table/data/dataTable.json";
import Modal from "../components/Modal";
import { SelectAll } from "../components/Button/SelectAll/SelectAll";
import InputSearch from '../components/InputSearch/InputSearch';
import { RoundBtn } from '../components/Button/RoundButton/RoundButton';
import CardsTable from '../components/CardUserTable/CardTable';
import ModalNewUser from '../components/Modal/ModalNewUsers/ModalNewUsers';
import { CreateMessage } from '../components/Message/MessageNewUser/index';

export const UsersPage = () => {
 

  /*  const { data, isLoading, error, isError, isFetching, } = useQuery('useUsers', getUsers) */
  const { isAuthenticated } = useAuth0();
  const { isReady } = useContext(Context);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [show, setShow] = useState(true);
  const [checkAll, setCheckAll] = useState(true)

  useEffect(() => {
    // if
    isAuthenticated;
  }, [isAuthenticated, isReady]);
  
  useEffect(() => {
    console.log(isOpenModal)
  }, [isOpenModal])
  
  if (!isReady) {
    return <></>;
  }


  return (
    <>
    <div className={styles.floatingBtn}>
    <CreateMessage />
    </div>
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
              onClick={() => { setIsOpenModal(true) }}
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
            onChange={() => {}}
          />
          <div className={styles.roundsButton}>
            {show?
            null:
            <SelectAll isChecked={ (checked) => setCheckAll(checked) }/>
          }
            <RoundBtn iconName="ListBullets" onClick={()=>setShow(true)}/>
            <RoundBtn iconName="SquaresFour" onClick={show=>setShow(!show)}/>
            <div style={{ marginLeft: 24 }}>
              <RoundBtn iconName="DotsThree" />
            </div>
          </div>
        </div>

        {
          show ?
            <div className={styles.containerTable}>
              <Table data={dataColumns} />
            </div>
            :
            <div className={styles.containerCard}>
              {
                Array.from({ length: 12 }).map((item, idx) => (
                  <CardsTable key={idx} checked={checkAll}/>
                ))
              }
            </div>
        } 
            
      </div>
    </div>
    <Modal callback={(Open) => setIsOpenModal(Open)} isOpen={isOpenModal} >
    <ModalNewUser
      size='md'
      textHeader='New User'
    />
  </Modal>
</>
  );
};