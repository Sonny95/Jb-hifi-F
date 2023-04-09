import styles from '../styles/CreateAcc.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';


export default function Signup() {
    return (
        <div>
        <div className={styles.topLine}></div>
        <div className={styles.loginContainer}>
            <div className={styles.logoWrap}>
                <img className={styles.loginLogo} src='https://cdn.shopify.com/s/files/1/0024/9803/5810/files/logo.png?height=628&pad_color=fff&v=1613146384&width=1200'></img>
            </div>
            <div className={styles.loginBox}>
                <div className={styles.loginWrap}>
                    <h2>Create an account</h2>
                    <div className={styles.checkLetterWrap}>
                    <i className="bi bi-check2-square" style={{fontSize:30, color:'rgb(234, 212, 17)',marginTop:'-10px',marginRight:'10px'}}></i>
                    <p>Checkout faster with saved addresses</p>
                    </div>
                    <div className={styles.checkLetterWrap}>
                    <i className="bi bi-check2-square" style={{fontSize:30, color:'rgb(234, 212, 17)',marginTop:'-10px',marginRight:'10px'}}> </i>
                    <p>All your orders and in-store receipts in one place</p>
                    </div>
                    <div className={styles.checkLetterWrap}>
                    <i className="bi bi-check2-square" style={{fontSize:30, color:'rgb(234, 212, 17)',marginTop:'-10px',marginRight:'10px'}}></i>
                    <p>Save to your Wish List</p>
                    </div>
                    <div className={styles.checkLetterWrap}>
                    <i className="bi bi-check2-square" style={{fontSize:30, color:'rgb(234, 212, 17)',marginTop:'-10px',marginRight:'10px'}}></i>
                    <p>Access exclusive JB deals</p>
                    </div>
                    <Button variant="outline-dark" className={styles.googleButton}><img className={styles.snsImg} src='https://auth.jbhifi.com.au/pages/v1/themes/default/my_account/images/google.svg?v=acb2e2'></img>Google</Button>
                    <Button variant="outline-dark" className={styles.faceButton}><img className={styles.snsImg} src='https://auth.jbhifi.com.au/pages/v1/themes/default/my_account/images/facebook.svg?v=acb2e2'></img>Facdbook</Button>
                    <hr className={styles.line} ></hr>
                    <div className={styles.inputWrap}>
                        <input className={styles.input} placeholder='Email Address'></input>
                        <input className={styles.input} placeholder='First Name' type='password'></input>
                    </div>
                    <button className={styles.continueButton}>Continue</button>
                </div>
            </div>
            <div className={styles.creatWrap}>
                <p className={styles.accSentence}>Already have an account?</p> <p className={styles.goBackButton}>Log in</p>
                <p className={styles.accPolicyLetter}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
            <hr></hr>
            <div className={styles.loginFooter}>
                <div className={styles.footerWrap}>
                <p className={styles.footerWord1}>© JB Hi-Fi. All rights reserved.</p>
                <p className={styles.footerwords}>Privacy policy</p>
                <p className={styles.footerwords}>Terms of use</p>
                <p className={styles.footerwords}>Terms of sale</p>
                </div>
            </div>
        </div>
        <Button className={styles.helpButton} variant="warning">Help</Button>{' '}
    </div>
    )
  }
  