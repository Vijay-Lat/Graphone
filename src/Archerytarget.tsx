import Styles from './archeryTarget.module.css'
function Archerytarget() {
    return (
        <div className={Styles.rings}>
            <div className={`${Styles.ring} ${Styles.ring_one}`}>
                <div className={`${Styles.ring} ${Styles.ring_two}`}>

                    <div className={`${Styles.ring} ${Styles.ring_three}`}>
                        <div className={`${Styles.ring} ${Styles.bulls_eye}`}></div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Archerytarget