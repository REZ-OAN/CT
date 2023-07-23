import styles from "../css/postfiltering.module.css";
import Gurdianpost from "./Gurdianpost";
const Postfiltering = () => {

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_section}>
    <div className={styles.filter_options}>
        <div className={styles.filter_heading}>
            <h1>Filter Options</h1>
        </div>
        <div className={styles.tuition_type}>
            <div className={styles.heading_type}><h1>Tution Type</h1></div>
            <div className={styles.options_type}>
                <div><input type="radio" name="type" value="all"/> <span >All</span></div>
                <div><input type="radio" name="type" value="home"/> <span >Home Tuition</span></div>
                <div><input type="radio" name="type" value="online"/> <span >Online Tuition</span></div>
                <div><input type="radio" name="type" value="batch"/> <span >Batch Tuition</span></div>
            </div>
        </div>
        <div className={styles.gender_preference}>
            <div className={styles.heading_type}><h1>Tution Preference</h1></div>
            <div className={styles.options_type}>
                <div><input type="radio" name="gender" value="all"/> <span >All</span></div>
                <div><input type="radio" name="gender" value="male"/><span >Male</span></div>
                <div><input type="radio" name="gender" value="female"/><span >Female</span></div>
            </div>
        </div>
        <div className={styles.location_preference}>
            <div className={styles.heading_type}><h1>Search By Location</h1></div>
            <div className={styles.search_option}>
                <select name="location">
                    <option value="all" selected>All</option>
                    <option value="ranguniya">Ranguniya</option>
                    <option value="shantirhat">Shantir Hat</option>
                    <option value="tapbiddut">Tapbiddut</option>
                    <option value="cuet dormitory">Cuet Dormitory</option>
                    <option value="pahartoli">Pahartoli</option>
                    <option value="gourishankar">Gourishankar</option>
                    <option value="goshci">Goshci</option>
                    <option value="noapara">Noapara</option>
                    <option value="khuaish">Khuaish</option>
                    <option value="rastarmatha">Rastar Matha</option>
                    <option value="chandgaon">Chandgaon</option>
                    <option value="bohoddarhat">Bohoddar Hat</option>
                    <option value="shulukbohor">Shulokbohor</option>
                    <option value="muradpu">Muradpur</option>
                    <option value="sholosohor">Sholo Shohor</option>
                    <option value="2nogate">2no Gate</option>
                    <option value="oxygen">Oxygen</option>
                    <option value="Gec">Gec</option>
                    <option value="khulshi">Khulshi</option>
                    <option value="dampara">Dampara</option>
                    <option value="tigerpass">Tiger Pass</option>
                    <option value="dewyanhat">Dewyan Hat</option>
                    <option value="eidgah">Eid Gah</option>
                    <option value="halishohor">Halishohor</option>
                    <option value="agrabad">Agrabad</option>
                    <option value="madarbari">Madarbari</option>
                    <option value="newmarket">New Market</option>
                    <option value="andorkilla">Andorkillah</option>
                    <option value="didarmarket">Didar Market</option>
                    <option value="chawkhbazar">Chawkhbazar</option>
                </select>
            </div>
        </div>
        <div className={styles.payment_preference}>
            <div className={styles.heading_type}>
                <h1>Search By Salary Range</h1>
            </div>
            <div className={styles.search_option}>

                <select name="salary">
                    <option value="all" selected>All</option>
                    <option value="510">5k-10k</option>
                    <option value="1015">10k-15k</option>
                    <option value="1520">15k-20k</option>
                    <option value="20k-25k">20k-25k</option>
                </select>
            </div>
        </div>
        <div className={styles.medium_preference}>
            <div className={styles.heading_type}>
                <h1>Search By Academic Type</h1>
            </div>
            <div className={styles.search_option}>
                <select name="medium">
                    <option value="all" selected>All</option>
                    <option value="banglam">Bangla Medium</option>
                    <option value="englishv">English Version</option>
                    <option value="englishm">English Medium</option>
                    <option value="religious">Religious Studies</option>
                    <option value="admission">Admission Test</option>
                    <option value="skills">Professional skill Development</option>
                    <option value="arts">Arts</option>
                    <option value="specialskills">Special Skill Development</option>
                    <option value="university">Univarsity Program</option>
                    <option value="lang">Language Learning</option>
                    <option value="examprep">Test Preparation</option>
                    <option value="madrasa">Madrasa</option>
                    <option value="Special">Special Child Education</option>
                </select>
            </div>
        </div>
    </div>
    <div className={styles.filtered_posts}>
        <div className={styles.noofposts}>
            <div className={styles.showposts}>
                <p>Shows 140 post out of 1400 </p>
            </div>
        </div>

        <div className={styles.posts}>
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
<div className={styles.page_buttons}>
    
        <button type="button">PREV</button>
        <button type="button">NEXT</button>
  
</div>
    </div>
  );
};

export default Postfiltering;