import styles from "./response.module.css";

const Response = () => {
    return (
      <div className={styles.maindiv1}>
        <img className={styles.icon} src="./images/illustration-thank-you.svg" alt="checkout icon"/>
        <p className={styles.selectp}>You selected 4 out of 5</p>
        <h1 className={styles.responseh1}>Thank you!</h1>
        <p className={styles.responsep}>We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!</p>
      </div>
    ) 
}

export default Response;