/* eslint-disable react/prop-types */
import styles from "./Faq.module.css";

function Faq({ title, id, isOpen, handleChangeFaq, children }) {
  return (
    <div className={styles.faq} onClick={() => handleChangeFaq(id)}>
      <div className={styles.faqContent}>
        <h3>{title}</h3>
        <img src="./images/icon-arrow.svg" alt="" className={id === isOpen ? `${styles.iconRotate}` : ''} />
      </div>
      <p className={styles.response}>{id === isOpen ? children : ""}</p>
    </div>
  );
}

export default Faq;
