import styles from './BasicButton.module.css'
import { BasicButtonProps } from './interface'

const BasicBtn = ({ type, backgroundColor, size, text, colorText, onClick, borderColor, fontWeight, onChange }: BasicButtonProps) => {
    return (
        <button onChange={onChange} type={type} className={`${styles[size]} ${styles.button}`} style={{ backgroundColor: backgroundColor, color: colorText, borderColor: borderColor }} onClick={onClick}>
            <div className={styles.containerButton}>
                <p className={styles.textButton} style={{ fontWeight: fontWeight }}>{text}</p>
            </div>
        </button>
    )
}

export default BasicBtn

BasicBtn.defaultProps = {
    size: 'md'
}