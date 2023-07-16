import { NavLink } from 'react-router-dom';
import styles from '../css/home.module.css';
import Carouselitem from './Carouselitem';
import { useRef } from 'react';

const Home = () => {
            const slider = useRef(null);
            const next = ()=>{
              let slider_width = slider.current.clientWidth;
              slider.current.scrollLeft = slider.current.scrollLeft+slider_width;
          
            }
            const prev = ()=>{
              let slider_width = slider.current.clientWidth;
              slider.current.scrollLeft = slider.current.scrollLeft-slider_width;
            }
  const url = "../../images/img.jpg";
  return (
    <div className={styles.home_container}>
      <div className={styles.hero}>
           <div className={styles.hero_text}>
                <p>
                  Connecting Knowledge Seekers with Expert Mentors!..
                  <br/>
                  <span>Transforming Lives through Quality Education</span>
                </p>
                <button type="button" ><NavLink to="/signup">JOIN NOW</NavLink></button>
           </div>
           <div className={styles.hero_img}>
              <img src = "../../images/hero.svg"/>
           </div>
      </div>
      <div className={styles.home_recommend} >
            <div className={styles.recommend_heading} >
                <h1>We Recommend You</h1>
            </div>
            <div className={styles.recommend_carousel}>
                <div className={styles.left_btn}>
                   <button type="button" onClick={prev}><img src="../../images/left-arrow.png"/></button> 
                </div>
                <div className={styles.right_btn}>
                    <button type="button" onClick={next}><img src="../../images/right-arrow.png"/></button> 
                </div>
                <div className={styles.carousel_body} ref={slider} >
                        <Carouselitem url={url} name={1}/>
                        <Carouselitem url={url} name={2}/>
                        <Carouselitem url={url} name={3}/>
                        <Carouselitem url={url} name={4}/>
                        <Carouselitem url={url} name={5}/>
                        <Carouselitem url={url} name={6}/>
                        <Carouselitem url={url} name={7}/>
                        <Carouselitem url={url} name={8}/>
                        
                </div>
             </div>
         </div>
    </div>
  );
};

export default Home;