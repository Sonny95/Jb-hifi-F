import React, { Component } from 'react';
import { useState, useEffect, } from 'react';
import styles from '../styles/Body.module.css'
import { Route } from 'react-router-dom';

export default function ProductDetail() {

  
    const [product, setProduct] = useState([]);
    console.log(product)
  
    useEffect(() => {
      ProductApi();
    }, [])
  
    const ProductApi = async () => {
      const response = await fetch("http://localhost:8000/productDetail");
      console.log(response);
      const jsonData = await response.json();
      console.log(jsonData)
      setProduct(jsonData);
    }

  

    return (
      <>
                  {product.map((values) => {
              

              const test = ()=> {
                let is = []
                for (let i = 0; i < values.reviewStar ; i++) {
                  is.push(<i className="bi bi-star-fill"> </i>)
                }
                return is
              }
              
              return (
                <>
               
                  <div className={styles.productContentsBox}>
                    <div className={styles.productContentsWrap}>
                    <img className={styles.brandimg} src={values.brand} ></img>
                    <p className={styles.productDetail}>{values.productDetail}</p>
                    <div className={styles.reviewStar}>{test()}<p className={styles.reviewCount}>({values.review})</p></div>
                    <img src={values.productPicture} className={styles.productImg}></img>
                   
                    <div  className={styles.bottomBandWrap}>
                      <div className={styles.priceBox}><p className={styles.ticketFont}>Ticket <p className={styles.ticketNumberFont}>${(values.price)+200}</p></p> {"\n"}${values.price}</div>
                      <div className={styles.bottomPriceBand}> </div>
                      <div className={styles.bottomHeartBand}><i className="bi bi-suit-heart"></i></div>
                      <div className={styles.bottomCartBand}><i className="bi bi-cart3"></i></div>
                    </div>
                    
                  </div>
                  </div>
                </>
              )
            })}
    
      </>
    )
  }



  