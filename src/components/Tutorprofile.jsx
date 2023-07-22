import Tuitionreq from "./Tuitionreq";
import styles from "../css/tutorprofile.module.css";
const Tutorprofile = () => {
  return (
    <div className={styles.tutor_container}>
        <div className={styles.tutor_profile}>
            <div className={styles.tutor_head}>
                <img src="public/images/img.jpg"/>
                <button type="button">+</button>
            </div>
            <div className={styles.tutor_body}>
                <input type="text" value={'dynamicname'}/>
                <input type="email" value={'dynamicemail'}/>
                <input type="text" value={'dynamicphoneno'}/>
                <input type="text" value={'dynamicaddress'}/>
                <div className={styles.tutor_control}>
                    <button type="button">Save</button>
                    <button type="button">Edit</button>
                </div>
            </div>
        </div>
        <div className={styles.tuition_requests}>
            <h1>Requests For Tuition</h1>
            <div className={styles.tuition_request}>
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />
                <Tuitionreq />

            </div>
        </div>
    </div>
  );
};

export default Tutorprofile;