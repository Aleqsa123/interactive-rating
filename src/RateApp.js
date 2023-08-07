import styles from './rate.module.css';
import { useState } from 'react';

const RateApp = () => {
  let grey = 'hsla(216, 12%, 54%, 0.2)';
  let lightGrey = 'hsl(217, 12%, 63%)';
  const [style, setStyle] = useState({bgColor: grey,
    txtColor: lightGrey});
   const changeStyle =()=>{
      let lightGrey = 'hsl(217, 12%, 63%)';
      let white = 'hsl(0, 0%, 100%)';
      setStyle({bgColor: lightGrey,
        txtColor: white});
    }
    return (
      <div className={styles.maindiv}>
        <img src="./images/icon-star.svg" alt="star icon" />
        <h1 className='h1'>How did we do?</h1>
        <p className={styles.p}>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!</p>
        <ul>
            <li className='number1' style={{background: style.bgColor, color: style.txtColor}} onClick={changeStyle}>1</li>
            <li className='number2' style={{background: style.bgColor, color: style.txtColor}} onClick={changeStyle}>2</li>
            <li className='number3' style={{background: style.bgColor, color: style.txtColor}} onClick={changeStyle}>3</li>
            <li className='number4' style={{background: style.bgColor, color: style.txtColor}} onClick={changeStyle}>4</li>
            <li className='number5' style={{background: style.bgColor, color: style.txtColor}} onClick={changeStyle}>5</li>
        </ul>
        <button type="submit">S u b m i t</button>
      </div>
    );
  }

  export default RateApp;