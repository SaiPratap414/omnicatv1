import { FunctionComponent } from "react";
import SectionCard from "./SectionCard";
import styles from "./TokenStatisticsContainer.module.css";

const TokenStatisticsContainer: FunctionComponent = () => {
  return (
    <div className={styles.layout372}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.headingParent}>
                <div className={styles.heading}>
                  <span className={styles.omnicatToken}>$OmniCat Token</span>
                  <span className={styles.statistics}> Statistics</span>
                </div>
                <div className={styles.link}>
                  Note: Statistics below exclude Solana and Canto Chains, Coming
                  Soon.
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionCard frameDivWidth="unset" frameDivAlignSelf="stretch" />
      </div>
      <div className={styles.headingGroup}>
        <div className={styles.heading1}>Explore Stats</div>
        <img
          className={styles.fluentarrowCircleRight16FIcon}
          alt=""
          src="/fluentarrowcircleright16filled.svg"
        />
      </div>
    </div>
  );
};

export default TokenStatisticsContainer;
