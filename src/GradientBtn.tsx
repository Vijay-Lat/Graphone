import styles from './gradBtn.module.css'
function GradientBtn() {
  return (
    <div className={styles.container}>
      
      <div className={styles.buttonBorder}>

        <button className={styles.button}>
          Start Coding
        </button>

      </div>

    </div>
  )
}

export default GradientBtn