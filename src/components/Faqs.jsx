import { useState } from "react";
import Faq from "./Faq";
import styles from "./Faqs.module.css";
import Button from "./Button";

function Faqs() {
  const [isOpen, setIsOpen] = useState(null);

  function handleChangeFaq(id) {
    if (id === isOpen) {
      setIsOpen(null);
      return;
    }
    setIsOpen(id);
  }

  return (
    <div className={styles.faqs}>
      <div className={styles.faqDesc}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>

      <div className={styles.faqsContent}>
      <Faq
        title="What is Bookmark?"
        isOpen={isOpen}
        id={1}
        handleChangeFaq={handleChangeFaq}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare
        mattis.
      </Faq>

      <Faq
        title="How can I request a new browser?"
        isOpen={isOpen}
        id={2}
        handleChangeFaq={handleChangeFaq}
      >
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
        ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
        convallis ultricies. Mauris augue massa, ultricies non ligula.
        Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
      </Faq>

      <Faq
        title="Is there a mobile app?"
        isOpen={isOpen}
        id={3}
        handleChangeFaq={handleChangeFaq}
      >
        Sed consectetur quam id neque fermentum accumsan. Praesent luctus
        vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
        quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et
        ultricies bibendum.
      </Faq>

      <Faq
        title="What about other Chromium browsers?"
        isOpen={isOpen}
        id={4}
        handleChangeFaq={handleChangeFaq}
      >
        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi,
        at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non
        ut velit.{" "}
      </Faq></div>

      <Button>More Info</Button>
    </div>
  );
}

export default Faqs;
