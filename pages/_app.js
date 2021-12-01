import '../styles/globals.css'
import App from 'next/app'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

MyApp.getinitialProps = async(appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return {...appProps}
}

export default MyApp
