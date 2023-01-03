import Avatar from "../Avatar";
import Infoframe from "../Infoframe";
import styles from "./CardUsers.module.css";
import { CardUsersProps } from "./interface";

const CardUser = ({ name, email, phone, country }: CardUsersProps) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.containerItems}>

        <div className={styles.containerHeader}>
          <Avatar
            size="xl"
            numberOfCharacters={2}
            backgroundColor="var(--orange500)"
            text={name}
          />
          <p className={styles.textName}>{name}</p>
          <Infoframe
            icon="EnvelopeSimple"
            size="md"
            text={email}
            backgroundColor="var(--neutral500)"
          />
        </div>
        <div className={styles.line}></div>

        <div className={styles.footer}>
          <Infoframe
            icon="Phone"
            size="md"
            text={phone}
            backgroundColor="var(--neutral500)"
          />
         <br />
            <Infoframe
              size="md"
              text={country}
              backgroundColor="var(--neutral500)"
            />
        </div>
      </div>
    </div>
  );
};

export default CardUser;

CardUser.defaultProps = {
  name: 'Juanito',
  email: 'juanito@gmail.com',
  phone: '4272443402',
  country: 'Mexico City (GTM-5)',
}