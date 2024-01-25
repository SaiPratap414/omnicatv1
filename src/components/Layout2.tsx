import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./Layout2.module.css";

const Layout2: FunctionComponent = () => {
  return (
    <section className={styles.layout372}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.headingParent}>
                <h1 className={styles.heading}>OmniCat Token Statistics</h1>
                <div className={styles.link}>
                  Note: Statistics below exclude Solana and Canto Chains, Coming
                  Soon.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent1
            heading="Holders"
            heading1="22,009"
            heading2="Total 24hr Volume"
            heading3="$1.7M"
            propMinWidth="112px"
            propMinWidth1="92px"
          />
          <FrameComponent1
            heading="$OMNI Burned (24hr)"
            heading1="648.41M"
            heading2="Liquidity"
            heading3="$2.17M"
            propMinWidth="131px"
            propMinWidth1="112px"
          />
        </div>
      </div>
      <button className={styles.headingGroup}>
        <div className={styles.heading1}>Explore Stats</div>
        <img
          className={styles.fluentarrowCircleRight16FIcon}
          alt=""
          src="/fluentarrowcircleright16filled.svg"
        />
      </button>
    </section>
  );
};

export default Layout2;
