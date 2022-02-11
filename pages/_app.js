import ThemeState from '../context/ThemeState'
import '../styles/globals.css'
import '@splidejs/splide/dist/css/splide.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeState>
      <Component {...pageProps} />
    </ThemeState>
  )
}

export default MyApp
