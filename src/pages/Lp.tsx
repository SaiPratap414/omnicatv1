import { FunctionComponent } from "react";
import PoweredBySection from "../components/PoweredBySection";
import TokenStatisticsContainer from "../components/TokenStatisticsContainer";
import CardContainer from "../components/CardContainer";
import CardForm from "../components/CardForm";
import MultichainMemecoinCard from "../components/MultichainMemecoinCard";
import styles from "./Lp.module.css";

const Lp: FunctionComponent = () => {
  return (
    <div className={styles.lp}>
      <PoweredBySection />
      <TokenStatisticsContainer />
      <div className={styles.lpChild} />
      <CardContainer />
      <div className={styles.lpChild} />
      <CardForm />
      <MultichainMemecoinCard />
    </div>
  );
};

export default Lp;
