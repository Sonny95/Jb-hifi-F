import React from 'react';
import { useState, useRef, forwardRef, useEffect, useImperativeHandle} from 'react';
import styles from '../styles/Body.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import style from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import loginPage from "./login"
import ProductDetail from '../components/ProductMain';





export default function Home() {

  const cutText = (string, n) => {
    return string?.length > n ? string.substr(0, n) + '...' : string
  }

  return (
    <>


     <Header></Header>
     <div>
      <div className={styles.carouselContainer}>
      <Carousel >
        <Carousel.Item>
          <img
            className="
          d-block w-100"
            src="https://images.ctfassets.net/i2qsnovxhn7q/4yVQ3Z6XdwZfW4kc7dcZAy/b4a12e2282e6eaf144787a757896271e/J-5733_-_Bose_-_Soundbar_600_Launch_-_CAROUSEL_shop_now.jpg?fm=webp"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.ctfassets.net/i2qsnovxhn7q/5NO9P0naa1MnHRLAlnNm7E/9e8627b5ec079ab46bd7efdea524fafa/jb-au-20221013-audio-apple-airpods-2ndgen-381102-shelf-v2_Desktop_STD.jpg?fm=webp"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.ctfassets.net/i2qsnovxhn7q/38U4WsL6j4pF5HNBYE9MbC/f949bd2e00d75e14e7aaf39796ac8d6c/jb-au-20230404-visual-samsung-tv-available-kayo-offer-super-v3_carousel_desktop.png?fm=webp"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      </div>

      <div className={styles.leftSideBannerContainer}>
        <img className={styles.leftSideBanner} src="https://images.ctfassets.net/i2qsnovxhn7q/5LzSX8EfOPoRwUl5PMYADO/2ce25bc6a0469915f172ea4a509d72d5/J-5733_-_Bose_-_Soundbar_600_Launch_-_DESKTOP_WINGS_shop_now_left.jpg?fm=webp"></img>
      </div>
      <div className={styles.rightSideBannerContainer}>
       <img className={styles.rightSideBanner} src="https://images.ctfassets.net/i2qsnovxhn7q/4DcDDUGVkvk98hGHFDZszv/405fad104acc32ced4c05d4c95bda09c/J-5733_-_Bose_-_Soundbar_600_Launch_-_DESKTOP_WINGS_shop_now_right.jpg?fm=webp"></img>
      </div>


      <div className={styles.smallBannerBox}>
        <div className={styles.smallBannerContainer}>
          <img className={styles.smallBaner} src='https://images.ctfassets.net/i2qsnovxhn7q/hooI1tC9FN4cK318FlRwC/972b33a08f4cc5b916ad9e800ce2e73f/jb-au-20221102-perks-welcome-creative-FINAL-super_homepage-tile.png?w=360&h=200&fm=webp'></img>
          <img className={styles.smallBaner} src='https://images.ctfassets.net/i2qsnovxhn7q/5Gus9gPIQQuRv2Lnjmq0kP/cd122ae4e048bb123fcd07a728159fd3/jb-au-20190801-giftcard_TILE_DESKTOP.jpg?w=360&h=200&fm=webp'></img>
          <img className={styles.smallBaner} src='https://images.ctfassets.net/i2qsnovxhn7q/2pfRdSBjG5EejWqtMu0qMB/fb2cf0ec7976a035554a923ded35858a/jb-au-20210331-finance-buy-now-pay-later-v3_tile.png?w=360&h=200&fm=webp'></img>
        </div>
      </div>

      

      <div className={styles.bodyProductBox}>
        <div className={styles.bodyProductContainer}>
          <h4 className={styles.bodyTitle}>RECOMMENDED FOR YOU</h4>
          <div className={styles.productBox}>
            <ProductDetail/>  
          </div>
        </div>
      </div>
      <Button className={styles.helpButton} variant="warning">Help</Button>{' '}
    </div>
     <Footer></Footer>
    </>
  )
  }


