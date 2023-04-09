import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import {store} from './app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <> 
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </>
}

export default MyApp
