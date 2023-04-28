import React, { Component } from 'react';
import { useState, useEffect, } from 'react';
import styles from '../styles/Body.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function ProductMain() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);
  
  console.log(product)
  
 

  useEffect(() => {
      GetProduct();
    }, [])
  
    const GetProduct = async () => {
      const response = await fetch("http://localhost:8000/productMain");
      console.log(response);
      const jsonData = await response.json();
      console.log(jsonData)
      setProduct(jsonData);
    }
    const renderStars = (reviewStar) => {
      let stars = [];
      for (let i = 0; i < reviewStar; i++) {
        stars.push(<i className="bi bi-star-fill"></i>);
      }
      return stars;
    };

    
    return (
      <>
        {product.map((values) => (
          <div key={values.id} className={styles.productContentsBox}>
            <Link href={`/productDetail/${values.id}`}>
              <div className={styles.productContentsWrap}>
                <img className={styles.brandimg} src={values.brand} />
                <p className={styles.productDetail}>{values.productDetail}</p>
                <div className={styles.reviewStar}>
                  {renderStars(values.reviewStar)}
                  <p className={styles.reviewCount}>({values.review})</p>
                </div>
                <img src={values.productPicture} className={styles.productImg} />
                <div className={styles.bottomBandWrap}>
                  <div className={styles.priceBox}>
                    <p className={styles.ticketFont}>
                      Ticket{' '}
                      <span className={styles.ticketNumberFont}>
                        ${(values.price + 200)}
                      </span>
                    </p>{' '}
                    ${values.price}
                  </div>
                  <div className={styles.bottomPriceBand}></div>
                  <div className={styles.bottomHeartBand}>
                    <i className="bi bi-suit-heart"></i>
                  </div>
                  <div className={styles.bottomCartBand}>
                    <i className="bi bi-cart3"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </>
    );
  }







//   import React, { useState, useEffect } from 'react';
// import styles from '../styles/Body.module.css';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function ProductMain() {
//   const [products, setProducts] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch('http://localhost:8000/productMain');
//       const jsonData = await response.json();
//       setProducts(jsonData);
//     }
//     fetchProducts();
//   }, []);

//   const handleProductClick = (productId) => {
//     router.push(`/product_detail/${productId}`);
//   }

//   return (
//     <>
//       {products.map((product) => {
//         const { id, brand, productDetail, reviewStar, review, productPicture, price } = product;

//         const generateStarRating = () => {
//           let stars = [];
//           for (let i = 0; i < reviewStar; i++) {
//             stars.push(<i key={i} className="bi bi-star-fill"></i>);
//           }
//           return stars;
//         }

//         return (
//           <div key={id} className={styles.productContentsBox}>
//             <div onClick={() => handleProductClick(id)} className={styles.productContentsWrap}>
//               <img className={styles.brandimg} src={brand} />
//               <p className={styles.productDetail}>{productDetail}</p>
//               <div className={styles.reviewStar}>{generateStarRating()}<p className={styles.reviewCount}>({review})</p></div>
//               <img src={productPicture} className={styles.productImg} />
//               <div className={styles.bottomBandWrap}>
//                 <div className={styles.priceBox}>
//                   <p className={styles.ticketFont}>Ticket <p className={styles.ticketNumberFont}>${price + 200}</p></p>
//                   ${price}
//                 </div>
//                 <div className={styles.bottomPriceBand}></div>
//                 <div className={styles.bottomHeartBand}><i className="bi bi-suit-heart"></i></div>
//                 <div className={styles.bottomCartBand}><i className="bi bi-cart3"></i></div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
  