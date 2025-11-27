import styles from './germanFlag.module.css'
function GermanFlag() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.flagContainer}>
                <div className={`${styles.stripes} ${styles.black}`}></div>
                <div className={`${styles.stripes} ${styles.red}`}></div>
                <div className={`${styles.stripes} ${styles.yellow}`}></div>

            </div>

        </div>
    )
}

export default GermanFlag