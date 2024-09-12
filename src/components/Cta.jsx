import styles from "./Cta.module.css";

function Cta() {
  return (
    <div className={styles.cta}>
      <p>35,000+ ALREADY JOINED</p>
      <h2>Stay up-to-date with what we&apos;re doing</h2>
      <div className={styles.form}>
        <input type="email" placeholder="Enter your email address" id="email" />
        <label htmlFor="email">Whoops, make sure it&apos;s an email</label>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Cta;
