import React, { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <section className={styles.header14}>
      <div className={styles.placeholderLightbox}>
        {/* Video Container */}
        <video autoPlay muted loop id="backgroundVideo" className={styles.video}>
          <source src="/24k.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Other Content */}
        <div className={styles.playButton} />
        <div className={styles.frameParent}>
          <button className={styles.omniWrapper}>
            <img className={styles.omniIcon} alt="" src="/omni.svg" />
          </button>
          <div className={styles.link}>The First ever Multichain Memecoin</div>
        </div>
        <div className={styles.linkParent}>
          <div className={styles.link1}>Powered by</div>
          <img
            className={styles.image2Icon}
            loading="eager"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
