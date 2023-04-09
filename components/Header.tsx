import styles from '../styles/Header.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Link from 'next/link';
import { useSelector, useDispatch, TypedUseSelectorHook  } from 'react-redux';
import  { userSlice } from '../pages/api/features/userSlice'
import type { RootState, AppDispatch } from '../pages/app/store'
import { useAppDispatch, useAppSelector } from '../pages/app/hooks'




export default function Header() {

    const dispatch = useDispatch()
    const isLogedIn = useAppSelector((state: RootState) => state.user.isLogin);
    console.log(isLogedIn)


    return (
    <div>
        {/* useselector  */}
        <div className={styles.head}>
            <div className={styles.headContainer}>
                <div className={styles.headWrap}>
                
                    <Link href='/'><img className={styles.logo} src='https://geppsxhomehq.com.au/wp-content/uploads/2014/10/JB_HORIZONTAL_new.jpg'></img></Link>
                    <div className={styles.searchBarWrap}>
                    <input className={styles.navSearchBar} placeholder='Search products, brands, and more...'></input>
                    </div>
                    <div className={styles.headIconsWrap}>
                    <i className="bi bi-shop" style={{fontSize:'33px',margin:'10px 15px',cursor:'pointer'}}></i>
                    <i className="bi bi-suit-heart" style={{fontSize:'33px',margin:'10px 15px',cursor:'pointer'}}></i>
                    
                    {isLogedIn ? 
                    (<Link href="/logout"><i className="bi bi-person-x-fill"   style={{fontSize:'33px',margin:'10px 15px',cursor:'pointer'}}></i></Link>) : 
                    (<Link href="/login"><i className="bi bi-person"   style={{fontSize:'33px',margin:'10px 15px',cursor:'pointer'}}></i></Link>)
                    }
                    

                    <i className="bi bi-cart3" style={{fontSize:'33px',margin:'10px 15px',cursor:'pointer'}}></i>
                    </div>
                </div>
            </div> 
            <div className={styles.NavCotainer}>
                <div className={styles.NavWrap}>
                <p className={styles.Navcontents}>Product</p>
                <p className={styles.Navcontents}>Brands</p>
                <p className={styles.Navcontents}>Deal & Sales</p>
                <p className={styles.Navcontents}>Services</p>
                <p className={styles.Navcontents}>Gift Cards</p>
                </div>
            </div>
        </div>

    </div>
    )
}