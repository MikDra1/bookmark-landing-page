import Cta from "./components/Cta";
import Extensions from "./components/Extensions";
import Faq from "./components/Faqs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { BookmarkProvider } from "./contexts/BookmarkProvider";

function App() {
  return (
    <div>
            <BookmarkProvider>
              <Navigation />
              <Hero />
              <Features />
              <Extensions />
              <Faq />
              <Cta />
              <Footer />
          </BookmarkProvider>
    </div>
  )
}

export default App


// Features Pricing Contact Login    What is Bookmark?  How can I request a new browser?  Is there a mobile app?  What about other Chromium browsers? More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact 