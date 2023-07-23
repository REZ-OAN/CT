import styles from "../css/tutorfiltering.module.css";
import Carouselitem from './Carouselitem';
const Tutorfiltering = () => {
  const url= "images/img.jpg";
  return (
    <div className={styles.filter_container}>
      <h1 className={styles.heading}>Hire Your Tutor</h1>
      <div className={styles.tutors}>
                        <Carouselitem url={url} name={1}/>
                        <Carouselitem url={url} name={2}/>
                        <Carouselitem url={url} name={3}/>
                        <Carouselitem url={url} name={4}/>
                        <Carouselitem url={url} name={5}/>
                        <Carouselitem url={url} name={6}/>
                        <Carouselitem url={url} name={7}/>
                        <Carouselitem url={url} name={8}/>
                        <Carouselitem url={url} name={9}/>
                        <Carouselitem url={url} name={10}/>
                        <Carouselitem url={url} name={11}/>
                        <Carouselitem url={url} name={12}/>
                        <Carouselitem url={url} name={13}/>
                        <Carouselitem url={url} name={14}/>
                        <Carouselitem url={url} name={15}/> 
                        <Carouselitem url={url} name={16}/>
                        <Carouselitem url={url} name={17}/>
                        <Carouselitem url={url} name={18}/>
                        <Carouselitem url={url} name={19}/>
                        <Carouselitem url={url} name={20}/>
                        <Carouselitem url={url} name={21}/>
                        <Carouselitem url={url} name={22}/>
                        <Carouselitem url={url} name={23}/>
                        <Carouselitem url={url} name={24}/>
                        <Carouselitem url={url} name={25}/>
                        <Carouselitem url={url} name={26}/>
                        <Carouselitem url={url} name={27}/>
                        <Carouselitem url={url} name={28}/>
                        <Carouselitem url={url} name={29}/>
                        <Carouselitem url={url} name={30}/>
                        <Carouselitem url={url} name={31}/>
                        <Carouselitem url={url} name={32}/>

      </div>
    </div>
  );
};

export default Tutorfiltering;