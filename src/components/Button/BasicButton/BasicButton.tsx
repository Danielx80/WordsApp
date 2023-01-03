import styles from './BasicButton.module.css'
import { BasicButtonProps } from './interface'

const BasicBtn = ({ backgroundColor, size, text, colorText, onClick, borderColor, fontWeight }: BasicButtonProps) => {
    return (
        <button className={`${styles[size]} ${styles.button}`} style={{ backgroundColor: backgroundColor, color: colorText, borderColor: borderColor }} onClick={onClick}>
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