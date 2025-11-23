import Styles from './rotatingSquare.module.css'
function RotatingSquare() {
  return (
    <div className={Styles.container}>
        <div className={`${Styles.square} ${Styles.square_one}`}></div>
        <div className={`${Styles.square} ${Styles.square_two}`}></div>
        <div className={`${Styles.square} ${Styles.square_three}`}></div>
    </div>
  )
}

export default RotatingSquare