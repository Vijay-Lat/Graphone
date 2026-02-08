import styles from './flipCard.module.css';
function FlipCard() {
  return (
    <div className={styles.card}>
        <div className={styles.cardFront}>
<h2>Front</h2>
        </div>
        <div className={styles.cardBack}>
<h2>Back</h2>
        </div>
    </div>
  )
}

export default FlipCard