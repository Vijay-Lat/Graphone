import Styles from './loadingAnimation.module.css'
function LoadingAnimation() {
  return (
    <div className={Styles.container}>
        <div className={Styles.circle}>

        </div>
         <div className={Styles.circle}>

        </div>
         <div className={Styles.circle}>

        </div>
    </div>
  )
}

export default LoadingAnimation