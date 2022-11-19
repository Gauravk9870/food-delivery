import styles from "../styles/Category.module.scss";
import { MdArrowForwardIos } from "react-icons/md";


const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.title}>
            Our <span style={{ color: "#b51a18" }}>Best delivered</span>
            <br /> Products
          </span>
          <span className={styles.subTitle}>
            It's not just about cooking good food
            <br /> for you, we cook the taste of India
          </span>
        </div>

        <div className={styles.products}>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src="/images/masala-chicken.png" alt="" />
            </div>
            <div className={styles.productTitle}>Masala Chicken</div>
            <div className={styles.order}>
              <button>order now <MdArrowForwardIos/></button>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src="/images/beverages.png" alt="" />
            </div>
            <div className={styles.productTitle}>Soft Beverages</div>
            <div className={styles.order}>
              <button>order now <MdArrowForwardIos/></button>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src="/images/kadhai-paneer.png" alt="" />
            </div>
            <div className={styles.productTitle}>Kadhai Panner</div>
            <div className={styles.order}>
              <button>order now <MdArrowForwardIos/></button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, laudantium.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
