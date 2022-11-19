import styles from "../styles/Featured.module.scss";
import OrderBtn from "./OrderBtn";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.left}>

        <div className={styles.redBG}>
          <div className={styles.leaf}>
            <img src="/images/leaf.png" alt="" />
          </div>
          <div className={styles.beans}>
            <img src="/images/bean.png" alt="beans" />
          </div>
          <div className={styles.beans2}>
            <img src="/images/bean.png" alt="beans" />
          </div>
        </div>

        <div className={styles.container}>
          <span className={styles.title}>pizza</span>
          <span className={styles.subTitle}>Hungry? order now !</span>
          <OrderBtn />
        </div>

      </div>
      <div className={styles.right}>
        <div className={styles.featuredIMG}>
          <img src="/images/FeaturedIMG.png" alt="FEATURED_IMG" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
