import { useState } from 'react';
import styles from '../css/signup.module.css';
import { NavLink } from 'react-router-dom';
const Signup = () => {
  const [isshow,setIsshow] = useState(false);
  return (
    <div className={styles.signup_container}>
      <h1>SIGN UP</h1>
        <form className={styles.signup_body}> 
              <div className={styles.signup_info}>
                    <div className={styles.signup_left}>
                        <input type="text" className={styles.signup_inp} placeholder="enter your full name"/>
                        <input type="email" className={styles.signup_inp} placeholder="enter your email"/>
                        <input type="text" className={styles.signup_inp}  placeholder="enter your address"/>
                        <input type="text"  className={styles.signup_inp} placeholder="enter your phone number"/>
                    </div>
                    <div className={styles.signup_right}>
                      <div>
                        <p>Select Your Profile Picture : </p>
                        <input className={styles.signup_inp} type="file" />
                      </div>
                      <p>Select Your Role : </p>
                    <div className={styles.labels_design}>
                          <div><input type="radio" value="tutor" onClick={()=>{setIsshow(true);}} name="role" /> <span>Tutor</span></div> 
                          <div><input type="radio" value="gs" onClick={()=>{setIsshow(false);}} name="role" /> <span>Gurdian/Student</span></div>
                    </div>
                      {isshow && (<div>
                        <p>Select Your Student Id Card Image (both sides): </p>
                        <input className={styles.signup_inp} type="file" />
                        <input className={styles.signup_inp} type="file"/>
                      </div>)}
                    </div>
              </div>
              <button type="submit" >SIGN UP</button>
              <p>Already Join Us? <span><NavLink to="/signin">Sign In</NavLink></span> Here</p>
        </form>
    </div>
  );
};

export default Signup;