import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer1.module.css";

type CardContainer1Type = {
  statisticLabel?: string;
  dataValue?: string;
  statisticLabel2?: string;
  financialValue?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackground1?: CSSProperties["background"];
};

const CardContainer1: FunctionComponent<CardContainer1Type> = ({
  statisticLabel,
  dataValue,
  statisticLabel2,
  financialValue,
  propBackground,
  propBackground1,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const card1Style: CSSProperties = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.cardParent}>
        <div className={styles.card} style={cardStyle}>
          <div className={styles.content}>
            <div className={styles.contentTopParent}>
              <div className={styles.contentTop}>
                <div className={styles.content1}>
                  <div className={styles.heading}>{statisticLabel}</div>
                </div>
              </div>
              <div className={styles.link}>0.995%</div>
            </div>
            <div className={styles.headingParent}>
              <b className={styles.heading1}>{dataValue}</b>
              <div className={styles.linkParent}>
                <div className={styles.link1}>$omni</div>
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card1} style={card1Style}>
          <div className={styles.content}>
            <div className={styles.contentTopParent}>
              <div className={styles.contentTop}>
                <div className={styles.content1}>
                  <div className={styles.heading}>{statisticLabel2}</div>
                </div>
              </div>
              <div className={styles.link}>0.995%</div>
            </div>
            <div className={styles.headingParent}>
              <b className={styles.heading1}>{financialValue}</b>
              <div className={styles.linkParent}>
                <div className={styles.link1}>$omni</div>
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
