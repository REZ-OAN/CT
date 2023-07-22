import styles from "../css/tuitionreq.module.css";
const Tuitionreq = () => {
  return (
        <div className={styles.tuition_req}>
               <span>subjectnames</span>
               <span>payment</span>
               <span>weeklyday</span>
              
               <button type="button" className={styles.greeN}>Accept</button>
               <button type="button" className={styles.reD}>Reject</button>
                
        </div>
  );
};
export default Tuitionreq;