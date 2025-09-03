import React, { useState } from "react";
import styles from "./carousel.module.scss";

const Carousel = ({ items, visibleCount = 3 }) => {
  const [current, setCurrent] = useState(0);
  const maxIndex = items.length - visibleCount;

  const next = () => {
    if (current < maxIndex) {
        setCurrent((prev) => prev + 3);
      }
  };
  const prev = () => {
    if (current > 0) {
        setCurrent((prev) => prev - 3);
      }
  };

  return (
    <div className={styles.carousel}>
      <button className={`${styles.nav} ${styles.prev}`} onClick={prev} disabled={current === 0}>
        ‹
      </button>
      <div className={styles.carousel_track}>
        <div
          className={styles.carousel_inner}
          style={{ transform: `translateX(-${(current * 100) / visibleCount}%)` }}
        >
          {items.map((item, index) => (
            <div
              className={styles.carousel_item}
              key={index}
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.nav} ${styles.next}`} onClick={next} disabled={current === maxIndex} >
        ›
      </button>

    </div>
  );
};

export default Carousel