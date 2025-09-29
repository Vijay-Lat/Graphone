import { useState } from 'react'
import GradientBtn from './GradientBtn';

function App() {
  const [component,setComponent] = useState<string>('')

  const styleComponents = [{
    key: 'gradBtn',
    value:GradientBtn 
  }]
console.log(component,'component');
  return (
    <>
      <nav>
        <p>Styling Parade</p>
        <select name="" id="" onChange={(e) => {
          setComponent(e.target.value);
        }}>
          <option value="">Select</option>
          <option value="gradBtn">Gradient Btn</option>
        </select>
      </nav>
      {
        styleComponents?.length>0 && component &&   styleComponents.filter((comp) =>
          comp.key === component 
        )[0].value()
      }
    </>
  )
}

export default App
