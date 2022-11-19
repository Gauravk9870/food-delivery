import { MdArrowForwardIos } from "react-icons/md";
import styles from "../styles/OrderBtn.module.scss"

const OrderBtn = () => {
  return (
    <div className={styles.orderBtn}>
      <button>
        Order Now <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default OrderBtn;
