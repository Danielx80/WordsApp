import CircleSkeleton from '../../Skeletons/CircleSkeleton'
import styles from './Avatar.module.css'
import { AvatarProps } from './interface'

const Avatar = ({ size, imageSrc, isLoading, backgroundColor, createBy, text, numberOfCharacters, onClick, textName, value, name, }: AvatarProps) => {

    return (

        <div  role='avatar' className={styles.containerText}>
            <div role='clickAvatar'
                className={`${styles[size]} ${styles.container}`}
                style={{ backgroundColor: imageSrc ? 'transparent' : backgroundColor }}
                onClick={onClick}
                defaultValue={value}
            >
                {imageSrc &&
                    !isLoading ?
                    <img src={imageSrc} alt='avatar' id='avatar' /> :
                    isLoading ? <CircleSkeleton /> :
                        <p>{text?.slice(0, numberOfCharacters ? numberOfCharacters : 2).toUpperCase()}</p>
                }
            </div>
            <div className={styles.space}>
                <div className={styles.createBy}>
                    <p className={styles.textCreateBy}>{createBy}</p>
                    <p className={styles.textCreateByPerson}>{textName}</p>
                </div>
            </div>
        </div>
    )
}

export default Avatar

Avatar.defaultProps = {
    size: 'md'
}