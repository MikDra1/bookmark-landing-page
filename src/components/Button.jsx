/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button({children, special}) {
    return (
        <button className={`${styles.btn} ${special ? styles.special : ''}`}>
            {children}
        </button>
    )
}

export default Button
