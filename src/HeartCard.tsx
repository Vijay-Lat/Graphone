import styles from './heartCard.module.css'
function HeartCard() {
  return (
    <div className={styles.card}>
        <div className={styles.left}>
            <div>4</div>
            <div>&hearts;</div>
        </div>
        <div className={styles.middle}>
            <div>&hearts;</div>
            <div>&hearts;</div>
            <div>&hearts;</div>
            <div>&hearts;</div>
            
        </div>
        <div className={styles.right}>
             <div>4</div>
            <div>&hearts;</div>
        </div>
        

    </div>
  )
}

export default HeartCard