import styles from './rate.module.css';
import { useState } from 'react';

function RateApp() {
  const [liState, changeLiState] = useState({
    activeLi: null,
    lies: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
  })

  function toggleActive(index) {
    changeLiState({...liState, activeLi: liState.lies[index]});
  }

  function toggleStyle(index){
    if (liState.lies[index] === liState.activeLi){
      return styles.active;
    }else{return styles.inactive}
  }

    return (
      <div className={styles.maindiv}>
        <img src="./images/icon-star.svg" alt="star icon" />
        <h1 className='h1'>How did we do?</h1>
        <p className={styles.p}>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!</p>
        <ul>
            {liState.lies.map((element, index) => {
              return <li key={index} className={toggleStyle(index)} onClick = {() => {toggleActive(index)}}>{liState.lies[index].id}</li>
            })}
        </ul>
        <button type="submit">S u b m i t</button>

      </div>
    );
  }

  export default RateApp;