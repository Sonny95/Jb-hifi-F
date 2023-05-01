import styles from '../styles/EmailCheck.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';

function handleClick() {
    alert('Go back to Homepage');
  }


export default function EmailCheck() {
    return (

      
<div>
        <div className={styles.topLine}></div>
        <div className={styles.loginContainer}>
            <div className={styles.logoWrap}>
                <img className={styles.loginLogo} src='https://cdn.shopify.com/s/files/1/0024/9803/5810/files/logo.png?height=628&pad_color=fff&v=1613146384&width=1200'></img>
            </div>
            <div className={styles.loginBox}>
                <div className={styles.loginWrap}>
                  <div className={styles.emailImgWrap}>
                <i className="bi bi-envelope-check" style={{fontSize:'120px', margin:'0px auto'}}></i>
                </div>
                    <h2>Check your email</h2>
                    <div className={styles.creatWrap}>
                    <p className={styles.accPolicyLetter}>You're nearly done. Just follow the link we sent to miajson95@gmail.com to verify your email and create a password.</p>
                <p className={styles.accSentence}>Be sure to check your spam folder. Still can't find it?</p> 
                <div className={styles.goBackButton} onClick={handleClick}>Resend email</div>
                {/* onClick={() => alert"click")} */}
                
            </div>
                </div>
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
  