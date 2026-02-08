import styles from './spade.module.css'

function Spade() {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div>A</div>
                <div>&spades;</div>

            </div>
            <div className={styles.center}>
                &spades;
            </div>
            <div className={styles.bottom}>
                <div>A</div>
                <div>&spades;</div>
            </div>

        </div>
    )
}

export default Spade