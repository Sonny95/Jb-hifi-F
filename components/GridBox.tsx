import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/ProductDetail.module.css'

export default function GridBox({product}) {
  console.log(product)
  const [mainPhoto, setMainPhoto] = useState(product?.productPicture);
  

  return (
    <div>
        <div className={styles.grindContainer}>
                        <div className={styles.gridBox}>
                          <img className={styles.gridPts} src={product?.productPicture}></img>
                          <img className={styles.gridPts} src={product?.productDetailPic1}></img>
                          <img className={styles.gridPts} src={product?.productDetailPic2}></img>
                          <div className={styles.gridPts}></div>
                          <div className={styles.gridPts}></div>
                          <div className={styles.gridPts}></div>
                        </div>
                    </div>
                           
    </div>
  )
}