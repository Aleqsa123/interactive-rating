import styles from './rate.module.css';
import { useState } from 'react';
import Response from './Response';

// This is main function of RateApp component
function RateApp() {

  //This function sets "li" useState
  const [liState, changeLiState] = useState({
    activeLi: [],
    lies: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
  })

  // This variable saves selected "li"s value to send as a prop in Response
  let liValue = liState.activeLi.id;

// This function selects "li" element
  function toggleActive(index) {
    changeLiState({...liState, activeLi: liState.lies[index]});
  }

  // This function sets styles for active and inactive "li" elements
  function toggleStyle(index){
    if (liState.lies[index] === liState.activeLi){
      return styles.active;
    }else{return styles.inactive}
  }

    // This function renders RateApp or Response base on if statement
    const [currentApp, renderedApp] = useState("current");
    if(currentApp === "current"){
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
          <nav>
          <button type="submit" onClick={()=>{renderedApp("newpage")}}>S u b m i t</button>
          </nav>
  
        </div>
      );
    }else{
      return <Response number = {liValue} />
      }


  }

  export default RateApp;