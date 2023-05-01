import React from 'react'
import styles from '../styles/checkout.module.css'
import Link from 'next/link';
import Logo from '../components/Logo'
import "bootstrap-icons/font/bootstrap-icons.css";
import DeliveryBtn from '../components/DeliveryButton'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Checkout() {


    
    return (
        <div>
            <div className={styles.checkoutContainer}>
                <div className={styles.topLine}></div>
                    <div className={styles.containerBox}>

                        <div className={styles.containerLeft}>
                            <Logo />
                            <div className={styles.secureP}>
                            <i className="bi bi-file-lock"></i>
                            <p className={styles.secureP}>Secure checkout</p>
                            </div>
                                <div className = {styles.userDetailContainer}>
                                    <p>Your details</p>
                                    <div className={styles.userDetailBox}>
                                    <div>Px Name</div>
                                    <div>Px email</div>
                                    </div>
                                </div>
                                <div className={styles.deliveryBox}>     
                                    <p className={styles.deliveryP}>Delivery details</p>
                                    <div>
                                        <DeliveryBtn />
                                    </div>
                                    <Button variant="outline-dark" className={styles.DeliveryAddBtn}>Add a new address</Button>
                                </div>

                                
                                    <div className={styles.delChooseBtn}>
                                        <p>Deliver 3-5 business days</p>
                                        <div>img</div>
                                        <span>Courier</span>
                                    </div>
                                    <div>
                                        <p>$5.99</p>
                                        <div>img-CHEAPEST</div>
                                    </div>
                                <div className={styles.delChooseBtn}>
                                    <p>Choose a 2 hour window</p>
                                    <div>img</div>
                                    <span>Scheduled</span>
                                    <div>
                                        <p>$10.99</p>
                                        <div>img-FATEST</div>
                                    </div>   
                                
                                    
                        
                                </div>
                                <div>
                                    <p>Choose a 2 hour window</p>
                                    <div>img</div>
                                    <span>Scheduled</span>
                                </div>
                                <div>
                                    <p>$10.99</p>
                                    <div>img-FATEST</div>
                                </div>

                                <Button variant="dark" className={styles.CheckoutBtn}>Checkout</Button>
                        </div>


                        
                        <div className={styles.containerRight}>
                            <div>productBox</div>
                            <div>img</div>
                            <div>product name</div>
                            <div>Price</div>
                            


                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Coupon Code"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                Button
                                </Button>
                            </InputGroup>


                            <div>shipping</div>
                            <div>subtotal</div>
                            <div>price</div>
                            <div>shipping</div>
                            <div>Calculated at next step</div>


                            <div>Order Total</div>
                            <div>Aud Price</div>
                            <div> includes 10% Gst</div>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}
