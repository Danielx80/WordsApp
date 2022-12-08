import { EnvelopeSimple, Flag } from 'phosphor-react';
import styles from './Infoframe.module.css'
import { Icon } from '../Iconography/Icon';
import { MX } from '../Iconography/Flags';
import { TagsUserProps } from './interface/Index';


const TagsUser = ({ backgroundColor, size, text, icon }: TagsUserProps) => {


    return (
        <div className={`${styles[size]} ${styles.container}`}>

            {icon ? <Icon size='1.8rem' color='var(--neutral500)' iconName={icon} /> :
                <Icon size='1.8rem' color='var(--neutral500)' customIcon={<MX />} />}
            <p className={styles.textStyle} style={{ color: backgroundColor }}>{text}</p>
        </div>

    )
}

export default TagsUser