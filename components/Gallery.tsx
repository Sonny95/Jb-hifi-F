import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/ProductDetail.module.css'

export default function Gallery({product}) {
  console.log(product)
  const [mainPhoto, setMainPhoto] = useState(product?.productPicture);
  
  const handleClick = (event) => {
    setMainPhoto(event.target.src);
  }//사진 변경 윶스ㅡ테이트랑 같이

useEffect(()=>{
  if (product) {
    setMainPhoto(product.productPicture);
  }// when product change, then go ahead
}, [product?.productPicture]);

  return (
    <div>
        <div className={styles.grindContainer}>
                    <div className={styles.detailBox1}>
                        <div className={styles.box1Container}>
                        
                            <img onClick={handleClick} className={styles.detailPhotos} src={product?.productPicture}></img>
                            <img onClick={handleClick} className={styles.detailPhotos} src={product?.productDetailPic1}></img>
                            <img onClick={handleClick} className={styles.detailPhotos} src={product?.productDetailPic2}></img>
                            <div className={styles.detailPhotos}></div>
                            <div className={styles.detailPhotos}></div>
                            <div className={styles.detailPhotos}></div>
                            <div className={styles.detailPhotos}></div>
                            <div className={styles.detailPhotos}></div>
                       
                        </div>
                        {/* onClick={onSubmit} */}
                        {/* onClick={() => alert("click")} */}
                    </div>
                    <div className={styles.detailBox2}>
                        <img src={mainPhoto} className={styles.mainPhoto}></img>
                    </div>
                  </div>            
    </div>
  )
}