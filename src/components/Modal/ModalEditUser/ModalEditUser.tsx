import { User, X } from "phosphor-react";
import styles from "./ModalEditUser.module.css";
import Avatar from "../../Avatar";
import BasicBtn from "../../Button/BasicButton/BasicButton";
import { useContext, useState, ChangeEvent, useEffect } from 'react';
import { ModalEditProps } from "./interface";
import InputModal from '../../InputsModal/Inputs';
import ToggleButton from "../../Button/ToggleButton/ToggleButton";
import { IUser } from '../../../interface/FetchAllUserResponse';
import { updateUserData } from '../../../hooks/useUsers';
import { InputSelectTime } from '../../InputsModal/inputSelect/InputSelect';
import { InputSelectIdiom } from '../../InputsModal/InputSelectIdioms/InputSelectIdiom';
import { TableContext } from "../../../context/TableContext";
import { CreateMessage } from '../../Message/MessageNewUser/index';


const ModalEditUser = ({ size, textHeader, user: originalUser }: ModalEditProps) => {

  const initialValue = {
    auth0_id: '',
    birthday: '',
    email: '',
    id: '',
    image: '',
    is_admin: true,
    language: '',
    lastname: '',
    middlename: '',
    name: '',
    phone: '',
    timezone: '',
  }

  const [user, setUser] = useState<IUser>(originalUser ?? initialValue)
  const { setIsOpenModalEditUser } = useContext(TableContext)
  const { mutate } = updateUserData()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    )
  }

  function handleSubmit() {
    mutate({ ...user, is_admin: user.is_admin })
    setUser(initialValue)
    setIsOpenModalEditUser(false)
  }

  function handleTypeUserChange({ isActive }: { isActive: boolean }) {
    console.log('handleType', isActive);
    setUser({ ...user, is_admin: isActive })

  }
  useEffect(() => setUser(_ => originalUser), [originalUser])

  return (

    <div
      className={`${styles[size]} ${styles.modalContainer}`}
    >

      <div className={styles.headerTitle}>
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>{textHeader}</p>
        </div>
        <div className={styles.closeIcon}>
          <X size='2.8rem' onClick={() => setIsOpenModalEditUser(false)} />
        </div>
      </div>
      <div className={styles.separationHeader}></div>
      <div className={styles.typeUser}>
        <div className={styles.textTypeUser}>
          What type of user do you want to create?
        </div>
        <ToggleButton
          values={['Admin', 'Editor']}
          onChange={handleTypeUserChange}
        />
      </div>
      <div className={styles.containerPersonalInformation}>
        <div className={styles.personalInfoText}>
          <p className={styles.title}>PERSONAL INFORMATION</p>
          <p className={styles.infoReq}>* Information required</p>
        </div>
        <p className={styles.profilePicture}>Profile Picture</p>
        <div className={styles.containerChangePicture}>
          <Avatar
            size="xl"
            imageSrc="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg"
          />
          <div className={styles.containerChangePictureBtn}>
            <BasicBtn
              size="lg"
              backgroundColor="white"
              fontWeight={700}
              borderColor="var(--neutral300)"
              colorText="var(--neutral900)"
              text="Upload New Picture"
            />
            <BasicBtn
              size="sm"
              backgroundColor="var(--red400)"
              fontWeight={700}
              borderColor="var(--red400)"
              colorText="var(--white)"
              text="Delete"
            />
          </div>
        </div>

        <InputModal
          value={user.name}
          onChange={handleChange}
          name='name'
          // value={user.first_name}
          size="lg"
          type="text"
          placeholder='Jose'
          textTitle="Name*"
        />
        <InputModal
          value={user.lastname}
          onChange={handleChange}
          name='lastname'
          // value={user.last_name}
          size="lg"
          type="text"
          placeholder='Ramirez'
          textTitle="Last Name*"
        />

        <div className={styles.containerBirthdayPhone}>
          <InputModal
            value={user.birthday}
            onChange={handleChange}
            name='birthday'
            // value={user.date_of_birth}
            size="md"
            type="date"
            subText=" (Optional)"
            placeholder='22 Nov 1990'
            textTitle="Birthday"
          />
          <InputModal
            value={user.phone}
            onChange={handleChange}
            name='phone'
            // value={user.telephone}
            size="md"
            type="text"
            placeholder='(442) 212 2365'
            textTitle="Phone number*"
          />
        </div>
      </div>

      <div className={styles.accountInformation}>
        <p className={styles.title}>ACCOUNT INFORMATION</p>
        <InputModal
          onChange={handleChange}
          value={user.email}
          name='email'
          disabled
          size="lg"
          type="text"
          placeholder='joss.reamirez@company.mx'
          textTitle="Email*"
        />
        <InputSelectTime
          onChange={handleChange}
          name='timezone'
          value={user.timezone}
          // value={user.time_zone}
          placeholder='Choose...'
          size='xl'
          textTitle="TimeZone"
        />

        <InputSelectIdiom
          onChange={handleChange}
          name='language'
          value={user.language}
          // value={user.language}
          textTitle='Language'
          placeholder="Choose..."
          size="sm"
        />

      </div>

      <div className={styles.separationFooter}></div>

      <div className={styles.buttonFooter}>
        <BasicBtn
          onClick={() => setIsOpenModalEditUser(false)}
          size="sm"
          backgroundColor="white"
          fontWeight={700}
          borderColor="var(--neutral300)"
          colorText="var(--neutral900)"
          text="Cancel"
        />
        <BasicBtn
          onClick={handleSubmit}
          size="sm"
          backgroundColor="var(--celeste700)"
          fontWeight={700}
          borderColor="var(--celeste700)"
          colorText="var(--white)"
          text="Save"
        />
      </div>
    </div>
  );
};

export default ModalEditUser;

ModalEditUser.defaultProps = {
  size: "md",

};