import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      {" "}
      <div className={styles.footerStart}>
        <img src="./images/logo-bookmark-white.png" alt="" />

        <div className={styles.footerLinks}>
          <div>features</div>
          <div>pricing</div>
          <div>contact</div>
        </div>
      </div>
      <div className={styles.socials}>
        <img src="./images/icon-facebook.svg" alt="" />
        <img src="./images/icon-twitter.svg" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
