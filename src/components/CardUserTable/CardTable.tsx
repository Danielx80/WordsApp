import Infoframe from '../Infoframe';

import Avatar from '../Avatar/Avatar';
import styles from './CardTable.module.css'
import { CardTableProps } from './interface/index';
import { ChangeEventHandler, ChangeEvent, useState, useEffect } from 'react';

const CardsTable = ({ checked, email, name, onClick, phone, country, hasCheckBox }: CardTableProps) => {
	
	const [isChecked, setIsChecked] = useState(checked)
	
	const handlerCheck = (e:  ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked)
	}

	useEffect(() => {
		setIsChecked(checked)
	}, [checked])
	
	return (

		<div className={styles.cardsContainer} >
			<div className={styles.containerItems}>
				{hasCheckBox ? <input onChange={handlerCheck} type="checkbox" checked={isChecked} className={styles.checked} /> : null}

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
	)
}

export default CardsTable
CardsTable.defaultProps = {
	name: 'Juanito',
	email: 'juanito@gmail.com',
	phone: '4272443402',
	country: 'Mexico City (GTM-5)',
	checked: true,
	hasCheckBox: true
}