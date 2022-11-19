import styles from "../styles/Menu.module.scss";
import Products from "../components/Products";
import { useState } from "react";
import Offer from "../components/Offer";
import axios from 'axios'


const Menu = ({productList}) => {

  const [title, setTitle] = useState("all");

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.left}>
        
            <span onClick={()=>setTitle("all")}>
              All
            </span>
            <span onClick={()=>setTitle("best-deals")}>
              Best Deals
            </span>
            <span onClick={()=>setTitle("veg")}>
              Veg
            </span>
            <span onClick={()=>setTitle("non-veg")}>
              Non Veg
            </span>
            <span onClick={()=>setTitle("pizza")}>
              Pizza
            </span>
            <span onClick={()=>setTitle("burgers")}>
              Burgers
            </span>
            <span onClick={()=>setTitle("beverages")}>
              Beverages
            </span>

        </div>
        <div className={styles.right}>
          <Products title={title} productList={productList}/>
        </div>
      </div>
      <Offer/>
    </div>
  );
};

export default Menu;


export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products")
  return {
    props:{
      productList : res.data
    }
  }
}
