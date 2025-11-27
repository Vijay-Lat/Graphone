import styles from './frenchFlag.module.css';
function FrenchFlag() {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.flagContainer}>
        <div className={`${styles.stripes} ${styles.blue}`}></div>
        <div className={`${styles.stripes} ${styles.white}`}></div>
        <div className={`${styles.stripes} ${styles.red}`}></div>
    </div>
    </div>
  )
}

export default FrenchFlag