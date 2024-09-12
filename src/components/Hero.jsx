import Button from "./Button";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroIlustration}>
        <img src="./images/illustration-hero.svg" alt="" />
      </div>
      <div>
        <div className={styles.heroContent}>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className={styles.heroBtn}>
          <Button>Get it on Chrome</Button>
          <Button special={true}>Get it on FireFox</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
