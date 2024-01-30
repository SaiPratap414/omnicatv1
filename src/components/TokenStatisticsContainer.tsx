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
                  <span className={styles.omnicatToken}>OmniCat Token</span>
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
        <div className={styles.frameGroup}>
          <SectionCard
            statisticLabel="Holders"
            dataValue="22,009"
            statisticLabel2="Total 24hr Volume"
            financialValue="$1.7M"
            propBackground="linear-gradient(90.2deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), linear-gradient(9.47deg, rgba(70, 56, 232, 0.2) 49.5%, rgba(255, 255, 255, 0)), #000"
            propBackground1="linear-gradient(9.47deg, rgba(70, 56, 232, 0.2) 49.5%, rgba(255, 255, 255, 0)), linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), linear-gradient(90.2deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), #000"
          />
          <SectionCard
            statisticLabel="$OMNI Burned (24hr)"
            dataValue="648.41M"
            statisticLabel2="Liquidity"
            financialValue="$2.17M"
            propBackground="linear-gradient(9.47deg, rgba(70, 56, 232, 0.2) 49.5%, rgba(255, 255, 255, 0)), linear-gradient(90.2deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), #000"
            propBackground1="linear-gradient(9.47deg, rgba(70, 56, 232, 0.2) 49.5%, rgba(255, 255, 255, 0)), linear-gradient(90.2deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)), #000"
          />
        </div>
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
