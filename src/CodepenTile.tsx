import styles from './codePenTile.module.css'
function CodepenTile() {
    return (
        <div className={styles.codePenTileContainer}>
            <div className={styles.card}>
                <div className={styles.cardThumbNail}>
                    <img src="https://images.pexels.com/photos/34125813/pexels-photo-34125813.jpeg" alt="" />
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.cardAvatar}>
                        <img src="https://images.pexels.com/photos/33272514/pexels-photo-33272514.jpeg" alt="" />
                    </div>

                    <div className={styles.cardDetails}>
                        <h3>Abstract Gradient Project</h3>
                        <p>Scrimba</p>

                    </div>

                </div>
                <ul className={styles.cardStats}>
                    <li>❤️ 8</li>
                    <li>🍉 32</li>
                </ul>
            </div>
        </div>
    )
}

export default CodepenTile