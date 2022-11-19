import { useEffect, useState } from "react";
import styles from "../styles/AddBtn.module.scss";

const AddBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (qty <= 0) {
      setQty(0);
      setShowBtn(false);
    }
  }, [qty]);

  const handleAddBtn = () => {
    setQty(1);
    setShowBtn(true);
  };

  return (
    <div className={styles.btn}>
      {showBtn ? (
        <div className={styles.addMore}>
          <div className={styles.dec} onClick={() => setQty(qty - 1)}>
            -
          </div>
          <div className={styles.qty}>{qty}</div>
          <div className={styles.inc} onClick={() => setQty(qty + 1)}>
            +
          </div>
        </div>
      ) : (
        <div className={styles.add} onClick={() => handleAddBtn()}>
          Add
        </div>
      )}
    </div>
  );
};

export default AddBtn;
