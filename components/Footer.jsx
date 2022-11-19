import styles from "../styles/Footer.module.scss";
import {MdArrowForwardIos} from "react-icons/md"
import Navbar from "./Navbar";
import OrderBtn from "./OrderBtn";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.upper}>
          <div className={styles.text}>
            <span>
              Enjoy <span>2000+</span> foods at
            </span>
            <span>
              <span style={{color:"#ffde59"}}>Your</span> doorstep</span>
          </div>
          <OrderBtn/>
        </div>

        <div className={styles.lower}>
            <Navbar showInFooter={true}/>
        </div>
       
      </div>
    </div>
  )
}

export default Footer