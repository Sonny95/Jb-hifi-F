import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import styles from '../styles/SignupDetail.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from "next/router";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";



interface InvalidationForm {
    firstName : string;
    lastName : string;
    email : string;
    phone : string;
    pw : string;
    pwConfirm : string;
};
 

export default function SignupDetail() {


    const inputfirstName = useRef(null);
    const inputlastName = useRef(null);
    const inputemailName = useRef(null);
    const inputpwName = useRef(null);
    const inputphoneName = useRef(null);
    const inputpwconfirm = useRef(null);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
          .required("Type  your first name."),
        lastName: Yup.string()
          .required("Type  your last name."),
        email: Yup.string()
          .required("Type your Email.")
          .matches(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, "Type your Email."),
        phone: Yup.string()
          .required("Minumum 10.")
          .min(10, 'Type Minimum 10'),
        pw: Yup.string()
          .required("Type your password.")
          .min(1, 'Minimum8'),
        pwConfirm: Yup.string()
          .required("Confirm your password")
          .oneOf([Yup.ref('pw'), null], "Must match password"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<InvalidationForm>({
        resolver: yupResolver(validationSchema),
        defaultValues: { // 초기값 설정
            firstName : '',
            lastName : '',
            email : '',
            phone : '',
            pw : '',
            pwConfirm : '',
        }
    });

    const router = useRouter();

    const onSubmit = (data) => {
        let params = {
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
            phone : data.phone,
            pw : data.pw,
            pwConfirm : data.pwConfirm,
        };
        axios.post('http://localhost:8000/register',params)
        .then(response => { 
            if (response.status === 409) {
                alert('Email address already exists'); //alert is missing
              } else if (response.status === 200) {
                router.push('/login');
                alert('User created successfully');
              }
              console.log(response,'??')
        })
        .catch(error => {
            console.log(error.response)
        });
    };

    // if(response.data.code === 409){
    //     alert('Email already registered.')
    //     console.log(response,'WRONG EMAIL')
    // }


    
    return (
        

        <div>
            
        <div className={styles.topLine}></div>
        <div className={styles.loginContainer}>
            <div className={styles.logoWrap}>
        <Link href="/"><img className={styles.loginLogo} src='https://cdn.shopify.com/s/files/1/0024/9803/5810/files/logo.png?height=628&pad_color=fff&v=1613146384&width=1200'></img></Link>
            </div>
            <div className={styles.loginBox}>

                <form className={styles.loginWrap} onSubmit={handleSubmit(onSubmit)} >

                    <h2>New Customers</h2>
                    <h6>First Name</h6>
                    <input  className={styles.input} placeholder='Enter your first name' {...register("firstName")}/>{errors.firstName && <p>{errors.firstName.message}</p> }
                    <h6>Last Name</h6>
                    <input className={styles.input} placeholder='Enter your last name' {...register("lastName")}></input>{errors.lastName && <p>{errors.lastName.message}</p> }
                    <h6>Email Address</h6>
                    <input className={styles.input} placeholder='Enter your email' {...register("email")}></input>{errors.email && <p>{errors.email.message}</p> }
                    <h6>Phone Number</h6>
                    <input className={styles.input} placeholder='Enter your phone number'{...register("phone")}></input>{errors.phone && <p>{errors.phone.message}</p> }
                    <h6>Password</h6>
                    <input className={styles.input} placeholder='Minimum 8characters' type='password' {...register("pw")}></input>{errors.pw && <p>{errors.pw.message}</p> }
                    <h6>Password</h6>
                    <input className={styles.input} placeholder='Password Confirm' type='password' {...register("pwConfirm")}></input>{errors.pwConfirm && <p>{errors.pwConfirm.message}</p>} 
                        <button className={styles.continueButton} type="submit" >Create Account</button>
                </form>

            </div>
            <div className={styles.creatWrap}>
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
