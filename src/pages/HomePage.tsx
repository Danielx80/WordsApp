import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import RectangleImg from "../components/Images/RectangleImg";
import "../assets/css/home.css";
import ButtonEdit from "../components/Button/ButtonEdit/ButtonEdit";
import HomeCards from "../components/HomeCards/HomeCards";
import H2 from "../components/Typhography/H2";
import H3 from "../components/Typhography/H3";
import Infoframe from "../components/Infoframe";
import CardUser from "../components/CardUsers/CardUsers";
import PaginationHome from "../components/PaginationHome/PaginationHome";
import OptionsHome from '../components/PaginationHome/OptionsHome';
import Modal from "../components/Modal";
import ModalEditUser from '../components/Modal/ModalEditUser/ModalEditUser';


export const HomePage = () => {
  const { isLoading, user } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;
  const [isOpenModal, setIsOpenModal] = useState(false)
  useEffect(() => {
    console.log(isOpenModal)
  }, [isOpenModal])

  return (

    <> <div style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container">
        <div className="containerHeader">
          <RectangleImg />
        </div>
        <div className="containerBody">
          <div className="containerNameButtton">
            <H2 variant="bold">Diego Antonio Juarez</H2>
            <ButtonEdit
              onClick={() => { setIsOpenModal(true) }}
              size="md"
              text="Edit User"
              backgroundColor="var(--celeste600)"

            />
          </div>
        </div>
        <div className="containerBody">
          <div className="containerTags">
            <Infoframe
              icon="EnvelopeSimple"
              size="md"
              text="isabella@bluepixel.mx"
              backgroundColor="var(--neutral500)"
            />
            <Infoframe
              icon="Phone"
              size="md"
              text="442 234 4567"
              backgroundColor="var(--neutral500)"
            />

            <Infoframe
              size="md"
              text="Mexico City (GMT-5)"
              backgroundColor="var(--neutral500)"
            />
          </div>
        </div>

        {/* <div className="space-text"></div> */}
        <hr />


        <div className="containerNewWords">
          <div className="titleHome">
            <H3 variant="bold">New Words</H3>
            <PaginationHome />
          </div>
          <div className="containerCards">
            <HomeCards
              header="Adjectival"
              body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
            ></HomeCards>
            <HomeCards
              header="Collaborative conversations"
              body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
            ></HomeCards>
            <HomeCards
              header="Dependent clause"
              body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
            ></HomeCards>
          </div>
        </div>

        <div className="containerCategories">
          <div className="titleHome">
            <H3 variant="bold">Categories</H3>
            <PaginationHome />
          </div>
          <div className="containerCards">
            <HomeCards
              header="📋  Quality"
              body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
            ></HomeCards>
            <HomeCards
              header="🧮  Operation"
              body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
            ></HomeCards>
            <HomeCards
              header="🗂️  Norm-ISO 27000"
              body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
            ></HomeCards>
          </div>
        </div>

        <div className="containerCategories">
          <div className="titleHome">
            <H3 variant="bold">Users</H3>
            <PaginationHome />
          </div>
          <div className="containerCards">
            <CardUser
              name='Isaura Romero'
              email='isa.romero@company.mx'
              phone='+52 442 172 3740'
              country='Mexico City (GMT-5)'
            />
            <CardUser
              name='Jose Ramirez'
              email='joss.ramirez@company.mx'
              phone='+52 442 172 3740'
              country='Mexico City (GMT-5)'
            />
            <CardUser
              name='Roberto Mendoza'
              email='roberto@company.mx'
              phone='+52 442 172 3740'
              country='Mexico City (GMT-5)'
            />
            <CardUser
              name='Erika Lopez'
              email='erika.lopez@company.mx'
              phone='+52 442 172 3740'
              country='Mexico City (GMT-5)'
            />
          </div>
          <div className="containerActions">
            <div className="titleHome">
              <H3 variant="bold">Last Actions Registered</H3>
              <OptionsHome />
            </div>
          </div>
        </div>
      </div>
    </div>
      <Modal callback={(Open) => setIsOpenModal(Open)} isOpen={isOpenModal}>
        <ModalEditUser
          backgroundColor='white'
          size='md'
          textHeader='Edit User'
        />
      </Modal>
    </>
  );
};
