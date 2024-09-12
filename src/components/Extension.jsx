/* eslint-disable react/prop-types */
import Button from "./Button";
import styles from "./Extension.module.css";

function Extension({ icon, version, browser }) {
  console.log(browser)
  return (
    <div className={`${styles.extension}  ${browser === 'Firefox' ? styles.littleOff : ''} ${browser === 'Opera' ? styles.moreOff : ''}`}>
      <img src={icon} alt="" />
      <div className={styles.extensionContent}>
        <h2>Add to {browser}</h2>
        <p>Minimum version {version}</p>
      </div>
      <Button>Add & Install Extension</Button>
    </div>
  );
}

export default Extension;
