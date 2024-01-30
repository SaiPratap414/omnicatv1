import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionCard.module.css";

type SectionCardType = {
  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const SectionCard: FunctionComponent<SectionCardType> = ({
  frameDivWidth,
  frameDivAlignSelf,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivAlignSelf]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.frameWrapper}>
        <div className={styles.cardParent}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.contentTopParent}>
                <div className={styles.contentTop}>
                  <div className={styles.content1}>
                    <div className={styles.heading}>Holders</div>
                  </div>
                </div>
                <div className={styles.link}>0.995%</div>
              </div>
              <div className={styles.headingParent}>
                <b className={styles.heading1}>22,009</b>
                <div className={styles.linkParent}>
                  <div className={styles.link1}>$omni</div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.content}>
              <div className={styles.contentTopParent}>
                <div className={styles.contentTop}>
                  <div className={styles.content1}>
                    <div className={styles.heading}>Total 24hr Volume</div>
                  </div>
                </div>
                <div className={styles.link}>0.995%</div>
              </div>
              <div className={styles.headingParent}>
                <b className={styles.heading1}>$1.7M</b>
                <div className={styles.linkParent}>
                  <div className={styles.link1}>$omni</div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.cardParent}>
          <div className={styles.card2}>
            <div className={styles.content}>
              <div className={styles.contentTopParent}>
                <div className={styles.contentTop}>
                  <div className={styles.content1}>
                    <div className={styles.heading}>$OMNI Burned (24hr)</div>
                  </div>
                </div>
                <div className={styles.link}>0.995%</div>
              </div>
              <div className={styles.headingParent}>
                <b className={styles.heading1}>648.41M</b>
                <div className={styles.linkParent}>
                  <div className={styles.link1}>$omni</div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.content}>
              <div className={styles.contentTopParent}>
                <div className={styles.contentTop}>
                  <div className={styles.content1}>
                    <div className={styles.heading}>Liquidity</div>
                  </div>
                </div>
                <div className={styles.link}>0.995%</div>
              </div>
              <div className={styles.headingParent}>
                <b className={styles.heading1}>$2.17M</b>
                <div className={styles.linkParent}>
                  <div className={styles.link1}>$omni</div>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
