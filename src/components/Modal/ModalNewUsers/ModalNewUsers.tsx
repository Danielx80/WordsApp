import { User, X } from "phosphor-react";
import styles from "./ModalNewUsers.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import BasicBtn from "../../Button/BasicButton/BasicButton";
import { useContext, useState } from 'react';
import { ModalNewProps } from "./interface";
import InputModal from '../../InputsModal/Inputs';
import ToggleButton from '../../Button/ToggleButton/ToggleButton';
import { IUser } from '../../../interface/FetchAllUserResponse';
import { createUserData } from '../../../hooks/useUsers';
import { InputSelectTime } from "../../InputsModal/inputSelect/InputSelect";
import { InputSelectIdiom } from '../../InputsModal/InputSelectIdioms/InputSelectIdiom';
import { useFormik, } from "formik";
import { object, date, string } from "yup";

const ModalNewUser = ({ size, textHeader }: ModalNewProps) => {

  const initialValues = {
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

  const { setIsOpenModal } = useContext(ModalContext)
  const [user, setUser] = useState<IUser>(initialValues)
  const { mutate } = createUserData()
  const validationSchema = object({
    date_of_birth: date().default(new Date('2018-12-31')).max('2018-12-31').required('El año de nacimiento es obligatorio'),
    email: string().email('El email no tiene formato valido').required('El email es obligatorio'),
    first_name: string().required('El nombre es requerido').min(1, 'El nombre tiene que tener almenos un carácter').max(10, 'El nombre no pued esuperar los 10 carácteres'),
    language: string().required('debes seleccionar un lenguaje'),
    last_name: string().required('El apellido es requerido').min(1, 'El apellido tiene que tener almenos un carácter').max(20, ' El apellido no pued esuperar los 20 carácteres'),
    telephone: string().min(10, 'minimo 10 carácteres').required('El telefono es requerido'),
    time_zone: string().required('Debes seleccionar una zona horaria'),
  })

  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    onSubmit: user => {
      mutate(user)
      setUser(initialValues)
      setIsOpenModal(false)
    }
  }
  )

  return (
    <form onSubmit={formik.handleSubmit}>
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
            <X size='2.8rem' onClick={() => setIsOpenModal(false)} />
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='first_name'
            size="lg"
            value={formik.values.first_name}
            type="text"
            placeholder="Jose"
            textTitle="Name*"
            errorMsg={formik.errors.first_name}
            hasError={formik.errors.first_name ? true : false}
          />
          <InputModal
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='last_name'
            value={formik.values.last_name}
            size="lg"
            type="text"
            placeholder="Ramirez"
            textTitle="Last Name*"
            errorMsg={formik.errors.last_name}
            hasError={formik.errors.last_name ? true : false}
          />
          <div className={styles.containerBirthdayPhone}>
            <InputModal
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='date_of_birth'
              value={formik.values.date_of_birth}
              size="md"
              type="date"
              placeholder="Ramirez"
              textTitle="Birthday"
              errorMsg={formik.errors.date_of_birth}
              hasError={formik.errors.date_of_birth ? true : false}
            />
            <InputModal
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='telephone'
              value={formik.values.telephone}
              size="md"
              type="text"
              placeholder="(442) 212 2365"
              textTitle="Phone number*"
              errorMsg={formik.errors.telephone}
              hasError={formik.errors.telephone ? true : false}
            />
          </div>
        </div>
        <div className={styles.accountInformation}>
          <p className={styles.title}>ACCOUNT INFORMATION</p>
          <InputModal
            textId="email-Error"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='email'
            value={formik.values.email}
            size="lg"
            type="text"
            placeholder="joss.ramirez@company.mx"
            textTitle="Email*"
            hasError={formik.errors.email ? true : false}
            errorMsg={formik.errors.email}
          />
          <InputSelectTime
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='time_zone'
            value={formik.values.time_zone}
            size='xl'
            textTitle="TimeZone*"
          />
          {formik.errors.time_zone && formik.touched.time_zone && <span>{formik.errors.time_zone}</span>}
          <InputSelectIdiom
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='language'
            value={formik.values.language}
            textTitle='Language'
            size="sm"
          />
          {formik.errors.language && formik.touched.language && <span>{formik.errors.language}</span>}
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
            // onClick={() => onSubmit}
            size="sm"
            backgroundColor="var(--celeste700)"
            fontWeight={700}
            borderColor="var(--celeste700)"
            colorText="var(--white)"
            text="Save"
          />
        </div>
      </div>
    </form>

  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};