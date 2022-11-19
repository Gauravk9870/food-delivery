import { useEffect, useState } from "react"
import styles from "../styles/Products.module.scss"
import Product from "./Product";

const Products = ({title, productList}) => {
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(()=>{

      if(title === "veg"){
        const data = productList.filter(product => product.veg === true);
        setFilteredProduct(data);
      }
      else if(title === "non-veg"){
        const data = productList.filter(product => product.veg === false);
        setFilteredProduct(data);
      }
      else if(title === "burgers"){
        const data = productList.filter(product => product.category === "burgers");
        setFilteredProduct(data);
      }
      else if(title === "pizza"){
        const data = productList.filter(product => product.category === "pizza");
        setFilteredProduct(data);
      }
      else{
        const data = productList.filter(product => product.available === true);
        setFilteredProduct(data);
      }

    },[title])
    

  return (
    <div className={styles.products}>
      {
        filteredProduct.map((product)=>(
          <Product key={product._id} product={product} category={title}/>
        ))
      }
    </div>
  )
}

export default Products