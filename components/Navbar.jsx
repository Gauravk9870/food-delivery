import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import {AiFillInstagram, AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
import {GrFacebookOption} from "react-icons/gr"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Navbar = ({ showInFooter }) => {
  const [menuColor, setMenuColor] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    if(router.pathname == "/menu"){
      setMenuColor(true);
    }

  },[])

  console.log(menuColor);

  return (
    <div className={styles.navbar} style={showInFooter ? {position:"relative"}:{position:"absolute", width:"100%", top:0}}>
      <div className={`${styles.container} ${menuColor && styles.menuNavColor}`} style={showInFooter && {borderRadius : "30px 30px 0px 0px", background:"#111"}}>
        <div className={styles.left}>
          <span>
            Meal Monkey .
          </span>
        </div>
        {
          showInFooter ? (
            <>
            <div className={styles.center}>
              <div>
                @ {new Date().getFullYear()} 
                <span style={{color:"red"}}> Meal Monkey</span> | All Rights Reserved
              </div>
            </div>
            <div className={styles.right}>
              <AiOutlineTwitter/>
              <AiFillInstagram/>
              <GrFacebookOption/>
              <AiFillYoutube/>
            </div>
          </>
        ) : (
          <>
            <ul className={styles.center}>
              <Link href="/" passHref>
                <li>Home</li>
              </Link>
              <Link href="/menu" passHref>
                <li>Menu</li>
              </Link>
              <Link href="/offers" passHref>
                <li>Offers</li>
              </Link>
              <Link href="/services" passHref>
                <li>Services</li>
              </Link>
              <Link href="/contact" passHref>
                <li>Contact</li>
              </Link>
              
            </ul>
            <div className={styles.right}>
          <button>Login</button>
        </div>
          </>
        )}
        
        
      </div>
    </div>
  );
};

export default Navbar;
