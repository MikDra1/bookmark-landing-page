import { useState } from "react";
import styles from "./Navigation.module.css";
import { useBookmark } from "../contexts/BookmarkProvider";
import Button from "./Button";
// import Button from "./Button";

function Navigation() {
  const { isMobile } = useBookmark();
  const [imageUrl, setImageUrl] = useState("./images/icon-hamburger.svg");
  const [logoImage, setLogoImage] = useState("./images/logo-bookmark.svg");
  const isOpen = imageUrl === "./images/icon-close.svg";

  function handleOpenNav() {
    setImageUrl((url) =>
      url === "./images/icon-hamburger.svg"
        ? "./images/icon-close.svg"
        : "./images/icon-hamburger.svg"
    );

    setLogoImage(() =>
      isOpen
        ? "./images/logo-bookmark.svg"
        : "./images/logo-bookmark-white-header.png"
    );
  }

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <img src={logoImage} alt="" />
          <img src={imageUrl} alt="" onClick={handleOpenNav} />
          <div
            className={`${isOpen ? styles.mobileUlOpen : ""} ${
              styles.headerMobileUl
            }`}
          >
            <div>features</div>
            <div>pricing</div>
            <div>contact</div>
            <Button>LOGIN</Button>
            <div className={styles.headerMobileSocials}>
              <img src="./images/icon-facebook.svg" alt="" />
              <img src="./images/icon-twitter.svg" alt="" />
            </div>
          </div>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <img src="./images/logo-bookmark.svg" alt="" />
          <div className={styles.headerDesktopEnd}>
            <ul>
              <li>features</li>
              <li>pricing</li>
              <li>contact</li>
            </ul>
            <Button>LOGIN</Button>
          </div>
        </header>
      )}
    </>
  );
}

export default Navigation;
