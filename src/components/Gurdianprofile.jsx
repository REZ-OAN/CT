const Gurdianprofile = () => {
  return (
    <div className={styles.gurdian_container}>
        <div className={styles.gurdian_profile}>
            <div className={styles.gurdian_head}>
                <img src=""/>
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
                {/* card will design later */}
            </form>
            <div className={styles.added_posts}>
                
            </div>
        </div>
    </div>
  );
};

export default Gurdianprofile;