import { NavLink } from 'react-router-dom';
import styles from '../css/signin.module.css';
const Signin = () => {
  return (
    <div className={styles.signin_container}>
       <form className={styles.signin_body}>
             <h1>SIGN IN</h1>
             <p>Select Your Role : </p>
             <div className={styles.role}>
             <div><input type="radio" value="tutor" name="role" /> <span>Tutor</span></div> 
             <div><input type="radio" value="gs" name="role" /> <span>Gurdian/Student</span></div>
            </div>
            <input type="text" className={styles.sign_inp} autoComplete="off" placeholder="enter your email"/>
            <input type="password" className={styles.sign_inp} autoComplete="off" placeholder="enter your password"/>
            <span className={styles.forget_pass}><NavLink to="/">Forget Password?</NavLink></span>
            <button type="submit" onClick="">SIGN IN</button>
            
            <span className={styles.signup_nav}>Haven't You Join Us? <NavLink to="/Signup"><span>Sign Up</span> Here</NavLink></span>
        </form>
    </div>
  );
};

export default Signin;