import styles from "../styles/Chef.module.scss"

const Chef = () => {
  return (
    <div className={styles.ourChef}>
        <div className={styles.title}>
            <span>Meet Our <span style={{color:"#503e9d"}}>Chef</span></span>
        </div>
        <div className={styles.chefImg}>
            <img src="/images/chef.png" alt="" />
        </div>
    </div>
  )
}

export default Chef