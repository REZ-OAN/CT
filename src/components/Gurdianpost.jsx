import styles from '../css/gurdianpost.module.css';
const Gurdianpost = () => {
  return (
    <div className={styles.post}>
    <div className={styles.post_locid}>
        <div className={styles.post_loc}>
            <p><img src="images/location.png"/> <span>Location Here</span></p>
        </div>
        <div className={styles.post_id}>
            <p>Job Id : &nbsp; 6digits</p>
        </div>
    </div>
    <div className={styles.post_title}>
        <p>Title Goes Here</p>
    </div>
    <div className={styles.post_typetime}>
        <p className={styles.post_type}><img src="images/hometutor.png"/> <span>Home</span></p>
        <p className={styles.post_time}><img src="images/postago.png"/><span>8 hours ago</span></p>
    </div>
    <div className={styles.post_details}>
        <p><span>Category : </span><span>English Medium</span></p>
        <p><span>className : </span><span>10</span></p>
        <p><span>Subjects : </span><span>All</span></p> 
    </div>
    <div className={styles.post_hire}>
        <p><img src="images/salary.png"/>Salary : &nbsp; 10K</p>
        <button type="button" ><img src="images/hire.png"/>View Details</button>
    </div>
</div>   
  );
};

export default Gurdianpost;