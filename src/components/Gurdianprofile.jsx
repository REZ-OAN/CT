import styles from '../css/gurdianprofile.module.css';
import Gurdianpost from './Gurdianpost';
const Gurdianprofile = () => {
  return (
    <div className={styles.gurdian_container}>
        <div className={styles.gurdian_profile}>
            <div className={styles.gurdian_head}>
                <img src="public/images/img.jpg"/>
                <button type="button">+</button>
            </div>
            <div className={styles.gurdian_body}>
                <input type="text" value={'dynamicname'}/>
                <input type="email" value={'dynamicemail'}/>
                <input type="text" value={'dynamicphoneno'}/>
                <input type="text" value={'dynamicaddress'}/>
                <div className={styles.gurdian_control}>
                    <button type="button">Save</button>
                    <button type="button">Edit</button>
                </div>
            </div>
        </div>
        <div className={styles.gurdian_post}>
            <h1>Add Post</h1>
            <form className={styles.post_info}>
                <div className={styles.tuition_title}>
                <label>Post Title</label>
                <input type="text" placeholder="title for seeking tutor"/>
                </div>
                <div className={styles.tuition_type}>
                <label>Tuition Type</label>
                <select id="tuiton_type">
                    <option value="H" selected>Home</option>
                    <option value="O" >Online</option>
                    <option value="G" >Group</option>
                </select>
                </div>
                <div className={styles.tuition_class}>
                    <label>Class</label>
                    <input type="text" placeholder='enter class like 9,10,hsc'/>
                </div>
                <div className={styles.tuition_location}>
                    <label>Location</label>
                    <input type="text" placeholder='enter location'/>
                </div>
                <div className={styles.tuition_subjects}>
                    <label>Subjects</label>
                <div>
                    <div><input type="checkbox"/><p>Eight</p></div>
                    <div><input type="checkbox"/><p>SSC</p></div>
                    <div><input type="checkbox"/><p>HSC</p></div>
                    <div><input type="checkbox"/><p>Admission</p></div>
                    <div><input type="checkbox"/><p>Skill Development</p></div>
                </div> 
                    
                </div>
                <div className={styles.tuition_salary}>
                    <label>Salary</label>
                    <input type="text" placeholder='enter the salary you wanna pay'/>
                </div>
                <div className={styles.post_control}>
                <button type="submit">Post</button>
                <button type="reset">Reset</button>
                </div>
            </form>
            <div className={styles.added_posts}>
                <h1>Previous Posts</h1>
                <div className={styles.previous_posts}>
                    <Gurdianpost/>
                    <Gurdianpost/>
                    <Gurdianpost/>
                    <Gurdianpost/>
                    <Gurdianpost/>
                    <Gurdianpost/>
                    <Gurdianpost/>
                    <Gurdianpost/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Gurdianprofile;