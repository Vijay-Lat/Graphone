import styles from './instaStory.module.css'
function InstaStory() {
  return (
    <ul className={styles.storiesMenu}>
        <li className={styles.story + ' ' + styles.new }>
            <div className={styles.imgWrapper}>
            <img className={styles.image} src="https://images.pexels.com/photos/33758197/pexels-photo-33758197.jpeg" alt="" />
            </div>
            <p>Name</p>
        </li>
        <li className={styles.story + ' ' + styles.viewed  + ' ' + styles.live}>
            <div className={styles.imgWrapper}>
            <img className={styles.image} src="https://images.pexels.com/photos/33758197/pexels-photo-33758197.jpeg" alt="" />
            </div>
            <p>Nadsadsadsadasdme</p>
        </li>
         <li className={styles.story + ' ' + styles.new }>
            <div className={styles.imgWrapper}>
            <img className={styles.image} src="https://images.pexels.com/photos/33758197/pexels-photo-33758197.jpeg" alt="" />
            </div>
            <p>Name</p>
        </li>
        
    </ul>
  )
}

export default InstaStory