import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../pages/api/features/userSlice'
import { useRouter } from 'next/router'
import  Cookies  from 'universal-cookie';
import styles from '../styles/Logout.module.css'
import Link from 'next/link';

export default function logout() {
    const dispatch = useDispatch();
    const router = useRouter()

    const deleteCookie = function(name){
        document.cookie = name + '=;';
      }

    const handleLogout =(e)=>{
        e.preventDefault();
        dispatch(logoutAction());

        deleteCookie('token');

        router.push('/')
    }

    return (
        <div>
            <div className={styles.container}>
            <Link href='/'><img className={styles.logoutLogo} src='https://cdn.shopify.com/s/files/1/0024/9803/5810/files/logo.png?height=628&pad_color=fff&v=1613146384&width=1200'></img></Link>
            <p>If you want log out, you can clikc the button</p>
            <button onClick={(e)=> handleLogout(e)}>Logout</button>
            </div>
        </div>
    )
}



