import styles from '../styles/Login.module.css'
import React, { useState, useRef, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/router'
import  Cookies  from 'universal-cookie';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAction } from '../pages/api/features/userSlice'


export default function Login() {
    const router = useRouter()

    const dispatch = useDispatch();

    const login = useRef();

    const [logininput, setLoginInput] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [toggleBtn, setToggleBtn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const inputemailName = useRef(null);
    const inputpwName = useRef(null);
 
    
    const onSubmit = () => {
        const cookies = new Cookies();
        let params = {
            email : inputemailName.current.value,
            pw : inputpwName.current.value,
        }
       
        axios.post('http://localhost:8000/login',params)
        .then(response => { 
            if(response.data.code === 400){
                alert('Id or Password is not matched.')
                console.log(response,'??')
            }else {
                dispatch(loginAction({isLogin:true}));
                console.log(dispatch,'loginAction')
                router.push('/')
                cookies.set('token',response.data.token, {
                    path:'/',
                    httpOnly:true
                });
                console.log(response.data.token,'cookie')
            }     
        })
    };
    
    

    




    return (
        <div>
            <div className={styles.topLine}></div>
            <div className={styles.loginContainer}>
                <div className={styles.logoWrap}>
                    <Link href='/'><img className={styles.loginLogo} src='https://cdn.shopify.com/s/files/1/0024/9803/5810/files/logo.png?height=628&pad_color=fff&v=1613146384&width=1200'></img></Link>
                </div>
                <div className={styles.loginBox}>
                    <div className={styles.loginWrap}>
                        <h2>Login</h2>
                        <Button variant="outline-dark" className={styles.googleButton}><img className={styles.snsImg} src='https://auth.jbhifi.com.au/pages/v1/themes/default/my_account/images/google.svg?v=acb2e2'></img>Google</Button>
                        <Button variant="outline-dark" className={styles.faceButton}><img className={styles.snsImg} src='https://auth.jbhifi.com.au/pages/v1/themes/default/my_account/images/facebook.svg?v=acb2e2'></img>Facebook</Button>
                        <hr className={styles.line} ></hr>
                        <div className={styles.inputWrap}>
                            <input ref = {inputemailName} className={styles.input} type='text' placeholder='Email Address'></input>
                            <input ref = {inputpwName} className={styles.input} placeholder='Password' type='password'></input>
                        </div>
                        <p className={styles.psClick}>Forgot password?</p>
                        <button onClick={onSubmit} className={styles.loginButton} >Log in</button>
                        
                    </div>
                </div>
                <div className={styles.creatWrap}>
                    <p className={styles.accSentence}>Faster checkout, access your tax invoices and in-store digital receipts and get exclusive JB deals!</p>
                    <Link href="/signup_detail"><Button variant="outline-dark" className={styles.accButton}>Crate an account</Button></Link>
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