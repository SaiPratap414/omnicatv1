import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

type FrameComponent1Type = {
  heading?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  heading,
  heading1,
  heading2,
  heading3,
  propMinWidth,
  propMinWidth1,
}) => {
  const headingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const heading1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.cardParent}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <div className={styles.contentTop1}>
                <div className={styles.content1}>
                  <div className={styles.heading}>{heading}</div>
                </div>
              </div>
              <div className={styles.link}>0.995%</div>
            </div>
            <div className={styles.layoutFrame}>
              <b className={styles.heading1} style={headingStyle}>
                {heading1}
              </b>
              <div className={styles.sushiSwapLogo}>
                <div className={styles.link1}>$omni</div>
                <img
                  className={styles.linkVectorIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.content2}>
            <div className={styles.imageFrame}>
              <div className={styles.contentTop2}>
                <div className={styles.content3}>
                  <div className={styles.heading2}>{heading2}</div>
                </div>
              </div>
              <div className={styles.link2}>0.995%</div>
            </div>
            <div className={styles.socialLinksFrame}>
              <b className={styles.heading3} style={heading1Style}>
                {heading3}
              </b>
              <div className={styles.linkParent}>
                <div className={styles.link3}>$omni</div>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
