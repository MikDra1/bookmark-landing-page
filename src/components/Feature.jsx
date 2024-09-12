/* eslint-disable react/prop-types */
import Button from './Button'
import styles from './Feature.module.css'

function Feature({image, title, children}) {
    return (
        <div className={styles.feature}>
            <div className={styles.featureImg}>
                <img src={image} alt="" loading='eager' />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
                <Button>More Info</Button></div>
        </div>
    )
}

export default Feature
