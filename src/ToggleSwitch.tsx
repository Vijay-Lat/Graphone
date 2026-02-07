import React, { useState } from 'react';
import styles from './toggleSwitch.module.css'

function ToggleSwitch() {
  const [toggleValue, setToggleValue] = useState<boolean>(false);
  console.log(toggleValue,'see')
  return (
    <label className={styles.checkBoxContainer}>
      <input type="checkbox" className={styles.checkBox} checked={toggleValue} 
      onChange={()=>{setToggleValue(toggleValue=>!toggleValue)}}/>
      <div className={styles.toggleSwitch}></div>
    </label>
  )
}

export default ToggleSwitch