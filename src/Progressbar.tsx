import styles from './progressbar.module.css';
function Progressbar() {
  return (
    <div  className={styles.container}>
    <div className={styles.progressBar}>
        <div className={styles.progStatus +' '+ styles.fourthPart}>

        </div>
    </div>
    </div>
  )
}

export default Progressbar