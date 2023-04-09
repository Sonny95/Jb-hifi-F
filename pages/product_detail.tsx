import styles from '../styles/ProductDetail.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import Footer from '../components/Footer'

export default function ProductDetail() {

    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        ProductDetailApi();
    }, [])

    const ProductDetailApi = async () => {
        const response = await fetch("http://localhost:8000/productDetailPage");
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData)
        setProductDetail(jsonData);
    }

    const cutText = (string, n) => {
        return string?.length > n ? string.substr(0, n) + '...' : string
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.detailPage}>
                <div className={styles.detailWrap}>
                    <div className={styles.detailLeftContainer}>
                        <div className={styles.detailBox1}>
                            <div className={styles.box1Container}>
                                <div className={styles.detailPhotos}></div>
                                <div className={styles.detailPhotos}></div>
                                <div className={styles.detailPhotos}></div>
                                <div className={styles.detailPhotos}></div>
                                <div className={styles.detailPhotos}></div>
                                <div className={styles.detailPhotos}></div>
                                <div className={styles.detailPhotos}></div>
                            </div>
                        </div>
                        <div className={styles.detailBox2}>
                            <div className={styles.symbolPhoto}>product Photo</div>
                        </div>
                        <h4>FREQUENTLY BOUGHT TOETHER</h4>
                        <div className={styles.detailBox4}>

                            <div className={styles.smilarProduct}>d</div>
                            <div className={styles.smilarProduct}>d</div>
                        </div>
                    </div>
                    <div className={styles.detailBox3}>
                        <p>Brand</p>
                        <p>Product Detail</p>
                        <p>Review and Star</p>r
                        <div className={styles.priceBox}>Price</div>
                        <div className={styles.sizeChartContainer}>
                            <div className={styles.sizeChartBox}>1</div>
                            <div className={styles.sizeChartBox}>2</div>
                            <div className={styles.sizeChartBox}>3</div>
                            <div className={styles.sizeChartBox}>4</div>
                        </div>
                        <div className={styles.warrantyContainer}>
                            <p>Add extended warranty</p>
                            <div className={styles.warrantyPriceBox}>JB Hi-Fi Extra Care</div>
                        </div>
                        <div className={styles.productKetLetterContainer}>
                            <p>key1</p>
                            <p>key2</p>
                            <p>key3</p>
                            <p>key4</p>
                        </div>
                        <div className={styles.cartButtonContainer}>
                            <Button variant="dark" className={styles.cartButton}><i className="bi bi-cart2"></i>Add to cart</Button>
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
                    <div className={styles.productIntContainer}>
                        <h4>PRODUCT OVERVIEW</h4>
                        <p>WHATEVER</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <Button className={styles.helpButton} variant="warning"><i className="bi bi-question-circle"></i>Help</Button>{' '}
        </div>
    )
}

{/* 
                    <div className={styles.detailBox2}>
                        <div> {fake.map((values) => {
                            return (
                                <>
                                    <div className={styles.detailContentsBox}>
                                        <h6>{cutText(values.title, 20)}</h6>
                    <p>{cutText(values.description, 40)}</p>
                
                                        <img src={values.image} className={styles.productImg}></img>

                                    </div>
                                </>
                            )
                        })}
                        </div>
                    </div> */}