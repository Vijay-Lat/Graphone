import styles from './swissFlag.module.css'
function SwissFlag() {
  return (
    <div className={styles.swissFlag}>
        <div  className={styles.firstCross} ></div>
        <div  className={styles.secondCorss}></div>
    </div>
  )
}

export default SwissFlag