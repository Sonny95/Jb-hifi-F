
import styles from '../../styles/ProductDetail.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'



interface Product {
  id: number;
  productName: string;
  brand: string;
  productDetailPic1: string;
  productDetailPic2: string;
  productPicture: string;
  reviewStar: string;
  keyFeature1: string;
  keyFeature2: string;
  review: string;
  productDetail: string;
  price: number;
  productInfo: string;
}

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product>(); //관리위해 유즈스테이트 사용
  console.log(id,'id-F')
  console.log(product,'product')
  console.log(setProduct,'setproduct')
  



  const fetchProduct = (data) => {
    console.log(data,'data')
    let config = {
      params: {
        id: data
      }
    }
    axios.get(`http://localhost:8000/productDetail/${id}`,config)
    .then((response) => {
      if (response.data ===null){
        console.log('error')
    }else {
      setProduct(response.data) //setProduct 다타 넣음 사용우이해
      console.log(setProduct,'setProduct')
      console.log(response.data,'data')
      console.log(response.data.brand)
    }
    })
    .catch(error => {
      console.error(error);
    });

  }

  //태초에 한번만 호출할거라서 유즈이펙트 발동
  useEffect(()=>{
    if(id){
    fetchProduct(id) //함수호출을함 
  }
  },[id]);




  const renderStars = (reviewStar) => {
        let stars = [];
        for (let i = 0; i < reviewStar; i++) {
          stars.push(<i className="bi bi-star-fill"></i>);
        }
        return stars;
      };
      
    return (
      <div>
          <Header />
  
                  
          <div className={styles.detailPage}>
              <div className={styles.detailWrap}>
                  <div className={styles.detailLeftContainer}>
                      <div className={styles.detailBox1}>
                          <div className={styles.box1Container}>
                              <img className={styles.detailPhotos} src={product?.productDetailPic1}></img>
                              <img className={styles.detailPhotos} src={product?.productDetailPic2}></img>
                              <div className={styles.detailPhotos}></div>
                              <div className={styles.detailPhotos}></div>
                              <div className={styles.detailPhotos}></div>
                              <div className={styles.detailPhotos}></div>
                              <div className={styles.detailPhotos}></div>
                          </div>
                      </div>
                      <div className={styles.detailBox2}>
                          <img src={product?.productPicture} className={styles.symbolPhoto}></img>
                      </div>
                      <h4>DON'T MISS OUT ON THIS!</h4>
                      <div className={styles.detailBox4}>
  
                          <div className={styles.missBox}>
                          Get $20 OFF a {product?.productDetail} DualSense Controller and a Bonus 3rd Earth charging cable!
                          
                          </div>
                      </div>
  
                      <div className={styles.productIntContainer}>
                      <h4>PRODUCT OVERVIEW</h4>
                      <p>{product?.keyFeature1}</p>
                      <p>{product?.keyFeature2}</p>
                      <p>{product?.keyFeature1}</p>
                      <p>{product?.keyFeature2}</p>
                  </div>
                  </div>
                  <div className={styles.detailBox3}>
                      <img src={product?.brand}></img>
                      <p>{product?.productDetail}</p>
                      <div>{renderStars(product?.reviewStar)}<p>({product?.review})</p></div>
                      <div className={styles.priceBox}>${product?.price}</div>
                  
                      <div className={styles.warrantyContainer}>
                          <p>Add extended warranty</p>
                          <div className={styles.warrantyPriceBox}>JB Hi-Fi Extra Care</div>
                      </div>
                      <div className={styles.productKetLetterContainer}>
                          <p>{product?.keyFeature1}</p>
                          <p>{product?.keyFeature2}</p>
                      </div>
                      <div className={styles.cartButtonContainer}>
                          <Button variant="dark" className={styles.cartButton}>Checkout</Button>
                          <Button variant="light" className={styles.heartButton}><i className="bi bi-heart"></i></Button>{' '}
                          <Button variant="light" className={styles.availableButton}>Check availability</Button>{' '}
                      </div>
                      <div className={styles.callContainer}>
                          <p>Seen it Cheaper? Ask our team for a JB Deal.</p>
                          <div className={styles.hoContainer}>
                              <i className="bi bi-chat-right"></i>
                              <p>Chat with us</p>
                          </div>
                          <div className={styles.hoContainer}>
                              <i className="bi bi-telephone"></i>
                              <p>Call 13 52 44</p>
                          </div>
                      </div>
                  </div>
                 
              </div>
          </div>
          
          <Footer />
          <Button className={styles.helpButton} variant="warning"><i className="bi bi-question-circle"></i>Help</Button>{' '}
      </div>
  )

}

export default Post

