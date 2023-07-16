import styles from '../css/carouselitem.module.css'
const Carouselitem = (props) => {
    
  return (
    <div className={styles.carousel_item}>
                        <div className={styles.item_head}>
                            <img src={props.url}/>
                        </div>
                        <div className={styles.item_body}>
                            <div className={styles.item_name}>
                                <h1>Default Name {props.name}</h1>
                            </div>
                            <div className={styles.item_prop}>
                                <p>Default Prop</p>
                            </div>
                            <div className={styles.item_details}>
                                <input type="button" value="Hire" className={styles.item_btn}/>
                                <input type="button" value="Profile" className={styles.item_btn}/>
                            </div>
                        </div>
                    </div>
  );
};

export default Carouselitem;