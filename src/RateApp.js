import styles from './rate.module.css';

const RateApp = () => {
    return (
      <div className={styles.maindiv}>
        <img src="./images/icon-star.svg" alt="star icon" />
        <h1 className='h1'>How did we do?</h1>
        <p className={styles.p}>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!</p>
        <ul>
            <li className='number1'>1</li>
            <li className='number2'>2</li>
            <li className='number3'>3</li>
            <li className='number4'>4</li>
            <li className='number5'>5</li>
        </ul>
        <button type="submit">S u b m i t</button>
      </div>
    );
  }

  export default RateApp;