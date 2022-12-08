import { Icon } from '../Iconography/Icon';
import { InputSearchsProps } from './interface/index';
import styles from './InputSearch.module.css'


export const InputSearch = ({ size, type, eventHandler, text, icon }: InputSearchsProps) => {
  return (
    <div className={`${styles[size]} ${styles.borders}`} >
      <Icon color='var(--gray500)' iconName={icon} size='1.6rem' />
      <input className={`${styles.contenido}`} type={type} onChange={eventHandler} placeholder={text} />
    </div>
  )
}

export default InputSearch
InputSearch.defaultProps = {
  type: 'text',
  text: 'Search Input...',
  icon: 'MagnifyingGlass',
  size: 'md',
  textTitle: 'Email*',
}