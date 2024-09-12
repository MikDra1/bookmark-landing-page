import Extension from "./Extension";
import styles from "./Extensions.module.css";

function Extensions() {
  return (
    <div className={styles.extensions}>
      <div className={styles.extensionsDesc}>
        <h2>Download the extension</h2>
        <p>
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>

      <div className={styles.extensionsContent}>
        <Extension
          icon="./images/logo-chrome.svg"
          browser="Chrome"
          version="62"
        />
        <Extension
          icon="./images/logo-firefox.svg"
          browser="Firefox"
          version="55"
        />
        <Extension
          icon="./images/logo-opera.svg"
          browser="Opera"
          version="46"
        />
      </div>
    </div>
  );
}

export default Extensions;
