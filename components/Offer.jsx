import styles from "../styles/Offer.module.scss";

const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>
            Best <span style={{ color: "#dd6512" }}>Offer</span> for you
          </span>
        </div>
        <div className={styles.products}>

          <div className={styles.item}>
            <div className={styles.product}>
              <img src="/images/offer1.png" alt="" />
            </div>
          </div>

          <div className={styles.item2}>

            <div className={styles.product}>
              <img src="/images/offer2.png" alt="" />
              
            </div>

            <div className={styles.product}>
            <img src="/images/offer3.png" alt="" />
            

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Offer;
