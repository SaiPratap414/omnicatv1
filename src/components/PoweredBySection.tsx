import { FunctionComponent } from "react";
import styles from "./PoweredBySection.module.css";

const PoweredBySection: FunctionComponent = () => {
  return (
    <div className={styles.header14Wrapper}>
      <div className={styles.header14}>
        <div className={styles.placeholderLightbox}>
          {/* Replace the img tag with a video tag */}
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src="/24k.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.playButton} />
          <div className={styles.linkParent}>
            <div className={styles.link}>Powered by</div>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.omniWrapper}>
              <img className={styles.omniIcon} alt="" src="/omni.svg" />
            </div>
            <div className={styles.linkWrapper}>
              <div className={styles.link1}>
                The First ever Multichain Memecoin
              </div>
            </div>
          </div>
          <div className={styles.navbar2}>
            <div className={styles.container}>
              <div className={styles.column}>
                <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
              </div>
              <div className={styles.column1}>
                <div className={styles.link2}>Mission</div>
                <div className={styles.link2}>Terminal</div>
                <div className={styles.link2}>Ecosystem</div>
                <div className={styles.link2}>Statistics</div>
              </div>
              <div className={styles.column2}>
                <div className={styles.vectorParent}>
                  <img className={styles.vectorIcon} alt="" src="/vector.png" />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/subtract.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoweredBySection;
