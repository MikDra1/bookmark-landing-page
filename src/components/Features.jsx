import { useState } from 'react'
import styles from './Features.module.css'
import Feature from './Feature'

function Features() {
    const [feature, setFeature] = useState(1)

    return (
        <div className={styles.features}>
            <div className={styles.featuresDesc}>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>

<div className={styles.featuresTabs}>
            <h3 className={feature === 1 ? styles.activeTab : ''} onClick={() => {setFeature(1)
            }}>Simple Bookmarking</h3>
            <h3 className={feature === 2 ? styles.activeTab : ''} onClick={() => setFeature(2)}>Speedy Searching</h3>
            <h3 className={feature === 3 ? styles.activeTab : ''} onClick={() => setFeature(3)}>Easy Sharing</h3>
            </div>

            {feature === 1 && <Feature image='./images/illustration-features-tab-1.svg' title='Bookmark in one click' >Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</Feature>}
            {feature === 2 && <Feature image='./images/illustration-features-tab-2.svg' title='Intelligent search' >Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</Feature>}
            {feature === 3 && <Feature image='./images/illustration-features-tab-3.svg' title='Share your bookmarks' >Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</Feature>}


        </div>
    )
}

export default Features
