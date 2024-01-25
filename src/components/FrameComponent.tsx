import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

type FrameComponentType = {
  heading?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({ heading }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.headingWrapper}>
            <h1 className={styles.heading}>{heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
