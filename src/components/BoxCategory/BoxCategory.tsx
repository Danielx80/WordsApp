import { Info, Trash, PencilSimple, X } from 'phosphor-react';
import styles from './BoxCategory.module.css'
import { BoxCategoryProps } from './interface/index';

export const BoxCategory = ({ title, word }: BoxCategoryProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={styles.containerTitle}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.iconContainer}>
						<div className={styles.separationIcon}>
							<Info size='2.2rem' weight="light" />
						</div>
						<div className={styles.separationIcon}>
							<Trash size='2.2rem' weight="light" />
						</div>
						<div className={styles.separationIcon}>
							<PencilSimple size='2.2rem' weight="light" />
						</div>
						<div className={styles.closeIcon}>
							<X size='2rem' weight="light" />
						</div>
					</div>
				</div>
				<div className={styles.containerWord}>
					<div className={styles.wrapper}>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
						<p>{word}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BoxCategory
BoxCategory.defaultProps = {
	title: '🗂️  Norm-ISO 27000',
	word: 'Absolute phrase'
}