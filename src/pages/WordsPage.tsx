import styles from '../assets/css/words.module.css'
import { BoxCategory } from '../components/BoxCategory/BoxCategory'

export const WordsPage = () => {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <div className={styles.containerWords}>
    <div className={styles.containerHeaderWords}>

      <div className={styles.containerBody}>
        <BoxCategory
          title='🗂️  Norm-ISO 27000'
          word='Absolute phrase'
        />
      </div>
    </div>
      </div>
    </div>

  )
}

