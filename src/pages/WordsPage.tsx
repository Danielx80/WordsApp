import styles from '../assets/css/words.module.css'
import { BoxCategory } from '../components/BoxCategory/BoxCategory'
import BannerGlossary from '../components/Images/BannerGlossary/BannerGlossary';

export const WordsPage = () => {
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <div className={styles.containerWords}>
        <div className={styles.containerHeaderWords}>
          <BannerGlossary />
          <div className={styles.boxCategoryStyles}>
            <BoxCategory />
          </div>
        </div>
      </div>
    </div>
  )
}

