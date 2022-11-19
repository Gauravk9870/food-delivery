import styles from "../styles/Product.module.scss";
import Image from "next/image";
import AddBtn from "./AddBtn";
import { BiFoodTag } from "react-icons/bi";

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <div
        className={styles.notVeg}
        style={product.veg ? { color: "green" } : { color: "red" }}
      >
        <BiFoodTag />
      </div>
      <div className={styles.img}>
        <Image
          src={product.image}
          fill
          alt={product.title}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.title}>
            <span>{product.title}</span>
          </div>
          <div className={styles.price}>
            <span>₹{product.price}</span>
          </div>
        </div>
        <div className={styles.action}>
          <AddBtn />
        </div>
      </div>
    </div>
  );
};

export default Product;
