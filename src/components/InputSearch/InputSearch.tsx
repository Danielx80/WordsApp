import { Icon } from '../Iconography/Icon';
import { InputSearchsProps } from './interface/index';
import styles from './InputSearch.module.css'


export const InputSearch = ({ value, onChange, size, type, text, icon, background }: InputSearchsProps) => {
  return (
    <div className={`${styles[size]} ${styles.borders}`} style={{ background: background }} >
      <Icon color='var(--gray500)' iconName={icon} size='1.6rem' />
      <input
        className={`${styles.contenido}`}
        style={{ background: background }}
        type={type} 
        onChange={onChange}
        placeholder={text}
        value={value}
      />
    </div>
  )
}