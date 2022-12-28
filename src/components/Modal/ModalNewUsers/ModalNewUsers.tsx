import { User } from "phosphor-react";
import styles from "./ModalNewUsers.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import BasicBtn from "../../Button/BasicButton/BasicButton";
import { useContext, useState, ChangeEvent } from 'react';
import { ModalNewProps } from "./interface";
import InputModal from '../../InputsModal/Inputs';
import ToggleButton from '../../Button/ToggleButton/ToggleButton';
import { IUser } from "../../../interface/FetchAllUserResponse";
import { createUserData } from '../../../hooks/useUsers';
import { InputSelectTime } from "../../InputsModal/inputSelect/InputSelect";
import { InputSelectIdiom } from '../../InputsModal/InputSelectIdioms/InputSelectIdiom';
import { RoundBtn } from '../../Button/RoundButton/RoundButton';

const ModalNewUser = ({ size, textHeader }: ModalNewProps) => {

  const initialValue = {
    date_of_birth: '',
    email: '',
    first_name: '',
    id: '',
    language: '',
    last_name: '',
    second_last_name: '',
    telephone: '',
    time_zone: ''
  }
  const [user, setUser] = useState<IUser>(initialValue)
  const { setIsOpenModal } = useContext(ModalContext)

  const { mutate } = createUserData()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    )
  }
  function handleSubmit() {
    mutate(user)
    setUser(initialValue)
    setIsOpenModal(false)

  }

  return (
    <>
      <div
        className={`${styles[size]} ${styles.modalContainer}`}
      >
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>{textHeader}</p>
          <div className={styles.closeBtn}>
            <RoundBtn iconName='X' weight="fill"/>
          </div>
        </div>
        <div className={styles.separationHeader}></div>
        <div className={styles.typeUser}>
          <div className={styles.textTypeUser}>
            What type of user do you want to create?
          </div>
          <ToggleButton values={['Admin', 'Editor']} />
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
            </div>
          </div>
          <InputModal
            onChange={handleChange}
            name='first_name'
            size="lg"
            value={user.first_name}
            type="text"
            placeholder="Jose"
            textTitle="Name*" />

          <InputModal
            onChange={handleChange}
            name='last_name'
            value={user.last_name}
            size="lg"
            type="text"
            placeholder="Ramirez"
            textTitle="Last Name*"
          />

          <div className={styles.containerBirthdayPhone}>
            <InputModal
              onChange={handleChange}
              name='date_of_birth'
              value={user.date_of_birth}
              size="md"
              type="date"
              placeholder="Ramirez"
              textTitle="Birthday"
            />
            <InputModal
              onChange={handleChange}
              name='telephone'
              value={user.telephone}
              size="md"
              type="text"
              placeholder="(442) 212 2365"
              textTitle="Phone number*"
            />

          </div>
        </div>
        <div className={styles.accountInformation}>
          <p className={styles.title}>ACCOUNT INFORMATION</p>
          <InputModal
            onChange={handleChange}
            name='email'
            value={user.email}
            size="lg"
            type="text"
            placeholder="joss.ramirez@company.mx"
            textTitle="Email*"
          />
          <InputSelectTime
            onChange={handleChange}
            name='time_zone'
            value={user.time_zone}
            size='xl'
            textTitle="TimeZone*"
          />

          <InputSelectIdiom
            onChange={handleChange}
            name='language'
            value={user.language}
            textTitle='Language'
            size="sm"
          />
        </div>
        <div className={styles.separationFooter}></div>
        <div className={styles.inputContainer}>
          <input type="checkbox" className={styles.input} />
          <p className={styles.textInput}>Create another User</p>
        </div>
        <div className={styles.buttonFooter}>
          <BasicBtn
            onClick={() => setIsOpenModal(false)}
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
    </>

  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};